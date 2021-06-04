/**
 * Scroll to Top
 * @param {string} buttonSelector
 */

const scrollToTop = (buttonSelector) => {
  const buttonElem = document.querySelector(buttonSelector);

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1080) {
      buttonElem.classList.add('animated', 'fadeIn');
      buttonElem.classList.remove('fadeOut');
    } else {
      buttonElem.classList.remove('fadeIn');
      buttonElem.classList.add('fadeOut');
    }
  });
};

export { scrollToTop };
