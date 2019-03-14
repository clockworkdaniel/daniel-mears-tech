import { TimelineLite } from 'gsap';
import { viewportSize } from '../utility/viewportSize';

import loadPage from './loadPage';
import { fromAboutText, toAbout } from '../animations/aboutPage';
import mainContentFade from '../animations/contentFade';
import toExamples from '../animations/toExamples';
import toTech from '../animations/toTech';

import { scrollTrigger } from '../utility/scrollTrigger';

export default function changePage(newPath, fromLink) {

  const headerNavElement = document.querySelector('.header__nav');
  const content = document.querySelector('.content-area');

  headerNavElement.style.pointerEvents = 'none';

  const fromPage = document.body.classList[1].replace('-page', '');

  if (viewportSize.width > 700 && (fromPage === 'index' || fromPage === '' || fromPage === 'about')) {
    fromAboutText();
  }

  const newURL = window.location.origin + newPath;
  if (fromLink) {
    window.history.pushState(null, null, newURL);
  }

  // fade out content
  mainContentFade(false);
  window.scrollTo(0, 0);

  const toPage = newPath.replace('/', '').replace('.php', '');

  document.body.classList.remove('static');
  document.body.className = document.body.className.replace(/(?:^|\s)[a-zA-Z]+-page(?!\S)/g, ` ${toPage}-page`);

  if (viewportSize.width < 701 && (fromPage === 'index' || fromPage === '')) {
    document.querySelector('.casino').style.transform = '';
  }

  if (viewportSize.width > 700) {
    switch (toPage) {
      case 'about':
        toAbout();
        break;
      case 'tech':
        toTech();
        break;
      case 'examples':
        toExamples();
        break;
      default:
        return;
    }
  }

  const pageLoaded = loadPage(newURL);
  const animationFinished = new Promise(((resolve) => {

    const currentlyPlaying = TimelineLite.exportRoot();

    const timer = setInterval(() => {
      const isActive = currentlyPlaying.isActive();
      if (!isActive) {
        resolve();
        clearInterval(timer);
      }

    }, 100);
  }));

  Promise.all([pageLoaded, animationFinished]).then((values) => {

    const wrapper = document.createElement('div');
    wrapper.innerHTML = values[0];

    const newContent = wrapper.querySelector('.content-area').innerHTML;

    content.innerHTML = newContent;

    headerNavElement.style.pointerEvents = '';

    mainContentFade(true);
    scrollTrigger.completeRefresh();

  }).catch(() => {
    console.log('promise failed');
    window.location = window.location.origin + newPath;
  });
}
