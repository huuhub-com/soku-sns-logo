import {getCopyMotion} from './phases/copyMotion';
import {getCubeMotion} from './phases/cubeMotion';
import {getEnMotion} from './phases/enMotion';
import {getWordmarkMotion} from './phases/wordmarkMotion';
import {SokuSnsLogoMotion} from './types';

export const useSokuSnsLogoMotion = (frame:number): SokuSnsLogoMotion => ({
  cube: getCubeMotion(frame),
  en: getEnMotion(frame),
  copy: getCopyMotion(frame),
  wordmark: getWordmarkMotion(frame),
});
