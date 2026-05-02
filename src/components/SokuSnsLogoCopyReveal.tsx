export type SokuSnsLogoCopyRevealProps = {
  lineScaleX: number;
  lineOpacity: number;
};

export const SokuSnsLogoCopyReveal: React.FC<SokuSnsLogoCopyRevealProps> = ({
  lineScaleX,
  lineOpacity,
}) => {
  return (
    <svg
      viewBox="0 0 1080 1920"
      width="1080"
      height="1920"
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <rect
        x="258"
        y="1146"
        width="560"
        height="1.5"
        fill="#111111"
        opacity={lineOpacity}
        style={{ transformBox: "fill-box", transformOrigin: "left center", transform: `scaleX(${lineScaleX})` }}
      />
    </svg>
  );
};
