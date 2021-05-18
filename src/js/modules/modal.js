/**
 * Open modal by selector with considering scrollbar width
 * @param {string} selector Modal Selector
 * @param {number} width Scrollbar width
 */

const openModal = (selector, width) => {
  document.querySelector(selector).style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.body.style.marginRight = `${width}px`;
};

/**
 * Define Modal actions & handlers
 * @param {Array} selectors Array of modal selectors
 * @param {number} scrollbarWidth Scrollbar width
 * @param {Function} timerId Close modal by timerId
 */

const modal = (selectors, scrollbarWidth, timerId) => {
  document.addEventListener('click', (evt) => {
    for (const item of selectors) {
      const { trigger, modalWrapper, closeModal } = item;
      const target = evt.target;

      if (target && target.matches(trigger)) {
        evt.preventDefault();

        const mappedSelectors = selectors.map((item) => item.modalWrapper);

        for (const selector of mappedSelectors) {
          const elements = document.querySelectorAll(selector);
          elements.forEach((item) => (item.style.display = 'none'));
        }

        openModal(modalWrapper, scrollbarWidth);
        clearTimeout(timerId);
      } else if (
        target &&
        (target.matches(modalWrapper) ||
          target.matches(closeModal) ||
          target.closest(closeModal))
      ) {
        evt.preventDefault();
        target.closest(modalWrapper).style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = '0px';
      }
    }
  });

  document.addEventListener('keydown', (evt) => {
    for (const item of selectors) {
      const { modalWrapper } = item;
      const modalElement = document.querySelector(modalWrapper);

      if (evt.code === 'Escape' && modalElement.style.display === 'block') {
        modalElement.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = '0px';
      }
    }
  });
};

export { openModal, modal };
