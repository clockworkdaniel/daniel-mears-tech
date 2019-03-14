import { TimelineLite, TweenMax, Power1 } from 'gsap';

export default function toExamples() {
  const toExamplesTimeline = new TimelineLite();
  toExamplesTimeline.add(TweenMax.to('.background__overlay', 1.5, { backgroundColor: '#ea6227' }));
  toExamplesTimeline.add(TweenMax.to('.casino', 2, {
    scale: 3.4, x: '-52%', y: '-116%', rotation: '-90deg', ease: Power1.easeInOut
  }), '-=1.5');
}
