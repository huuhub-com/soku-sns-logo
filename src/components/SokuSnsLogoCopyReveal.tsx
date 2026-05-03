import React from 'react';
import {CopyMotion} from '../motion/types';
import {COPY_CENTER_Y} from './SokuSnsLogoArtwork';

export const SokuSnsLogoCopyReveal: React.FC<{copy: CopyMotion}> = ({copy}) => {
  return (
    <svg viewBox="0 0 1080 1920" width="1080" height="1920" style={{position: 'absolute', inset: 0}}>
      <rect
        x={260 + 560 * copy.lineEraseProgress}
        y={COPY_CENTER_Y}
        width={560 * Math.max(0, copy.lineScaleX - copy.lineEraseProgress)}
        height={1.5}
        fill="#111111"
      />
    </svg>
  );
};
