import {clampInterpolate, sharp, soft} from '../../lib/animation';
import {TIMING} from '../timing';
import {EnMotion} from '../types';

export const getEnMotion = (frame:number): EnMotion => ({
  mainOpacity: clampInterpolate(frame,[TIMING.enMainRevealStart,48],[0,1],soft),
  mainReveal: clampInterpolate(frame,[TIMING.enMainRevealStart,TIMING.enMainRevealEnd],[0,1],sharp),
  reflectionOpacity: clampInterpolate(frame,[TIMING.enReflectionRevealStart,58],[0,0.8],soft),
  reflectionReveal: clampInterpolate(frame,[TIMING.enReflectionRevealStart,TIMING.enReflectionRevealEnd],[0,1],sharp),
});
