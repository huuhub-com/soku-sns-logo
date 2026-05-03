import {clampInterpolate, soft} from "../../lib/animation";
import {getCubeMorphGeometry} from "../geometry/cubeGeometry";
import {TIMING} from "../timing";
import {CubeMotion} from "../types";

export const getCubeMotion = (frame: number): CubeMotion => ({
  geometry: getCubeMorphGeometry(frame),
  scale:
    frame < 15
      ? clampInterpolate(frame, [TIMING.cubeStart, 15], [1, 0.98], soft)
      : clampInterpolate(frame, [15, TIMING.cubeEnd], [0.98, 1], soft),
  translateY:
    frame < 15
      ? clampInterpolate(frame, [TIMING.cubeStart, 15], [0, -6], soft)
      : clampInterpolate(frame, [15, TIMING.cubeEnd], [-6, 0], soft),
  rotateDeg:
    frame < 15
      ? clampInterpolate(frame, [TIMING.cubeStart, 15], [0, -1], soft)
      : clampInterpolate(frame, [15, TIMING.cubeEnd], [-1, 0], soft),
  splitScale: clampInterpolate(frame, [TIMING.splitFadeStart, TIMING.splitFadeEnd], [1, 1.035], soft),
  splitBlurPx: clampInterpolate(frame, [TIMING.splitFadeStart, TIMING.splitFadeEnd], [0, 1.5], soft),
});
