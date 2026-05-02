import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {SokuSnsLogoArtwork} from '../components/SokuSnsLogoArtwork';
import {SokuSnsLogoCopyReveal} from '../components/SokuSnsLogoCopyReveal';
import {useSokuSnsLogoMotion} from '../motion/useSokuSnsLogoMotion';

export const SokuSnsLogoVertical: React.FC = () => {
  const frame = useCurrentFrame();
  const motion = useSokuSnsLogoMotion(frame);

  return (
    <AbsoluteFill style={{backgroundColor: '#FAFAF8', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{width: 1080, height: 1920, position: 'relative'}}>
        <SokuSnsLogoArtwork motion={motion} />
        <SokuSnsLogoCopyReveal copy={motion.copy} />
      </div>
    </AbsoluteFill>
  );
};
