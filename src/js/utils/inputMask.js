/**
 * Check inputs on mask
 * @param {string} selector Input selector for check mask
 */

const inputMask = (selector) => {
  function setCursorPosition(pos, elem) {
    setTimeout(() => {
      elem.selectionStart = elem.selectionEnd = pos;
    });
  }

  function createMask(evt) {
    const matrix = '+7 (___) ___ __ __';
    let i = 0;
    let def = matrix.replace(/\D/g, '');
    let val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (str) {
      return /[_\d]/.test(str) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ''
        : str;
    });

    if (evt.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  const inputElements = document.querySelectorAll(selector);

  inputElements.forEach((item) => {
    item.addEventListener('input', createMask);
    item.addEventListener('focus', createMask);
    item.addEventListener('blur', createMask);
  });
};

export { inputMask };
