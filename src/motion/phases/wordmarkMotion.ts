import {clampInterpolate, soft} from '../../lib/animation';
import {TIMING} from '../timing';
import {WordmarkMotion} from '../types';

export const getWordmarkMotion = (frame:number): WordmarkMotion => ({
  wordmarkOpacity: clampInterpolate(frame,[TIMING.wordmarkStart,TIMING.wordmarkEnd],[0,1],soft),
  wordmarkScale: clampInterpolate(frame,[TIMING.wordmarkStart,TIMING.wordmarkEnd],[0.985,1],soft),
  wordmarkTranslateY: clampInterpolate(frame,[TIMING.wordmarkStart,TIMING.wordmarkEnd],[6,0],soft),
  taglineOpacity: clampInterpolate(frame,[TIMING.taglineStart,TIMING.taglineEnd],[0,1],soft),
  taglineTranslateY: clampInterpolate(frame,[TIMING.taglineStart,TIMING.taglineEnd],[4,0],soft),
});
