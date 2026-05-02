import { AbsoluteFill, useCurrentFrame } from "remotion";
import { SokuSnsLogoArtwork } from "../components/SokuSnsLogoArtwork";
import { SokuSnsLogoCopyReveal } from "../components/SokuSnsLogoCopyReveal";
import { clampInterpolate, cubic, sharp, soft } from "../lib/animation";

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
  const inv = (s:number,e:number)=>1-clampInterpolate(frame,[s,e],[0,1],cubic);
  const band=(a:number,b:number,c:number,d:number)=>clampInterpolate(frame,[a,b],[0,1],sharp)*inv(c,d);

  const cube0001Opacity = inv(0,10);
  const cube0005Opacity = band(4,8,10,16);
  const cube0010Opacity = band(12,16,18,24);
  const flat0015Opacity = band(20,24,26,30);
  const splitBase = clampInterpolate(frame, [26, 30], [0, 1], sharp);
  const splitFade = inv(TIMING.splitFadeStart, TIMING.splitFadeEnd);
  const split0020Opacity = splitBase * splitFade;

  const cubeArc = Math.sin((Math.min(frame, 30) / 30) * Math.PI);
  const cubeScale = 1 - cubeArc * 0.02;
  const cubeTranslateY = -cubeArc * 6;
  const cubeRotateDeg = -cubeArc;

  const enMainReveal = clampInterpolate(frame, [TIMING.enMainRevealStart, TIMING.enMainRevealEnd], [0, 1], sharp);
  const enMainOpacity = clampInterpolate(frame, [TIMING.enMainRevealStart, 48], [0, 1], soft);
  const enReflectionReveal = clampInterpolate(frame, [TIMING.enReflectionRevealStart, TIMING.enReflectionRevealEnd], [0, 1], sharp);
  const enReflectionOpacity = clampInterpolate(frame, [TIMING.enReflectionRevealStart, 56], [0, 1], soft);

  const copyPrimaryOpacity = clampInterpolate(frame, [80, 92], [0, 1], soft);
  const copyPrimaryReveal = clampInterpolate(frame, [80, 92], [0, 1], sharp);
  const copyPrimaryTranslateY = clampInterpolate(frame, [80, 92], [10, 0], soft);
  const copySecondaryOpacity = clampInterpolate(frame, [80, 92], [0, 1], soft);
  const copySecondaryReveal = clampInterpolate(frame, [80, 92], [0, 1], sharp);
  const copySecondaryTranslateY = clampInterpolate(frame, [80, 92], [-8, 0], soft);

  const wordmarkOpacity = clampInterpolate(frame, [99, 114], [0, 1], soft);
  const wordmarkScale = clampInterpolate(frame, [99, 114], [0.985, 1], soft);
  const wordmarkTranslateY = clampInterpolate(frame, [99, 114], [6, 0], soft);
  const taglineOpacity = clampInterpolate(frame, [105, 120], [0, 1], soft);
  const taglineTranslateY = clampInterpolate(frame, [105, 120], [4, 0], soft);

  const lineScaleX = clampInterpolate(frame, [75, 81], [0, 1], sharp);
  const lineOpacity = clampInterpolate(frame, [75, 81], [0, 0.85], sharp) * inv(91, 99);

  return (
    <AbsoluteFill style={{ backgroundColor: "#FAFAF8", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 1080, height: 1920, position: "relative" }}>
        <SokuSnsLogoArtwork
          cube0001Opacity={cube0001Opacity}
          cube0005Opacity={cube0005Opacity}
          cube0010Opacity={cube0010Opacity}
          flat0015Opacity={flat0015Opacity}
          split0020Opacity={split0020Opacity}
          cubeScale={cubeScale}
          cubeTranslateY={cubeTranslateY}
          cubeRotateDeg={cubeRotateDeg}
          splitScale={clampInterpolate(frame, [56, 68], [1, 1.035], soft)}
          splitBlurPx={clampInterpolate(frame, [56, 68], [0, 1.5], soft)}
          enMainOpacity={enMainOpacity}
          enMainReveal={enMainReveal}
          enReflectionOpacity={enReflectionOpacity}
          enReflectionReveal={enReflectionReveal}
          copyPrimaryOpacity={copyPrimaryOpacity}
          copyPrimaryReveal={copyPrimaryReveal}
          copyPrimaryTranslateY={copyPrimaryTranslateY}
          copySecondaryOpacity={copySecondaryOpacity}
          copySecondaryReveal={copySecondaryReveal}
          copySecondaryTranslateY={copySecondaryTranslateY}
          wordmarkOpacity={wordmarkOpacity}
          wordmarkScale={wordmarkScale}
          wordmarkTranslateY={wordmarkTranslateY}
          taglineOpacity={taglineOpacity}
          taglineTranslateY={taglineTranslateY}
        />
        <SokuSnsLogoCopyReveal lineScaleX={lineScaleX} lineOpacity={lineOpacity} />
      </div>
    </AbsoluteFill>
  );
};
