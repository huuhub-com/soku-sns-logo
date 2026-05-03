import {clampInterpolate, easeOutExpo} from '../../lib/animation';
import {TIMING} from '../timing';
import {WordmarkMotion} from '../types';

export const getWordmarkMotion = (frame:number): WordmarkMotion => ({
  wordmarkReveal: clampInterpolate(frame,[TIMING.wordmarkStart,TIMING.wordmarkEnd],[0,1],easeOutExpo),
  wordmarkScale: clampInterpolate(frame,[TIMING.wordmarkStart,TIMING.wordmarkEnd],[0.992,1],easeOutExpo),
  wordmarkTranslateY: clampInterpolate(frame,[TIMING.wordmarkStart,TIMING.wordmarkEnd],[4,0],easeOutExpo),
  taglineReveal: clampInterpolate(frame,[TIMING.taglineStart,TIMING.taglineEnd],[0,1],easeOutExpo),
  taglineTranslateY: clampInterpolate(frame,[TIMING.taglineStart,TIMING.taglineEnd],[3,0],easeOutExpo),
});
