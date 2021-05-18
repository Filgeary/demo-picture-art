'use strict';

// utils
import { calcScrollbarWidth } from './utils';

// modules
import { openModal, modal } from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
  const SCROLLBAR_WIDTH = calcScrollbarWidth();

  // modal selectors
  const modalSelectors = [
    {
      trigger: '.button-design',
      modalWrapper: '.popup-design',
      closeModal: '.popup-design .popup-close',
    },
    {
      trigger: '.button-consultation',
      modalWrapper: '.popup-consultation',
      closeModal: '.popup-consultation .popup-close',
    },
  ];

  // show modal by timer
  const modalTimerId = setTimeout(() => {
    openModal('.popup-consultation', SCROLLBAR_WIDTH);
  }, 60000);

  // Main Modules
  modal(modalSelectors, SCROLLBAR_WIDTH, modalTimerId);
});
