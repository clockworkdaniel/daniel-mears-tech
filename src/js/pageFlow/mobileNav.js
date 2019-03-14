import { viewportSize } from '../utility/viewportSize';
import { openMobNav, closeMobNav } from '../animations/mobileNav';

export default function mobileNav() {

  const headerNavElement = document.querySelector('.header__nav');

  let mobNavShown = false;

  if (viewportSize.width < 901) {

    headerNavElement.querySelector('.header__nav-trigger').addEventListener('click', () => {

      if (!mobNavShown) {
        openMobNav();
        headerNavElement.classList.add('open');
      } else {
        closeMobNav();
        headerNavElement.classList.remove('open');
      }

      mobNavShown = !mobNavShown;
    });

    headerNavElement.querySelectorAll('.header__nav a').forEach((currentValue) => {
      currentValue.addEventListener('click', () => {
        closeMobNav();
        headerNavElement.classList.remove('open');
        mobNavShown = false;
      });
    });
  }
}
