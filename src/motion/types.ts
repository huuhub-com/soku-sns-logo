import type {CubeMorphGeometry} from "./geometry/cubeGeometry";

export type SplitPanelMotion = {
  foldProgress: number;
  opacity: number;
  leftScaleX: number;
  rightScaleX: number;
  leftSkewYDeg: number;
  rightSkewYDeg: number;
  leftRotateDeg: number;
  rightRotateDeg: number;
};

export type CubeMotion = {
  geometry: CubeMorphGeometry;
  scale: number;
  translateY: number;
  rotateDeg: number;
  splitScale: number;
  splitBlurPx: number;
  splitPanel: SplitPanelMotion;
};

export type EnMotion = {
  targetOpacity: number;
  mainOpacity: number;
  mainReveal: number;
  mainTranslateY: number;
  reflectionOpacity: number;
  reflectionReveal: number;
  reflectionTranslateY: number;
};

export type CopyMotion = {
  primaryOpacity: number;
  primaryReveal: number;
  primaryTranslateY: number;
  secondaryOpacity: number;
  secondaryReveal: number;
  secondaryTranslateY: number;
  lineScaleX: number;
  lineOpacity: number;
};

export type WordmarkMotion = {
  wordmarkOpacity: number;
  wordmarkScale: number;
  wordmarkTranslateY: number;
  taglineOpacity: number;
  taglineTranslateY: number;
};

export type SokuSnsLogoMotion = {
  cube: CubeMotion;
  en: EnMotion;
  copy: CopyMotion;
  wordmark: WordmarkMotion;
};
