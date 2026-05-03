import React from "react";
import type {CubeMorphGeometry} from "../../motion/geometry/cubeGeometry";
import type {SplitPanelMotion} from "../../motion/types";

const SPLIT_LEFT_TOP_RIGHT = {
  x: 522.05899,
  y: 748.88032,
};

const SPLIT_RIGHT_BOTTOM_LEFT = {
  x: 541.40976,
  y: 981.09043,
};

export const CubeMorphLayer: React.FC<{
  geometry: CubeMorphGeometry;
  splitScale: number;
  splitBlurPx: number;
  splitPanel: SplitPanelMotion;
}> = ({geometry, splitScale, splitBlurPx, splitPanel}) => {
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
        <path id="cube_morph_top" d={geometry.topPath} fill="#111111" opacity={geometry.topOpacity} />
      ) : null}
      {geometry.sidePath ? (
        <path id="cube_morph_side" d={geometry.sidePath} fill="#1b1b1b" opacity={geometry.sideOpacity} />
      ) : null}
      {geometry.frontPath ? (
        <path id="cube_morph_front" d={geometry.frontPath} fill="#2b2b2b" opacity={geometry.frontOpacity} />
      ) : null}
      {geometry.splitLeftPath ? (
        <g
          id="cube_morph_split_left_fold"
          style={{
            transformBox: "view-box",
            transformOrigin: `${SPLIT_LEFT_TOP_RIGHT.x}px ${SPLIT_LEFT_TOP_RIGHT.y}px`,
            transform: `scaleX(${splitPanel.leftScaleX})`,
            opacity: geometry.splitOpacity * splitPanel.opacity,
          }}
        >
          <path id="cube_morph_split_left" d={geometry.splitLeftPath} fill="#111111" />
        </g>
      ) : null}
      {geometry.splitRightPath ? (
        <g
          id="cube_morph_split_right_fold"
          style={{
            transformBox: "view-box",
            transformOrigin: `${SPLIT_RIGHT_BOTTOM_LEFT.x}px ${SPLIT_RIGHT_BOTTOM_LEFT.y}px`,
            transform: `scaleX(${splitPanel.rightScaleX})`,
            opacity: geometry.splitOpacity * splitPanel.opacity,
          }}
        >
          <path id="cube_morph_split_right" d={geometry.splitRightPath} fill="#111111" />
        </g>
      ) : null}
    </g>
  );
};
