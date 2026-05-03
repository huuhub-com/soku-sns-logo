import React from "react";
import type {CubeMorphGeometry} from "../../motion/geometry/cubeGeometry";

export const CubeMorphLayer: React.FC<{
  geometry: CubeMorphGeometry;
  splitScale: number;
  splitBlurPx: number;
}> = ({geometry, splitScale, splitBlurPx}) => {
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
        <path id="cube_morph_split_left" d={geometry.splitLeftPath} fill="#111111" opacity={geometry.splitOpacity} />
      ) : null}
      {geometry.splitRightPath ? (
        <path id="cube_morph_split_right" d={geometry.splitRightPath} fill="#111111" opacity={geometry.splitOpacity} />
      ) : null}
    </g>
  );
};
