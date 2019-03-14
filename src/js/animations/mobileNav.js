import {
  TweenMax, TimelineLite, Power1, Power4, Expo, Back
} from 'gsap/TweenMax';

export function openMobNav() {

  const openMobNavTimeline = new TimelineLite();

  openMobNavTimeline.set('.header__color-wipe', { opacity: 1 });
  openMobNavTimeline.add(TweenMax.to('.header__nav-trigger', 0.4, { borderWidth: '0.25rem', ease: Expo.easeInOut }));
  openMobNavTimeline.add(TweenMax.to('.header__color-wipe', 0.5, { scale: 220, ease: Power4.easeIn }), '-=0.4');
  openMobNavTimeline.add(TweenMax.staggerFromTo('.header__nav li', 0.4, { opacity: 0 }, { opacity: 1, ease: Back.easeIn }, 0.1), '-=0.4');
}

export function closeMobNav() {

  const closeMobNavTimline = new TimelineLite();

  closeMobNavTimline.add(TweenMax.to('.header__color-wipe', 0.15, { opacity: 0, ease: Power1.easeIn }));
  closeMobNavTimline.add(TweenMax.to('.header__nav-trigger', 0.4, {
    borderLeftWidth: '1.2rem', borderRightWidth: '1.2rem', borderTopWidth: '1.1rem', borderBottomWidth: '1.1rem', ease: Expo.easeInOut
  }), '-=0.25');
  closeMobNavTimline.set('.header__color-wipe', { opacity: 0 });
}
