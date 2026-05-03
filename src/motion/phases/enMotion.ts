import {clampInterpolate, sharp, soft} from "../../lib/animation";
import {TIMING} from "../timing";
import {EnMotion} from "../types";

const EN_MAIN_TO_REFLECTION_LOCAL_OFFSET_Y = 648.10567;

export const getEnMotion = (frame: number): EnMotion => {
  const mainOpacity = clampInterpolate(
    frame,
    [TIMING.splitFoldStart + 1, TIMING.splitFoldEnd],
    [0, 1],
    soft,
  );

  const mainTranslateY = clampInterpolate(
    frame,
    [TIMING.enLiftStart, TIMING.enLiftEnd],
    [EN_MAIN_TO_REFLECTION_LOCAL_OFFSET_Y, 0],
    sharp,
  );

  const reflectionOpacity = clampInterpolate(
    frame,
    [TIMING.enLiftStart, TIMING.enLiftEnd],
    [0, 1],
    soft,
  );

  return {
    mainOpacity,
    mainReveal: 1,
    mainTranslateY,
    reflectionOpacity,
    reflectionReveal: 1,
    reflectionTranslateY: 0,
  };
};
