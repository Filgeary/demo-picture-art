/**
 * Check text inputs for only Russian words
 * @param {string} selector Text input selector
 */

const checkTextInput = (selector) => {
  const textInputElements = document.querySelectorAll(selector);

  textInputElements.forEach((item) => {
    item.addEventListener('keypress', function (evt) {
      if (evt.key.match(/[^а-яё 0-9]/gi)) {
        evt.preventDefault();
      }
    });
  });
};

export { checkTextInput };
