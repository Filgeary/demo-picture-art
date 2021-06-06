/**
 * Drag & Drop files
 * @param {string} inputSelector Input selector
 * @param {string} inputWrapperSelector Input wrapper selector
 * @param {string} styleClassSelector CSS class for styling
 */

// native Drag&Drop events implemented in modern browsers already
// * - impossible drag events from OS
// drag *
// dragend *
// dragenter - объект над dropArea
// dragexit *
// dragleave - объект за пределами dropArea
// dragover - объект зависает над dropArea
// dragstart *
// drop - объект отправлен в dropArea

const dragDrop = (inputSelector, inputWrapperSelector, styleClassSelector) => {
  const inputElements = document.querySelectorAll(inputSelector);
  const styleClass = styleClassSelector.replace(/\./, '');

  function addStyling(elem) {
    elem.closest(inputWrapperSelector).classList.add(styleClass);
  }

  function removeStyling(elem) {
    elem.closest(inputWrapperSelector).classList.remove(styleClass);
  }

  inputElements.forEach((item) => {
    item.addEventListener('dragover', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();

      addStyling(item);
    });
  });

  inputElements.forEach((item) => {
    item.addEventListener('dragleave', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();

      removeStyling(item);
    });
  });
};

export { dragDrop };
