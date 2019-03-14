
import { viewportSize } from './viewportSize';

export const scrollTrigger = (() => {

  const headerHeight = (viewportSize.width > 700) ? 130 : 80;
  const elementArray = [];

  let currentVBottom;
  let currentVTop;
  let scrollTop;


  function setElements() {

    const elements = document.querySelectorAll('.trigger-on-scroll');

    elements.forEach((currentValue) => {
      elementArray.push({
        element: currentValue,
        top: null,
        height: null,
        lineWithinEl: (typeof currentValue.dataset.triggerPoint === 'undefined') ? 1 : parseFloat(currentValue.dataset.triggerPoint),
        triggerTop: null,
        triggerBottom: null,
        isOneShot: typeof currentValue.dataset.oneShot !== 'undefined'
      });
    });
  }

  function updateScroll() {
    scrollTop = (window.pageYOffset !== undefined)
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    currentVBottom = scrollTop + viewportSize.height;
    currentVTop = scrollTop + headerHeight;
  }

  function setLines() {

    for (let i = 0; i < elementArray.length; i++) {

      const thisObj = elementArray[i];
      const thisElement = thisObj.element;

      const bounds = thisElement.getBoundingClientRect();

      thisObj.height = bounds.height;
      thisObj.top = bounds.top + scrollTop;
      thisObj.triggerTop = thisObj.top + (thisObj.height * thisObj.lineWithinEl);
      thisObj.triggerBottom = thisObj.top + thisObj.height - 100;

    }
  }

  function checkFire() {
    for (let i = 0; i < elementArray.length; i++) {

      const thisObj = elementArray[i];
      //
      if ((thisObj.triggerTop > currentVTop)
      && (thisObj.triggerBottom < currentVBottom)) {
        thisObj.element.classList.add('triggered');
      }
      else if (!thisObj.isOneShot) {
        thisObj.element.classList.remove('triggered');
      }
    }
  }

  function pullTrigger() {
    updateScroll();
    checkFire();
  }

  function refreshLines() {
    setLines();
    updateScroll();
    checkFire();
  }

  function completeRefresh() {
    setElements();
    setLines();
    updateScroll();
    checkFire();
  }


  return {
    updateScroll,
    setElements,
    checkFire,
    setLines,
    pullTrigger,
    refreshLines,
    completeRefresh
  };
})();
