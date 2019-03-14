import { TweenMax } from 'gsap/TweenMax';
import { viewportSize } from '../utility/viewportSize';

export default function mainContentFade(isIn) {
  if (isIn) {
    TweenMax.to('.content-area', 0.4, { opacity: 1 });
  } else if (viewportSize.width < 901) {
    TweenMax.to('.content-area', 0, { opacity: 0 });
  } else {
    TweenMax.to('.content-area', 0.4, { opacity: 0 });
  }
}
