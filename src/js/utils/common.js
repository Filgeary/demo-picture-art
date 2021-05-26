/**
 * Calculate Scrollbar width
 * @returns {number} Scrollbar width
 */

const calcScrollbarWidth = () => {
  const divElement = document.createElement('div');

  divElement.style.width = '50px';
  divElement.style.height = '50px';
  divElement.style.overflowY = 'scroll';
  divElement.style.visibility = 'hidden';

  document.body.append(divElement);
  const scrollbarWidth = divElement.offsetWidth - divElement.clientWidth;
  divElement.remove();

  return scrollbarWidth;
};

export { calcScrollbarWidth };
