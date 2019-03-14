export default function showIframe(url) {

  const iframeContainer = document.querySelector('.examples-iframe__container');
  const iframe = iframeContainer.querySelector('iframe');

  iframeContainer.classList.add('shown');
  iframe.setAttribute('src', url);

  function potentiallyCloseIframe(e) {
    // if the target is the container/close ubtton, close the modal
    if (e.target === this || e.target.className === 'examples-iframe__close') {
      iframeContainer.classList.remove('shown');
    }
  }

  iframeContainer.addEventListener('click', potentiallyCloseIframe);

  iframe.onload = () => {
    iframe.contentWindow.document.querySelector('body').addEventListener('click', potentiallyCloseIframe);
  };
}
