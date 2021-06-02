/**
 * Filter tabs
 * @param {Object} filter
 * @param {string} filter.filterContSelector
 * @param {string} filter.filterButtonSelector
 * @param {string} filter.itemsContSelector
 * @param {string} filter.itemSelector
 * @param {string} filter.noFilterSelector
 * @param {string} filter.classActive
 */

const filter = ({
  filterContSelector,
  filterButtonSelector,
  itemsContSelector,
  itemSelector,
  noFilterSelector,
  classActive,
}) => {
  const filterCont = document.querySelector(filterContSelector);
  const filterButtons = filterCont.querySelectorAll(filterButtonSelector);

  const itemsCont = filterCont.querySelector(itemsContSelector);
  const itemElements = itemsCont.querySelectorAll(itemSelector);
  const noFilterElem = filterCont.querySelector(noFilterSelector);

  function hideItems() {
    itemElements.forEach((item) => {
      item.style.display = 'none';
      item.classList.remove('animated', 'fadeIn');
    });
  }

  function showItems(arr) {
    if (arr.length === 0) {
      noFilterElem.style.display = 'block';
    } else {
      arr.forEach((item) => {
        noFilterElem.style.display = 'none';

        item.style.display = 'block';
        item.classList.add('animated', 'fadeIn');
      });
    }
  }

  filterCont.addEventListener('click', (evt) => {
    const target = evt.target;

    if (target && target.tagName === 'LI') {
      filterButtons.forEach((item) => {
        item.classList.remove(classActive.replace(/\./, ''));
      });
      target.classList.add(classActive.replace(/\./, ''));
      hideItems();

      const filteredItems = [...itemElements].filter((item) =>
        item.classList.contains(target.classList[0]),
      );
      showItems(filteredItems);
    }
  });
};

export { filter };
