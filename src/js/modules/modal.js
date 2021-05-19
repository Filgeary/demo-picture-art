/**
 * Open modal by selector with considering scrollbar width
 * @param {string} selector Modal Selector
 * @param {number} width Scrollbar width
 * @param {Array} fixedTriggers Trigger selectors with fixed position
 */

const openModal = (selector, width, fixedTriggers) => {
  const modalElem = document.querySelector(selector);
  modalElem.style.display = 'block';
  modalElem.classList.add('animated', 'fadeIn');
  modalElem.style.animationDuration = '800ms';

  document.body.style.overflow = 'hidden';
  document.body.style.marginRight = `${width}px`;

  if (fixedTriggers) {
    fixedTriggers.forEach((item) => {
      document.querySelector(item).style.marginRight = `${width}px`;
    });
  }
};

/**
 * Define Modal actions & handlers
 * @param {Array} selectors Array of modal selectors
 * @param {number} scrollbarWidth Scrollbar width
 * @param {number} timerId Close modal by timer Id
 */

const modal = (selectors, scrollbarWidth, timerId) => {
  let isAnyTriggerClicked = false;

  const fixedPositionTriggers = selectors
    .filter((item) => item.isTriggerFixedPosition)
    .map((item) => item.trigger);

  document.addEventListener('click', (evt) => {
    for (const item of selectors) {
      const {
        trigger,
        modalWrapper,
        closeModal,
        isTriggerNeedRemove = false,
      } = item;
      const target = evt.target;

      if (target && target.matches(trigger)) {
        evt.preventDefault();
        isAnyTriggerClicked = true;

        const mappedSelectors = selectors.map((item) => item.modalWrapper);

        for (const selector of mappedSelectors) {
          const elements = document.querySelectorAll(selector);
          elements.forEach((item) => (item.style.display = 'none'));
        }

        openModal(modalWrapper, scrollbarWidth, fixedPositionTriggers);

        if (isTriggerNeedRemove) {
          document.querySelector(trigger).remove();
        }

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

        fixedPositionTriggers.forEach((item) => {
          document.querySelector(item).style.marginRight = '0px';
        });
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

        fixedPositionTriggers.forEach((item) => {
          document.querySelector(item).style.marginRight = '0px';
        });
      }
    }
  });

  window.addEventListener('scroll', () => {
    if (
      !isAnyTriggerClicked &&
      window.pageYOffset + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight
    ) {
      isAnyTriggerClicked = true;
      clearTimeout(timerId);

      selectors
        .filter((item) => item.isTriggerNeedRemove)
        .map((item) => item.trigger)
        .forEach((item) => {
          document.querySelector(item).click();
        });
    }
  });
};

export { openModal, modal };
