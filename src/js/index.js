import '../scss/main.scss';

import { throttle } from 'lodash';

import introAnimation from './animations/introAnimation';
import mobileNav from './pageFlow/mobileNav';
import linkHandler from './pageFlow/linkHandler';
import changePage from './pageFlow/changePage';
import { scrollTrigger } from './utility/scrollTrigger';
import { viewportSize } from './utility/viewportSize';

document.addEventListener('click', linkHandler);

mobileNav();

// decide what animation to play via
if (window.location.pathname === '/' || window.location.pathname === '/index.php' || window.location.pathname === '/index') {
  introAnimation();
}

window.onpopstate = () => {
  changePage(window.location.pathname, false);
};

window.onload = () => {
  scrollTrigger.updateScroll();
  scrollTrigger.setElements();
  scrollTrigger.setLines();
  scrollTrigger.checkFire();
};

// attach listeners
window.addEventListener('scroll', throttle(scrollTrigger.pullTrigger, 50));
window.addEventListener('resize', throttle(viewportSize.getSize, 300));
window.addEventListener('resize', throttle(scrollTrigger.refreshLines, 300));
