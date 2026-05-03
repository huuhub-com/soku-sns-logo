import {clampInterpolate, sharp, soft} from "../../lib/animation";
import {TIMING} from "../timing";
import {EnMotion} from "../types";

const EN_MAIN_LIFT_Y = -18;

export const getEnMotion = (frame: number): EnMotion => {
  const mainTranslateY = clampInterpolate(
    frame,
    [TIMING.enLiftStart, TIMING.enLiftEnd],
    [0, EN_MAIN_LIFT_Y],
    sharp,
  );

  const reflectionOpacity = clampInterpolate(
    frame,
    [TIMING.enSettleEnd - 6, TIMING.enSettleEnd],
    [0.45, 1],
    soft,
  );

  return {
    mainOpacity: 1,
    mainReveal: 1,
    mainTranslateY,
    reflectionOpacity,
    reflectionReveal: 1,
    reflectionTranslateY: clampInterpolate(frame, [TIMING.enLiftEnd, TIMING.enSettleEnd], [6, 0], soft),
  };
};
