import {clampInterpolate, sharp, easeOutExpo} from '../../lib/animation';
import {TIMING} from '../timing';
import {CopyMotion} from '../types';

export const getCopyMotion = (frame: number): CopyMotion => {
  const copyRevealProgress = clampInterpolate(
    frame,
    [TIMING.copyRevealStart, TIMING.copyRevealEnd],
    [0, 1],
    easeOutExpo,
  );

  const lineScaleX = clampInterpolate(
    frame,
    [TIMING.copyLineDrawStart, TIMING.copyLineDrawEnd],
    [0, 1],
    easeOutExpo,
  );

  const lineEraseProgress = clampInterpolate(
    frame,
    [TIMING.copyLineEraseStart, TIMING.copyLineEraseEnd],
    [0, 1],
    sharp,
  );

  return {
    primaryOpacity: 1,
    primaryReveal: copyRevealProgress,
    primaryTranslateY: 10 * (1 - copyRevealProgress),
    secondaryOpacity: 1,
    secondaryReveal: copyRevealProgress,
    secondaryTranslateY: -10 * (1 - copyRevealProgress),
    lineScaleX,
    lineEraseProgress,
  };
};
