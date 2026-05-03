import {clampInterpolate, easeOutExpo} from '../../lib/animation';
import {TIMING} from '../timing';
import {EnMotion} from '../types';

const EN_MAIN_TO_REFLECTION_LOCAL_OFFSET_Y = 648.10567;

export const getEnMotion = (frame: number): EnMotion => {
  const targetOpacity = frame < TIMING.cubeEnd ? 0 : 1;

  const mainTranslateY =
    frame < TIMING.enLiftStart
      ? EN_MAIN_TO_REFLECTION_LOCAL_OFFSET_Y
      : clampInterpolate(
          frame,
          [TIMING.enLiftStart, TIMING.enLiftEnd],
          [EN_MAIN_TO_REFLECTION_LOCAL_OFFSET_Y, 0],
          easeOutExpo,
        );

  return {
    targetOpacity,
    mainOpacity: targetOpacity,
    mainReveal: 1,
    mainTranslateY,
    reflectionOpacity: targetOpacity,
    reflectionReveal: 1,
    reflectionTranslateY: 0,
  };
};
