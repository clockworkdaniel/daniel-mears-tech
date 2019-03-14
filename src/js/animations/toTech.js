import {
  TimelineLite, TweenMax, Power1
} from 'gsap';

export default function toTech() {
  const toTechTimeline = new TimelineLite();
  toTechTimeline.add(TweenMax.to('.background__overlay', 1.5, { backgroundColor: '#43b2ac' }));
  toTechTimeline.add(TweenMax.to('.casino', 1.5, { x: '37%', rotation: '-90deg', ease: Power1.easeInOut }), '-=1.5');
  toTechTimeline.add(TweenMax.to('#metalGradient', 1.5, {
    attr: {
      x1: 0, x2: 1, y1: 0, y2: 0
    },
    ease: Power1.easeInOut
  }), '-=1.5');
  toTechTimeline.add(TweenMax.to('.casino', 1.5, { y: '176%', ease: Power1.easeInOut }), '-=0.5');
  toTechTimeline.add(TweenMax.to('.casino', 1, { scale: 3 }), '-=1');
}
