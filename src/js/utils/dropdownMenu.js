/**
 * Dropdown Menu component
 * @param {string} triggerSelector
 * @param {string} menuSelector
 */

const dropdownMenu = (triggerSelector, menuSelector) => {
  const triggerElem = document.querySelector(triggerSelector);
  const menuElem = document.querySelector(menuSelector);

  menuElem.style.display = 'none';

  triggerElem.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (
      menuElem.style.display === 'none' &&
      document.documentElement.clientWidth < 993
    ) {
      menuElem.style.display = 'block';
    } else {
      menuElem.style.display = 'none';
    }
  });

  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menuElem.style.display = 'none';
    }
  });
};

export { dropdownMenu };
