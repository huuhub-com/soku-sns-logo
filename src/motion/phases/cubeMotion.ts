import {clampInterpolate, cubic, sharp, soft} from '../../lib/animation';
import {TIMING} from '../timing';
import {CubeMotion} from '../types';

const tri = (f:number,a:number,b:number,c:number)=> f<=b?clampInterpolate(f,[a,b],[0,1],sharp):clampInterpolate(f,[b,c],[1,0],soft);
export const getCubeMotion = (frame:number): CubeMotion => ({
  cube0001Opacity: clampInterpolate(frame,[TIMING.cubeStart,10],[1,0],soft),
  cube0005Opacity: tri(frame,4,8,16),
  cube0010Opacity: tri(frame,12,16,24),
  flat0015Opacity: tri(frame,20,24,TIMING.cubeEnd),
  split0020Opacity: frame < TIMING.splitFadeStart ? clampInterpolate(frame,[26,TIMING.cubeEnd],[0,1],sharp) : clampInterpolate(frame,[TIMING.splitFadeStart,TIMING.splitFadeEnd],[1,0],cubic),
  scale: frame < 15 ? clampInterpolate(frame,[TIMING.cubeStart,15],[1,0.98],soft) : clampInterpolate(frame,[15,TIMING.cubeEnd],[0.98,1],soft),
  translateY: frame < 15 ? clampInterpolate(frame,[TIMING.cubeStart,15],[0,-6],soft) : clampInterpolate(frame,[15,TIMING.cubeEnd],[-6,0],soft),
  rotateDeg: frame < 15 ? clampInterpolate(frame,[TIMING.cubeStart,15],[0,-1],soft) : clampInterpolate(frame,[15,TIMING.cubeEnd],[-1,0],soft),
  splitScale: clampInterpolate(frame,[TIMING.splitFadeStart,TIMING.splitFadeEnd],[1,1.035],soft),
  splitBlurPx: clampInterpolate(frame,[TIMING.splitFadeStart,TIMING.splitFadeEnd],[0,1.5],soft),
});
