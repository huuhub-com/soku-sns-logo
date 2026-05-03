import type {CubeMorphGeometry} from "./geometry/cubeGeometry";

export type CubeMotion = {
  geometry: CubeMorphGeometry;
  scale: number;
  translateY: number;
  rotateDeg: number;
  splitScale: number;
  splitBlurPx: number;
};
export type EnMotion = {mainOpacity:number; mainReveal:number; reflectionOpacity:number; reflectionReveal:number};
export type CopyMotion = {
  primaryOpacity:number; primaryReveal:number; primaryTranslateY:number;
  secondaryOpacity:number; secondaryReveal:number; secondaryTranslateY:number;
  lineScaleX:number; lineOpacity:number;
};
export type WordmarkMotion = {wordmarkOpacity:number; wordmarkScale:number; wordmarkTranslateY:number; taglineOpacity:number; taglineTranslateY:number};
export type SokuSnsLogoMotion = {cube:CubeMotion; en:EnMotion; copy:CopyMotion; wordmark:WordmarkMotion};
