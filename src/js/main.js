'use strict';

// libs
import { WOW } from 'wowjs';

// utils
import { calcScrollbarWidth } from './utils';

// modules
import { openModal, modal } from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
  // call animation lib
  new WOW({ live: false }).init();

  // constants
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
    {
      trigger: '.fixed-gift',
      modalWrapper: '.popup-gift',
      closeModal: '.popup-gift .popup-close',
      isTriggerNeedRemove: true,
      isTriggerFixedPosition: true,
    },
  ];

  // show modal by timer
  const modalTimerId = setTimeout(() => {
    openModal('.popup-consultation', SCROLLBAR_WIDTH);
  }, 60000);

  // Main Modules
  modal(modalSelectors, SCROLLBAR_WIDTH, modalTimerId);
});
