import Swup from 'swup';
import SwupFadeTheme from '@swup/fade-theme';
import { Cursor1 } from './cursor1';

export function swupTransitions() {

  const swup = new Swup({
    linkSelector : `a[href^="/index"], a[href^="index"]`,
    plugins: [new SwupFadeTheme()]
  });

  const initPage = () => {
    new Cursor1(1);
  }

  initPage();
  swup.on('contentReplaced',() => {
    initPage();
  });
}
