import {clampInterpolate, sharp, soft} from "../../lib/animation";
import {TIMING} from "../timing";
import {EnMotion} from "../types";

const EN_MAIN_TO_REFLECTION_LOCAL_OFFSET_Y = 648.10567;

export const getEnMotion = (frame: number): EnMotion => {
  const targetOpacity = frame < TIMING.cubeEnd ? 0 : 1;
  const liftProgress = clampInterpolate(
    frame,
    [TIMING.enLiftStart, TIMING.enLiftEnd],
    [0, 1],
    soft,
  );

  const mainTranslateY =
    frame < TIMING.enLiftStart
      ? EN_MAIN_TO_REFLECTION_LOCAL_OFFSET_Y
      : clampInterpolate(
          frame,
          [TIMING.enLiftStart, TIMING.enLiftEnd],
          [EN_MAIN_TO_REFLECTION_LOCAL_OFFSET_Y, 0],
          sharp,
        );

  return {
    targetOpacity,
    mainOpacity: targetOpacity,
    mainReveal: 1,
    mainTranslateY,
    reflectionOpacity: frame < TIMING.enLiftStart ? 0 : liftProgress,
    reflectionReveal: 1,
    reflectionTranslateY:
      frame < TIMING.enLiftStart
        ? 0
        : clampInterpolate(
            frame,
            [TIMING.enLiftEnd, TIMING.enSettleEnd],
            [6, 0],
            soft,
          ),
  };
};