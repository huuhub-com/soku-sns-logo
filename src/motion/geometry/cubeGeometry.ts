import {clampInterpolate, sharp, soft, cubic} from "../../lib/animation";
import {TIMING} from "../timing";
import {lerpQuad, quadToPath, type Quad} from "./polygon";

export type CubeMorphGeometry = {
  topPath: string | null;
  sidePath: string | null;
  frontPath: string | null;

  splitLeftPath: string | null;
  splitRightPath: string | null;

  topOpacity: number;
  sideOpacity: number;
  frontOpacity: number;
  splitOpacity: number;
};

const KF_0001 = { top: [{x:542.16652,y:871.6994},{x:194.97519,y:679.36287},{x:532.53477,y:514.279},{x:891.0378,y:665.81121}] as Quad, side: [{x:542.16652,y:871.6994},{x:551.01429,y:1274.4039},{x:855.3107,y:1042.7937},{x:891.0378,y:665.81121}] as Quad, front: [{x:542.16652,y:871.6994},{x:194.97519,y:679.36287},{x:235.63018,y:1057.5774},{x:551.01429,y:1274.4039}] as Quad };
const KF_0005 = { top: [{x:634.48997,y:884.96752},{x:179.815,y:769.73309},{x:425.31443,y:538.63796},{x:844.91806,y:615.0434}] as Quad, side: [{x:634.48997,y:884.9675},{x:678.95543,y:1243.8225},{x:863.08001,y:960.7466},{x:844.91806,y:615.0434}] as Quad, front: [{x:634.48997,y:884.9675},{x:179.815,y:769.73307},{x:270.62474,y:1111.6787},{x:678.95543,y:1243.8225}] as Quad };
const KF_0010 = { top: [{x:733.26532,y:920.33538},{x:270.93761,y:904.39304},{x:343.5638,y:633.37335},{x:770.4641,y:638.68746}] as Quad, side: [{x:733.26532,y:920.33538},{x:759.83587,y:1109.8719},{x:791.72055,y:842.39507},{x:770.4641,y:638.68746}] as Quad, front: [{x:733.26532,y:920.33538},{x:270.93761,y:904.39304},{x:348.87791,y:1088.6155},{x:759.83587,y:1109.8719}] as Quad };
const KF_0015 = { top: [{x:359.50613,y:717.51344},{x:350.64928,y:963.7339},{x:745.66491,y:964.6195},{x:743.89355,y:715.74208}] as Quad, front: [{x:350.64928,y:963.7339},{x:381.64826,y:1012.4466},{x:737.69375,y:1013.3324},{x:745.66491,y:964.6195}] as Quad };
const KF_0015_SIDE_DEGENERATE: Quad = [{x:743.89355,y:715.74208},{x:745.66491,y:964.6195},{x:737.69375,y:1013.3324},{x:745.66491,y:964.6195}];
const KF_0020 = { left: [{x:362.04705,y:749.08041},{x:362.03555,y:981.09043},{x:522.00089,y:981.09043},{x:522.05899,y:748.88032}] as Quad, right: [{x:541.38676,y:751.35515},{x:541.40976,y:981.09043},{x:728.7443,y:981.09043},{x:728.7453,y:751.35521}] as Quad };

const segmentT = (frame: number, start: number, end: number): number => {
  return clampInterpolate(frame, [start, end], [0, 1], sharp);
};

export const getCubeMorphGeometry = (frame: number): CubeMorphGeometry => {
  if (frame < 4) {
    const t = segmentT(frame, 0, 4);
    return { topPath: quadToPath(lerpQuad(KF_0001.top, KF_0005.top, t)), sidePath: quadToPath(lerpQuad(KF_0001.side, KF_0005.side, t)), frontPath: quadToPath(lerpQuad(KF_0001.front, KF_0005.front, t)), splitLeftPath: null, splitRightPath: null, topOpacity: 1, sideOpacity: 1, frontOpacity: 1, splitOpacity: 0 };
  }
  if (frame < 8) {
    const t = segmentT(frame, 4, 8);
    return { topPath: quadToPath(lerpQuad(KF_0005.top, KF_0010.top, t)), sidePath: quadToPath(lerpQuad(KF_0005.side, KF_0010.side, t)), frontPath: quadToPath(lerpQuad(KF_0005.front, KF_0010.front, t)), splitLeftPath: null, splitRightPath: null, topOpacity: 1, sideOpacity: 1, frontOpacity: 1, splitOpacity: 0 };
  }
  if (frame < 12) {
    const t = segmentT(frame, 8, 12);
    return { topPath: quadToPath(lerpQuad(KF_0010.top, KF_0015.top, t)), sidePath: quadToPath(lerpQuad(KF_0010.side, KF_0015_SIDE_DEGENERATE, t)), frontPath: quadToPath(lerpQuad(KF_0010.front, KF_0015.front, t)), splitLeftPath: null, splitRightPath: null, topOpacity: 1, sideOpacity: clampInterpolate(frame, [8, 12], [1, 0], soft), frontOpacity: 1, splitOpacity: 0 };
  }
  if (frame < 15) {
    const t = segmentT(frame, 12, 15);
    return { topPath: null, sidePath: null, frontPath: null, splitLeftPath: quadToPath(lerpQuad(KF_0015.top, KF_0020.left, t)), splitRightPath: quadToPath(lerpQuad(KF_0015.front, KF_0020.right, t)), topOpacity: 0, sideOpacity: 0, frontOpacity: 0, splitOpacity: 1 };
  }
  const splitOpacity = frame < TIMING.splitFadeStart ? 1 : clampInterpolate(frame, [TIMING.splitFadeStart, TIMING.splitFadeEnd], [1, 0], cubic);
  return { topPath: null, sidePath: null, frontPath: null, splitLeftPath: quadToPath(KF_0020.left), splitRightPath: quadToPath(KF_0020.right), topOpacity: 0, sideOpacity: 0, frontOpacity: 0, splitOpacity };
};
