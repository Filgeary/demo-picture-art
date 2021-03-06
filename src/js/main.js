'use strict';

// libs
import { WOW } from 'wowjs';

// utils
import { calcScrollbarWidth } from './utils/common';
import { inputMask } from './utils/inputMask';
import { showStyleCards } from './utils/showStyleCards';
import { showImgOnHover } from './utils/showImgOnHover';
import { dropdownMenu } from './utils/dropdownMenu';
import { scrollToTop } from './utils/scrollToTop';
import { dragDrop } from './utils/dragDrop';

// modules
import { openModal, modal } from './modules/modal';
import { slider } from './modules/slider';
import { form } from './modules/form';
import { calc } from './modules/calc';
import { filter } from './modules/filter';
import { accordion } from './modules/accordion';

document.addEventListener('DOMContentLoaded', () => {
  // call animation lib
  new WOW({ live: false }).init();

  // URLs getData & postData
  const URL = {
    getJSON: 'assets/db.json',
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

  // call utils
  const SCROLLBAR_WIDTH = calcScrollbarWidth();
  inputMask('[name="phone"]');
  showImgOnHover('.sizes-wrapper', '.sizes-block');
  dropdownMenu('.burger', '.burger-menu');
  scrollToTop('.button-scrollToTop');
  dragDrop('[name="upload"]', '.file_upload', '.js-drag-drop-style');

  // show modal by timer
  const modalTimerId = setTimeout(() => {
    openModal('.popup-consultation', SCROLLBAR_WIDTH);
  }, 180000);

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
  showStyleCards('.button-styles', '[data-styles-wrapper]', URL.getJSON);
  calc({
    calcContSelector: '.calc',
    sizeSelect: '#size',
    materialSelect: '#material',
    optionsSelect: '#options',
    promocodeInputSelector: '.promocode',
    totalSumSelector: '.calc-price',
    promocodeText: 'IWANTPOPART',
  });
  filter({
    filterContSelector: '.portfolio',
    filterButtonSelector: 'li',
    itemsContSelector: '.portfolio-wrapper',
    itemSelector: '.portfolio-block',
    noFilterSelector: '.portfolio-no',
    classActive: '.active',
  });
  accordion({
    accordionContSelector: '#accordion',
    buttonSelector: '.accordion-heading',
    itemSelector: '.accordion-block',
    activeClassSelector: '.ui-accordion-header-active',
  });
});
