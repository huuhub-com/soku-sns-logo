import {clampInterpolate, sharp, soft} from '../../lib/animation';
import {EnMotion} from '../types';

export const getEnMotion = (frame:number): EnMotion => ({
  mainOpacity: clampInterpolate(frame,[36,48],[0,1],soft),
  mainReveal: clampInterpolate(frame,[36,56],[0,1],sharp),
  reflectionOpacity: clampInterpolate(frame,[44,58],[0,0.8],soft),
  reflectionReveal: clampInterpolate(frame,[44,64],[0,1],sharp),
});
