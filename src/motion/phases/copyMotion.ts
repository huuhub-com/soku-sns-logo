import {clampInterpolate, sharp, soft} from '../../lib/animation';
import {TIMING} from '../timing';
import {CopyMotion} from '../types';

export const getCopyMotion = (frame:number): CopyMotion => ({
  primaryOpacity: clampInterpolate(frame,[TIMING.copyRevealStart,TIMING.copyRevealEnd],[0,1],soft),
  primaryReveal: clampInterpolate(frame,[TIMING.copyRevealStart,TIMING.copyRevealEnd],[0,1],sharp),
  primaryTranslateY: clampInterpolate(frame,[TIMING.copyRevealStart,TIMING.copyRevealEnd],[10,0],soft),
  secondaryOpacity: clampInterpolate(frame,[TIMING.copyRevealStart,TIMING.copyRevealEnd],[0,1],soft),
  secondaryReveal: clampInterpolate(frame,[TIMING.copyRevealStart,TIMING.copyRevealEnd],[0,1],sharp),
  secondaryTranslateY: clampInterpolate(frame,[TIMING.copyRevealStart,TIMING.copyRevealEnd],[-8,0],soft),
  lineScaleX: clampInterpolate(frame,[TIMING.copyLineDrawStart,TIMING.copyLineDrawEnd],[0,1],sharp),
  lineOpacity: frame < TIMING.copyLineFadeStart ? clampInterpolate(frame,[TIMING.copyLineDrawStart,TIMING.copyLineDrawEnd],[0,0.75],sharp) : clampInterpolate(frame,[TIMING.copyLineFadeStart,TIMING.copyLineFadeEnd],[0.75,0],soft),
});
