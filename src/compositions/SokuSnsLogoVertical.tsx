import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {SokuSnsLogoArtwork} from '../components/SokuSnsLogoArtwork';
import {SokuSnsLogoCopyReveal} from '../components/SokuSnsLogoCopyReveal';
import {clampInterpolate, cubic, sharp, soft} from '../lib/animation';

export const TIMING = {
  cubeStart: 0,
  cubeEnd: 30,
  enStart: 30,
  enMainRevealStart: 36,
  enMainRevealEnd: 56,
  enReflectionRevealStart: 44,
  enReflectionRevealEnd: 64,
  splitFadeStart: 56,
  splitFadeEnd: 68,
  enEnd: 75,
  copyStart: 75,
  copyLineDrawStart: 75,
  copyLineDrawEnd: 81,
  copyRevealStart: 80,
  copyRevealEnd: 92,
  copyLineFadeStart: 91,
  copyLineFadeEnd: 99,
  copyEnd: 99,
  wordmarkStart: 99,
  wordmarkEnd: 114,
  taglineStart: 105,
  taglineEnd: 120,
  finalHoldStart: 120,
  duration: 150,
} as const;

export const SokuSnsLogoVertical: React.FC = () => {
  const frame = useCurrentFrame();
  const tri = (f:number,a:number,b:number,c:number)=> f<=b?clampInterpolate(f,[a,b],[0,1],sharp):clampInterpolate(f,[b,c],[1,0],soft);
  return <AbsoluteFill style={{backgroundColor:'#FAFAF8',alignItems:'center',justifyContent:'center'}}><div style={{width:1080,height:1920,position:'relative'}}>
    <SokuSnsLogoArtwork
      cube0001Opacity={clampInterpolate(frame,[0,10],[1,0],soft)}
      cube0005Opacity={tri(frame,4,8,16)}
      cube0010Opacity={tri(frame,12,16,24)}
      flat0015Opacity={tri(frame,20,24,30)}
      split0020Opacity={frame < TIMING.splitFadeStart ? clampInterpolate(frame,[26,30],[0,1],sharp) : clampInterpolate(frame,[56,68],[1,0],cubic)}
      cubeScale={frame < 15 ? clampInterpolate(frame,[0,15],[1,0.98],soft) : clampInterpolate(frame,[15,30],[0.98,1],soft)}
      cubeTranslateY={frame < 15 ? clampInterpolate(frame,[0,15],[0,-6],soft) : clampInterpolate(frame,[15,30],[-6,0],soft)}
      cubeRotateDeg={frame < 15 ? clampInterpolate(frame,[0,15],[0,-1],soft) : clampInterpolate(frame,[15,30],[-1,0],soft)}
      splitScale={clampInterpolate(frame,[56,68],[1,1.035],soft)}
      splitBlurPx={clampInterpolate(frame,[56,68],[0,1.5],soft)}
      enMainOpacity={clampInterpolate(frame,[36,48],[0,1],soft)}
      enMainReveal={clampInterpolate(frame,[36,56],[0,1],sharp)}
      enReflectionOpacity={clampInterpolate(frame,[44,58],[0,0.8],soft)}
      enReflectionReveal={clampInterpolate(frame,[44,64],[0,1],sharp)}
      copyPrimaryOpacity={clampInterpolate(frame,[80,92],[0,1],soft)}
      copyPrimaryReveal={clampInterpolate(frame,[80,92],[0,1],sharp)}
      copyPrimaryTranslateY={clampInterpolate(frame,[80,92],[10,0],soft)}
      copySecondaryOpacity={clampInterpolate(frame,[80,92],[0,1],soft)}
      copySecondaryReveal={clampInterpolate(frame,[80,92],[0,1],sharp)}
      copySecondaryTranslateY={clampInterpolate(frame,[80,92],[-8,0],soft)}
      wordmarkOpacity={clampInterpolate(frame,[99,114],[0,1],soft)}
      wordmarkScale={clampInterpolate(frame,[99,114],[0.985,1],soft)}
      wordmarkTranslateY={clampInterpolate(frame,[99,114],[6,0],soft)}
      taglineOpacity={clampInterpolate(frame,[105,120],[0,1],soft)}
      taglineTranslateY={clampInterpolate(frame,[105,120],[4,0],soft)}
    />
    <SokuSnsLogoCopyReveal
      lineScaleX={clampInterpolate(frame,[75,81],[0,1],sharp)}
      lineOpacity={frame < 91 ? clampInterpolate(frame,[75,81],[0,0.75],sharp) : clampInterpolate(frame,[91,99],[0.75,0],soft)}
    />
  </div></AbsoluteFill>;
};
