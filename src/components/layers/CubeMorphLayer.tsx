import React from "react";
import type {CubeMorphGeometry} from "../../motion/geometry/cubeGeometry";
import {quadToPath} from "../../motion/geometry/polygon";
import type {SplitPanelMotion} from "../../motion/types";

export const CubeMorphLayer: React.FC<{
  geometry: CubeMorphGeometry;
  splitScale: number;
  splitBlurPx: number;
  splitPanel: SplitPanelMotion;
}> = ({geometry, splitScale, splitBlurPx, splitPanel}) => {
  const leftSplitPath = splitPanel.leftQuad
    ? quadToPath(splitPanel.leftQuad)
    : geometry.splitLeftPath;

  const rightSplitPath = splitPanel.rightQuad
    ? quadToPath(splitPanel.rightQuad)
    : geometry.splitRightPath;

  return (
    <g
      id="cube_morph"
      style={{
        transform: `scale(${splitScale})`,
        transformOrigin: "540px 860px",
        filter: splitBlurPx > 0 ? `blur(${splitBlurPx}px)` : undefined,
      }}
    >
      {geometry.topPath ? (
        <path
          id="cube_morph_top"
          d={geometry.topPath}
          fill="#111111"
          opacity={geometry.topOpacity}
        />
      ) : null}

      {geometry.sidePath ? (
        <path
          id="cube_morph_side"
          d={geometry.sidePath}
          fill="#1b1b1b"
          opacity={geometry.sideOpacity}
        />
      ) : null}

      {geometry.frontPath ? (
        <path
          id="cube_morph_front"
          d={geometry.frontPath}
          fill="#2b2b2b"
          opacity={geometry.frontOpacity}
        />
      ) : null}

      {leftSplitPath ? (
        <path
          id="cube_morph_split_left"
          d={leftSplitPath}
          fill="#111111"
          opacity={geometry.splitOpacity * splitPanel.opacity}
        />
      ) : null}

      {rightSplitPath ? (
        <path
          id="cube_morph_split_right"
          d={rightSplitPath}
          fill="#111111"
          opacity={geometry.splitOpacity * splitPanel.opacity}
        />
      ) : null}
    </g>
  );
};