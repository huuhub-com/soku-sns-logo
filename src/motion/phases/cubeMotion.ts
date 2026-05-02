import {clampInterpolate, cubic, sharp, soft} from '../../lib/animation';
import {TIMING} from '../timing';
import {CubeMotion} from '../types';

const tri = (f:number,a:number,b:number,c:number)=> f<=b?clampInterpolate(f,[a,b],[0,1],sharp):clampInterpolate(f,[b,c],[1,0],soft);
export const getCubeMotion = (frame:number): CubeMotion => ({
  cube0001Opacity: clampInterpolate(frame,[0,10],[1,0],soft),
  cube0005Opacity: tri(frame,4,8,16),
  cube0010Opacity: tri(frame,12,16,24),
  flat0015Opacity: tri(frame,20,24,30),
  split0020Opacity: frame < TIMING.splitFadeStart ? clampInterpolate(frame,[26,30],[0,1],sharp) : clampInterpolate(frame,[56,68],[1,0],cubic),
  scale: frame < 15 ? clampInterpolate(frame,[0,15],[1,0.98],soft) : clampInterpolate(frame,[15,30],[0.98,1],soft),
  translateY: frame < 15 ? clampInterpolate(frame,[0,15],[0,-6],soft) : clampInterpolate(frame,[15,30],[-6,0],soft),
  rotateDeg: frame < 15 ? clampInterpolate(frame,[0,15],[0,-1],soft) : clampInterpolate(frame,[15,30],[-1,0],soft),
  splitScale: clampInterpolate(frame,[56,68],[1,1.035],soft),
  splitBlurPx: clampInterpolate(frame,[56,68],[0,1.5],soft),
});
