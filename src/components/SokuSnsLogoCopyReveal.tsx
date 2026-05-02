import React from 'react';

export type SokuSnsLogoCopyRevealProps = {
  lineScaleX: number;
  lineOpacity: number;
};

export const SokuSnsLogoCopyReveal: React.FC<SokuSnsLogoCopyRevealProps> = ({lineOpacity, lineScaleX}) => {
  return (
    <svg viewBox="0 0 1080 1920" width="1080" height="1920" style={{position: 'absolute', inset: 0}}>
      <rect
        x={260}
        y={1040}
        width={560}
        height={1.5}
        fill="#111111"
        opacity={lineOpacity}
        style={{transformOrigin: '260px 1040px', transform: `scaleX(${lineScaleX})`}}
      />
    </svg>
  );
};
