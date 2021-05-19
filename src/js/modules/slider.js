/**
 * Define slider
 * @param {Object} slider Object with params for slider
 *
 * @param {string} slider.sliderContSelector
 * @param {string} slider.slideItemSelector
 * @param {string} slider.prevButtonSelector
 * @param {string} slider.nextButtonSelector
 * @param {string} slider.direction
 * @param {number} slider.slideIndex
 * @param {Boolean} slider.isInfinityLoop
 */

const slider = ({
  sliderContSelector,
  slideItemSelector,
  prevButtonSelector,
  nextButtonSelector,
  direction = 'horizontal',
  slideIndex = 0,
  isInfinityLoop = true,
}) => {
  const sliderCont = document.querySelector(sliderContSelector);
  const slideItems = sliderCont.querySelectorAll(slideItemSelector);
  const prevButton = sliderCont.querySelector(prevButtonSelector);
  const nextButton = sliderCont.querySelector(nextButtonSelector);
  let animationId = null;

  function calcSlideIndex() {
    if (slideIndex >= slideItems.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slideItems.length - 1;
  }

  function hideSlides() {
    slideItems.forEach((item) => {
      item.style.display = 'none';
    });
  }

  function addClassToSlide() {
    slideItems.forEach((item) => {
      item.classList.add('animated');
      item.style.animationDuration = '800ms';
    });
  }

  function changeSlide() {
    calcSlideIndex();
    hideSlides();
    addClassToSlide();

    slideItems[slideIndex].style.display = 'block';
  }
  changeSlide();

  if (prevButton) {
    prevButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      slideIndex--;
      changeSlide();
      slideItems[slideIndex].classList.remove('slideInLeft');
      slideItems[slideIndex].classList.add('slideInRight');
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      slideIndex++;
      changeSlide();
      slideItems[slideIndex].classList.remove('slideInRight');
      slideItems[slideIndex].classList.add('slideInLeft');
    });
  }

  function activateAnimation() {
    if (direction === 'vertical') {
      animationId = setInterval(function () {
        slideIndex++;
        changeSlide();
        slideItems[slideIndex].classList.add('fadeIn');
      }, 5000);
    } else {
      animationId = setInterval(function () {
        slideIndex++;
        changeSlide();
        slideItems[slideIndex].classList.remove('slideInRight');
        slideItems[slideIndex].classList.add('slideInLeft');
      }, 5000);
    }
  }

  if (isInfinityLoop) {
    activateAnimation();

    sliderCont.addEventListener('mouseenter', () => {
      clearInterval(animationId);
    });
    sliderCont.addEventListener('mouseleave', () => {
      activateAnimation();
    });
  }
};

export { slider };
