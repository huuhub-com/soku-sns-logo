import {clampInterpolate, soft} from "../../lib/animation";
import {getCubeMorphGeometry} from "../geometry/cubeGeometry";
import {TIMING} from "../timing";
import {CubeMotion} from "../types";

export const getCubeMotion = (frame: number): CubeMotion => {
  const transformMidpoint = 7.5;

  return ({
  geometry: getCubeMorphGeometry(frame),
  scale:
    frame < transformMidpoint
      ? clampInterpolate(frame, [TIMING.cubeStart, transformMidpoint], [1, 0.98], soft)
      : clampInterpolate(frame, [transformMidpoint, 15], [0.98, 1], soft),
  translateY:
    frame < transformMidpoint
      ? clampInterpolate(frame, [TIMING.cubeStart, transformMidpoint], [0, -6], soft)
      : clampInterpolate(frame, [transformMidpoint, 15], [-6, 0], soft),
  rotateDeg:
    frame < transformMidpoint
      ? clampInterpolate(frame, [TIMING.cubeStart, transformMidpoint], [0, -1], soft)
      : clampInterpolate(frame, [transformMidpoint, 15], [-1, 0], soft),
  splitScale: clampInterpolate(frame, [TIMING.splitFadeStart, TIMING.splitFadeEnd], [1, 1.035], soft),
  splitBlurPx: clampInterpolate(frame, [TIMING.splitFadeStart, TIMING.splitFadeEnd], [0, 1.5], soft),
  });
};
