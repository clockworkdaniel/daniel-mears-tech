import {
  TimelineLite, TweenMax, Power1, Power2
} from 'gsap';

import { viewportSize } from '../utility/viewportSize';

export const toAboutText = () => {
  const toAboutTextTimeline = new TimelineLite();
  if (viewportSize.width < 1201 && viewportSize.width > 700) {
    toAboutTextTimeline.add(
      TweenMax.fromTo(
        '.header__titles', 0.8,
        {
          left: '2rem', x: 0, top: '0.5rem', width: '28rem'
        },
        {
          left: '50%', x: '-50%', top: '9.5rem', width: '40rem', ease: Power2.easeInOut
        }
      )
    );
  } else {
    toAboutTextTimeline.add(TweenMax.to('.header__titles', 0.8, { top: '9.5rem', width: '40rem', ease: Power2.easeInOut }));
  }

  toAboutTextTimeline.add(TweenMax.to('.header__subtitle', 0.8, { fontSize: '3rem', ease: Power1.easeInOut }), '-=0.8');
  toAboutTextTimeline.add(TweenMax.to('.header__title', 0.7, { fontSize: '5rem', ease: Power1.easeInOut }), '-=0.3');
  toAboutTextTimeline.duration(0.9);

};

export const fromAboutText = () => {
  const fromAboutTextTimeline = new TimelineLite();
  fromAboutTextTimeline.add(TweenMax.to('.header__title', 0.7, { fontSize: '4rem', ease: Power1.easeInOut }));
  fromAboutTextTimeline.add(TweenMax.to('.header__subtitle', 0.7, { fontSize: '2.5rem', ease: Power1.easeInOut }), '-=0.4');
  if (viewportSize.width < 1201 && viewportSize.width > 700) {
    fromAboutTextTimeline.add(TweenMax.fromTo(
      '.header__titles', 0.8,
      {
        left: '50%', x: '-50%', top: '9.5rem', width: '40rem'
      },
      {
        left: '2%', x: '0%', top: '0.5rem', width: '28rem', ease: Power2.easeInOut
      }
    ), '-=0.7');
  } else {
    fromAboutTextTimeline.add(TweenMax.to('.header__titles', 0.8, { top: '0.5rem', width: '28rem', ease: Power2.easeInOut }), '-=0.7');
  }
  fromAboutTextTimeline.duration(0.9);
};

export const toAbout = () => {
  const toAboutTimeline = new TimelineLite();
  toAboutTimeline.add(TweenMax.to('.background__overlay', 1.5, { backgroundColor: '#ea27a3' }));
  toAboutTimeline.add(TweenMax.to('.casino', 1.9, {
    scale: 3, x: '121%', y: '-46%', rotation: '-11deg', ease: Power2.easeInOut
  }), '-=1.5');
  toAboutTimeline.add(TweenMax.to('#metalGradient', 2, {
    attr: {
      x1: 0, x2: 0.1, y1: 1, y2: 0
    },
    ease: Power1.easeInOut
  }), '-=1.9');
  toAboutText();
};
