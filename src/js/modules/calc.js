/**
 * Calculator
 * @param {object} calc
 * @param {string} calc.calcContSelector
 * @param {string} calc.sizeSelect
 * @param {string} calc.materialSelect
 * @param {string} calc.optionsSelect
 * @param {string} calc.promocodeInputSelector
 * @param {string} calc.totalSumSelector
 * @param {string} calc.promocodeText
 */

const calc = ({
  calcContSelector,
  sizeSelect,
  materialSelect,
  optionsSelect,
  promocodeInputSelector,
  totalSumSelector,
  promocodeText,
}) => {
  const calcCont = document.querySelector(calcContSelector);
  const size = calcCont.querySelector(sizeSelect);
  const material = calcCont.querySelector(materialSelect);
  const option = calcCont.querySelector(optionsSelect);
  const promocodeInput = calcCont.querySelector(promocodeInputSelector);
  const totalSumElem = calcCont.querySelector(totalSumSelector);
  let totalSum = 0;

  function calcTotalSum() {
    totalSum = Math.round(+size.value * +material.value + +option.value);

    if (!size.value || !material.value) {
      totalSumElem.textContent =
        'Пожалуйста, выберите размер и материал картины';
    } else if (promocodeInput.value === promocodeText) {
      totalSumElem.textContent = totalSum * 0.7;
    } else {
      totalSumElem.textContent = totalSum;
    }
  }

  size.addEventListener('change', calcTotalSum);
  material.addEventListener('change', calcTotalSum);
  option.addEventListener('change', calcTotalSum);
  promocodeInput.addEventListener('input', calcTotalSum);
};

export { calc };
