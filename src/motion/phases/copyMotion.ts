import {clampInterpolate, expoOut, sharp, soft} from '../../lib/animation';
import {TIMING} from '../timing';
import {CopyMotion} from '../types';

export const getCopyMotion = (frame:number): CopyMotion => ({
  primaryOpacity: clampInterpolate(frame,[TIMING.copyRevealStart,TIMING.copyRevealEnd],[0.28,1],expoOut),
  primaryReveal: clampInterpolate(frame,[TIMING.copyRevealStart,TIMING.copyRevealEnd],[0,1],expoOut),
  primaryTranslateY: clampInterpolate(frame,[TIMING.copyRevealStart,TIMING.copyRevealEnd],[8,0],expoOut),
  secondaryOpacity: clampInterpolate(frame,[TIMING.copyRevealStart,TIMING.copyRevealEnd],[0.28,1],expoOut),
  secondaryReveal: clampInterpolate(frame,[TIMING.copyRevealStart,TIMING.copyRevealEnd],[0,1],expoOut),
  secondaryTranslateY: clampInterpolate(frame,[TIMING.copyRevealStart,TIMING.copyRevealEnd],[-8,0],expoOut),
  lineScaleX: clampInterpolate(frame,[TIMING.copyLineDrawStart,TIMING.copyLineDrawEnd],[0,1],sharp),
  lineOpacity: frame < TIMING.copyLineFadeStart
    ? clampInterpolate(frame,[TIMING.copyLineDrawStart,TIMING.copyLineDrawEnd],[0,1],sharp)
    : clampInterpolate(frame,[TIMING.copyLineFadeStart,TIMING.copyLineFadeEnd],[1,0],soft),
});
