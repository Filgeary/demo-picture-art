/**
 * Show Image on hover
 * @param {string} imgWrapperSelector
 * @param {string} imgBoxSelector
 */

const showImgOnHover = (imgWrapperSelector, imgBoxSelector) => {
  const imgWrapper = document.querySelector(imgWrapperSelector);
  const imgBoxes = imgWrapper.querySelectorAll(imgBoxSelector);
  const regex = /-\d(?=.png|.jpg|.jpeg|.webp)/gim;

  function showImage(targetBox, index) {
    const imgElem = targetBox.querySelector('img');
    imgElem.src = imgElem.src.replace(regex, `-${++index}-1`);
    imgElem.classList.add('animated', 'fadeIn');

    const restBlocks = targetBox.querySelectorAll('p:not(.sizes-hit)');
    restBlocks.forEach((item) => (item.style.display = 'none'));
  }

  function hideImage(targetBox) {
    const imgElem = targetBox.querySelector('img');
    imgElem.src = imgElem.src.replace(regex, '');
    imgElem.classList.remove('animated', 'fadeIn');

    const restBlocks = targetBox.querySelectorAll('p:not(.sizes-hit)');
    restBlocks.forEach((item) => (item.style.display = 'block'));
  }

  imgBoxes.forEach((item, index) => {
    item.addEventListener('mouseover', () => showImage(item, index));
    item.addEventListener('mouseout', () => hideImage(item));
  });
};

export { showImgOnHover };
