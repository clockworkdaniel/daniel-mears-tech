import { viewportSize } from '../utility/viewportSize';
import showIframe from '../examples/showIframe';
import changePage from './changePage';

const isAbsolute = new RegExp('^(?:[a-z]+:)?//', 'i');

export default function linkHandler(e) {

  let el = e.target;
  // go up node list
  while (el && !el.href) {
    el = el.parentNode;
  }
  // if element being clicked bubbles to a link
  if (el) {
    // return if the link being clicked is absolute
    if (el.hasAttribute('data-iframe-trigger')) {
      if (viewportSize.width > 700) {
        e.preventDefault();
        showIframe(el.pathname);
        return;
      }
      return;
    } if (isAbsolute.test(el.getAttribute('href'))) {
      return;
    }

    e.preventDefault();
    changePage(el.pathname, true);
  }
}
