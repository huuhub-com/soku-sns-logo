import {clampInterpolate, soft} from "../../lib/animation";
import {getCubeMorphGeometry} from "../geometry/cubeGeometry";
import {TIMING} from "../timing";
import {CubeMotion} from "../types";

export const getCubeMotion = (frame: number): CubeMotion => {
  const transformMidpoint = 7.5;

  const foldProgress = clampInterpolate(
    frame,
    [TIMING.splitFoldStart, TIMING.splitFoldEnd],
    [0, 1],
    soft,
  );

  const foldPeel = foldProgress * foldProgress * (3 - 2 * foldProgress);

  const foldEdgeOpacity = clampInterpolate(
    frame,
    [TIMING.splitFoldEnd - 1.2, TIMING.splitFoldEnd],
    [1, 0],
    soft,
  );

  return {
    geometry: getCubeMorphGeometry(frame),
    scale:
      frame < transformMidpoint
        ? clampInterpolate(frame, [TIMING.cubeStart, transformMidpoint], [1, 0.98], soft)
        : clampInterpolate(frame, [transformMidpoint, TIMING.cubeEnd], [0.98, 1], soft),
    translateY:
      frame < transformMidpoint
        ? clampInterpolate(frame, [TIMING.cubeStart, transformMidpoint], [0, -6], soft)
        : clampInterpolate(frame, [transformMidpoint, TIMING.cubeEnd], [-6, 0], soft),
    rotateDeg:
      frame < transformMidpoint
        ? clampInterpolate(frame, [TIMING.cubeStart, transformMidpoint], [0, -1], soft)
        : clampInterpolate(frame, [transformMidpoint, TIMING.cubeEnd], [-1, 0], soft),
    splitScale: 1,
    splitBlurPx: 0,
    splitPanel: {
      foldProgress,
      opacity: foldEdgeOpacity,
      leftScaleX: 1 - 0.98 * foldPeel,
      rightScaleX: 1 - 0.98 * foldPeel,
      leftSkewYDeg: -8 * foldPeel,
      rightSkewYDeg: 8 * foldPeel,
      leftRotateDeg: -10 * foldPeel,
      rightRotateDeg: 10 * foldPeel,
    },
  };
};
