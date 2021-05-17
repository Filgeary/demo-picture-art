'use strict';

const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack-stream');
const browsersync = require('browser-sync');

const PATH_PUBLIC = './public';

gulp.task('copy-html', () => {
  return gulp
    .src('./src/index.html')
    .pipe(gulp.dest(PATH_PUBLIC))
    .pipe(browsersync.stream());
});

gulp.task('build-js', () => {
  return gulp
    .src('./src/js/main.js')
    .pipe(
      webpack({
        mode: 'development',
        output: {
          filename: 'bundle.js',
        },
        watch: false,
        devtool: 'eval-source-map',
      }),
    )
    .pipe(gulp.dest(PATH_PUBLIC))
    .on('end', browsersync.reload);
});

gulp.task('copy-assets', () => {
  return gulp
    .src('./src/assets/**/*.*')
    .pipe(gulp.dest(PATH_PUBLIC + '/assets'))
    .on('end', browsersync.reload);
});

gulp.task('clean', () => {
  return del('public');
});

gulp.task('watch', () => {
  browsersync.init({
    server: PATH_PUBLIC,
    port: 4000,
    notify: false,
    open: false,
    cors: true,
    ui: false,
  });

  gulp.watch('./src/index.html', gulp.parallel('copy-html'));
  gulp.watch('./src/assets/**/*.*', gulp.parallel('copy-assets'));
  gulp.watch('./src/js/**/*.js', gulp.parallel('build-js'));
});

gulp.task(
  'build',
  gulp.series('clean', gulp.parallel('copy-html', 'copy-assets', 'build-js')),
);

gulp.task('build-prod-js', () => {
  return gulp
    .src('./src/js/main.js')
    .pipe(
      webpack({
        mode: 'production',
        output: {
          filename: 'bundle.js',
        },
        devtool: 'source-map',
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        debug: true,
                        corejs: 3,
                        useBuiltIns: 'usage',
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
      }),
    )
    .pipe(gulp.dest(PATH_PUBLIC));
});

gulp.task('default', gulp.parallel('watch', 'build'));
