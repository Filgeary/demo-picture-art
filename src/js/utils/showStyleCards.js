/**
 * Show new Style Cards by trigger
 * @param {string} triggerSelector Trigger to show new cards
 * @param {string} cardSelector Card selector
 */

const showStyleCards = (triggerSelector, cardSelector) => {
  const buttonTrigger = document.querySelector(triggerSelector);
  const cards = document.querySelectorAll(cardSelector);

  cards.forEach((item) => {
    item.classList.add('animated', 'fadeInUp');
  });

  buttonTrigger.addEventListener('click', (evt) => {
    evt.preventDefault();

    cards.forEach((item) => {
      item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
      item.classList.add(
        'col-sm-3',
        'col-sm-offset-0',
        'col-xs-10',
        'col-xs-offset-1',
      );
    });

    buttonTrigger.remove();
  });
};

export { showStyleCards };
