import { getDataJSON } from '../api/api';

/**
 * Show new Style Cards by trigger
 * @param {string} triggerSelector Trigger to show new cards
 * @param {string} wrapperSelector Wrapper selector
 * @param {string} urlGetDataJSON Url to get json data
 */

const showStyleCards = (triggerSelector, wrapperSelector, urlGetDataJSON) => {
  const buttonTrigger = document.querySelector(triggerSelector);

  buttonTrigger.addEventListener('click', function (evt) {
    evt.preventDefault();

    getDataJSON(urlGetDataJSON)
      .then((data) => createCard(data.styles))
      .catch((err) => console.error(err))
      .finally(() => this.remove());
  });

  function createCard(dataList) {
    dataList.forEach(({ src, title, link }) => {
      const cardElem = document.createElement('div');

      cardElem.classList.add(
        'animated',
        'fadeInUp',
        'col-sm-3',
        'col-sm-offset-0',
        'col-xs-10',
        'col-xs-offset-1',
      );

      cardElem.innerHTML = `
          <div class="styles-block">
            <img src=${src} alt="#" />
            <h4>${title}</h4>
            <a href=${link}>Подробнее</a>
          </div>
        `;

      document.querySelector(wrapperSelector).append(cardElem);
    });
  }
};

export { showStyleCards };
