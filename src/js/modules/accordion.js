/**
 * Accordion component
 * @param {Object} accordion
 * @param {string} accordion.accordionContSelector
 * @param {string} accordion.buttonSelector
 * @param {string} accordion.itemSelector
 * @param {string} accordion.activeClassSelector
 */

const accordion = ({
  accordionContSelector,
  buttonSelector,
  itemSelector,
  activeClassSelector,
}) => {
  const accordionCont = document.querySelector(accordionContSelector);
  const buttonElements = accordionCont.querySelectorAll(buttonSelector);
  const itemElements = accordionCont.querySelectorAll(itemSelector);
  const activeClass = activeClassSelector.replace(/\./, '');

  itemElements.forEach((item) => {
    item.style.display = 'none';
    item.classList.add('animated', 'fadeIn');
  });

  buttonElements.forEach((item) => {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();

      itemElements.forEach((item) => {
        item.style.display = 'none';
      });

      buttonElements.forEach((item) => {
        if (item === this && this.classList.contains(activeClass)) {
          this.classList.remove(activeClass);
          this.nextElementSibling.style.display = 'none';
        } else if (item === this) {
          this.classList.add(activeClass);
          this.nextElementSibling.style.display = 'block';
        } else {
          item.classList.remove(activeClass);
        }
      });
    });
  });
};

export { accordion };
