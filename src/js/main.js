'use strict';

// libs
import { WOW } from 'wowjs';

// utils
import { calcScrollbarWidth } from './utils/common';
import { inputMask } from './utils/inputMask';
import { checkTextInput } from './utils/checkTextInput';
import { showStyleCards } from './utils/showStyleCards';

// modules
import { openModal, modal } from './modules/modal';
import { slider } from './modules/slider';
import { form } from './modules/form';

document.addEventListener('DOMContentLoaded', () => {
  // call animation lib
  new WOW({ live: false }).init();

  // call utils
  const SCROLLBAR_WIDTH = calcScrollbarWidth();
  inputMask('[name="phone"]');
  checkTextInput('[name="name"]');
  checkTextInput('[name="message"]');
  showStyleCards('.button-styles', '.styles-2');

  // URLs postData
  const URL = {
    postJSON: 'https://jsonplaceholder.typicode.com/posts',
    postText: 'https://echo.htmlacademy.ru',
  };

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
  slider({
    sliderContSelector: '.feedback-slider',
    slideItemSelector: '.feedback-slider-item',
    prevButtonSelector: '.main-prev-btn',
    nextButtonSelector: '.main-next-btn',
  });
  slider({
    sliderContSelector: '.main-slider',
    slideItemSelector: '.main-slider-item',
    direction: 'vertical',
  });
  form(URL.postText, modalTimerId);
});
