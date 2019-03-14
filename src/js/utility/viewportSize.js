export const viewportSize = (() => {

  let height, width;

  function getSize() {
    height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  getSize();

  return {
    getSize,
    height,
    width
  };
})();
