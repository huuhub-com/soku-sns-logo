import type { CSSProperties } from "react";

export type SokuSnsLogoArtworkProps = {
  cube0001Opacity: number;
  cube0005Opacity: number;
  cube0010Opacity: number;
  flat0015Opacity: number;
  split0020Opacity: number;
  cubeScale: number;
  cubeTranslateY: number;
  cubeRotateDeg: number;
  splitScale: number;
  splitBlurPx: number;
  enMainOpacity: number;
  enMainReveal: number;
  enReflectionOpacity: number;
  enReflectionReveal: number;
  copyPrimaryOpacity: number;
  copyPrimaryReveal: number;
  copyPrimaryTranslateY: number;
  copySecondaryOpacity: number;
  copySecondaryReveal: number;
  copySecondaryTranslateY: number;
  wordmarkOpacity: number;
  wordmarkScale: number;
  wordmarkTranslateY: number;
  taglineOpacity: number;
  taglineTranslateY: number;
};

const enBounds = { x: 275, y: 500, width: 530, height: 500 };
const copyCenterY = 1146;

export const SokuSnsLogoArtwork: React.FC<SokuSnsLogoArtworkProps> = (p) => {
  const cubeStyle: CSSProperties = {
    transformBox: "fill-box",
    transformOrigin: "center center",
    transform: `translateY(${p.cubeTranslateY}px) scale(${p.cubeScale}) rotate(${p.cubeRotateDeg}deg)`,
  };

  const enMainHeight = enBounds.height * p.enMainReveal;
  const enReflectionHeight = enBounds.height * p.enReflectionReveal;

  return (
    <svg viewBox="0 0 1080 1920" width="1080" height="1920">
      <defs>
        <clipPath id="enMainRevealClip">
          <rect x={enBounds.x} y={enBounds.y + enBounds.height - enMainHeight} width={enBounds.width} height={enMainHeight} />
        </clipPath>
        <clipPath id="enReflectionRevealClip">
          <rect x={enBounds.x} y={enBounds.y + enBounds.height - enReflectionHeight} width={enBounds.width} height={enReflectionHeight} />
        </clipPath>
        <clipPath id="copyPrimaryClip">
          <rect x="220" y={copyCenterY - 90 * p.copyPrimaryReveal} width="650" height={90 * p.copyPrimaryReveal} />
        </clipPath>
        <clipPath id="copySecondaryClip">
          <rect x="220" y={copyCenterY} width="650" height={90 * p.copySecondaryReveal} />
        </clipPath>
      </defs>

      <g style={cubeStyle}>
        <g id="kf_0001_cube" opacity={p.cube0001Opacity}><path d="M 542.16652,871.6994 194.97519,679.36287 532.53477,514.279 891.0378,665.81121 Z" fill="#111111" /><path d="m 542.16652,871.6994 8.84777,402.7045 304.29641,-231.6102 35.7271,-376.98249 z" fill="#1b1b1b" /><path d="M 542.16652,871.6994 194.97519,679.36287 235.63018,1057.5774 551.01429,1274.4039" fill="#2b2b2b" /></g>
        <g id="kf_0005_cube" opacity={p.cube0005Opacity}><path d="M 634.48997,884.96752 179.815,769.73309 425.31443,538.63796 844.91806,615.0434 Z" fill="#111111" /><path d="m 634.48997,884.9675 44.46546,358.855 184.12458,-283.0759 -18.16195,-345.7032" fill="#1b1b1b" /><path d="M 634.48997,884.9675 179.815,769.73307 l 90.80974,341.94563 408.33069,132.1438" fill="#2b2b2b" /></g>
        <g id="kf_0010_cube" opacity={p.cube0010Opacity}><path d="M 733.26532,920.33538 270.93761,904.39304 343.5638,633.37335 770.4641,638.68746" fill="#111111" /><path d="M 733.26532,920.33538 759.83587,1109.8719 791.72055,842.39507 770.4641,638.68746" fill="#2c2c2c" /><path d="m 270.93761,904.39304 77.9403,184.22246 410.95796,21.2564 -26.57055,-189.53652" fill="#2b2b2b" /></g>
        <g id="kf_0015_flat" opacity={p.flat0015Opacity}><path d="m 359.50613,717.51344 -8.85685,246.22046 395.01563,0.8856 -1.77136,-248.87742" fill="#111111" /><path d="m 350.64928,963.7339 30.99898,48.7127 356.04549,0.8858 7.97116,-48.7129" fill="#2b2b2b" /></g>
        <g
          id="kf_0020_split"
          opacity={p.split0020Opacity}
          style={{ transformBox: "fill-box", transformOrigin: "center center", transform: `scale(${p.splitScale})`, filter: p.splitBlurPx > 0 ? `blur(${p.splitBlurPx}px)` : undefined }}
        >
          <path d="m 362.04705,749.08041 -0.0115,232.01002 h 159.96534 l 0.0581,-232.21011" fill="#111" />
          <path d="m 541.38676,751.35515 0.023,229.73528 H 728.7443 l 0.001,-229.73522" fill="#111" />
        </g>
      </g>

      <g id="target_en">
        <g id="en_reflection" clipPath="url(#enReflectionRevealClip)" opacity={p.enReflectionOpacity} style={{ transform: `translateY(${(1 - p.enReflectionReveal) * 8}px)` }}>
          <text x="282" y="992" fontSize="280" fontFamily="Inter" fontWeight="900" fill="#c9c9c9">EN</text>
        </g>
        <g id="en_main" clipPath="url(#enMainRevealClip)" opacity={p.enMainOpacity} style={{ transform: `translateY(${(1 - p.enMainReveal) * 12}px)` }}>
          <text x="282" y="820" fontSize="280" fontFamily="Inter" fontWeight="900" fill="#111110">EN</text>
        </g>
      </g>

      <g id="copy_primary" opacity={p.copyPrimaryOpacity} clipPath="url(#copyPrimaryClip)" style={{ transform: `translateY(${p.copyPrimaryTranslateY}px)` }}>
        <text x="257.6" y="1108.37" fontSize="56.25" fontFamily="Noto Sans JP" fontWeight="700" letterSpacing="33.7" fill="#2b2b2b">覚えたい英文を</text>
      </g>
      <g id="copy_secondary" opacity={p.copySecondaryOpacity} clipPath="url(#copySecondaryClip)" style={{ transform: `translateY(${p.copySecondaryTranslateY}px)` }}>
        <text x="257.6" y="1184.87" fontSize="56.25" fontFamily="Noto Sans JP" fontWeight="700" letterSpacing="3.3" fill="#c9c9c9">シャドウイング×暗唱</text>
      </g>

      <g id="soku_wordmark" opacity={p.wordmarkOpacity} style={{ transformBox: "fill-box", transformOrigin: "center center", transform: `translateY(${p.wordmarkTranslateY}px) scale(${p.wordmarkScale})` }}>
        <text x="324.38" y="1491.2" fontSize="160.093" fontFamily="Inter" fontWeight="700" letterSpacing="-5.8" fill="#111">SOKU</text>
      </g>
      <g id="soku_tagline" opacity={p.taglineOpacity} style={{ transform: `translateY(${p.taglineTranslateY}px)` }}>
        <text x="412.12" y="1540.76" fontSize="34.37" fontFamily="Noto Sans JP" fontWeight="700" letterSpacing="20.6" fill="#969696">使える英語</text>
      </g>
    </svg>
  );
};
