import { postDataText } from '../api/api';

/**
 * Define Form actions
 * @param {string} url Url for posting data
 * @param {number} timerId Unical ID for timer
 */

const form = (url, timerId) => {
  const statusMessage = {
    pending: 'Ожидание заказа...',
    success: 'Ваша заявка принята!',
    error: 'Что-то пошло не так...',
  };

  const statusIcon = {
    pending: 'assets/img/spinner.svg',
    success: 'assets/img/ok.png',
    error: 'assets/img/fail.png',
  };

  document.addEventListener('submit', (evt) => {
    const target = evt.target;

    // create elements for Post status message
    const mainCont = document.createElement('div');
    mainCont.classList.add('status-message', 'animated', 'fadeIn');

    const imgElement = document.createElement('img');
    imgElement.classList.add('animated', 'fadeIn');

    // check target on Form selector
    if (target && target.matches('form')) {
      evt.preventDefault();
      clearTimeout(timerId);

      // config Default status message & append to Form
      const textCont = document.createElement('div');
      textCont.textContent = statusMessage.pending;
      imgElement.setAttribute('src', statusIcon.pending);

      mainCont.append(imgElement, textCont);
      document.body.append(mainCont);

      // create instance FormData
      const dataForm = new FormData(target);

      // posting data
      postDataText(url, dataForm)
        .then((data) => {
          console.log(data);
          imgElement.setAttribute('src', statusIcon.success);
          textCont.textContent = statusMessage.success;
        })
        .catch((err) => {
          console.error(err);
          imgElement.setAttribute('src', statusIcon.error);
          textCont.textContent = statusMessage.error;
        })
        .finally(() => {
          target.reset();

          setTimeout(() => {
            if (target.closest('[data-modal]')) {
              target.closest('[data-modal]').click();
            }

            mainCont.remove();
          }, 3000);
        });
    }
  });
};

export { form };
