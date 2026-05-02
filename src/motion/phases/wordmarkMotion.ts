import {clampInterpolate, soft} from '../../lib/animation';
import {WordmarkMotion} from '../types';

export const getWordmarkMotion = (frame:number): WordmarkMotion => ({
  wordmarkOpacity: clampInterpolate(frame,[99,114],[0,1],soft),
  wordmarkScale: clampInterpolate(frame,[99,114],[0.985,1],soft),
  wordmarkTranslateY: clampInterpolate(frame,[99,114],[6,0],soft),
  taglineOpacity: clampInterpolate(frame,[105,120],[0,1],soft),
  taglineTranslateY: clampInterpolate(frame,[105,120],[4,0],soft),
});
