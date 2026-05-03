import {lerpPoint, type Point, type Quad} from "./polygon";

const EPSILON = 1e-6;

const clamp01 = (value: number): number => {
  return Math.max(0, Math.min(1, value));
};

export const projectPointToLine = (
  point: Point,
  lineStart: Point,
  lineEnd: Point,
): Point => {
  const dx = lineEnd.x - lineStart.x;
  const dy = lineEnd.y - lineStart.y;
  const lengthSquared = dx * dx + dy * dy;

  if (lengthSquared < EPSILON) {
    return lineStart;
  }

  const t =
    ((point.x - lineStart.x) * dx + (point.y - lineStart.y) * dy) /
    lengthSquared;

  return {
    x: lineStart.x + dx * t,
    y: lineStart.y + dy * t,
  };
};

export const foldQuadAroundDiagonal = (
  quad: Quad,
  foldProgress: number,
): Quad => {
  const progress = clamp01(foldProgress);

  const a = quad[0];
  const b = quad[1];
  const c = quad[2];
  const d = quad[3];

  const bProjected = projectPointToLine(b, a, c);
  const dProjected = projectPointToLine(d, a, c);

  return [
    a,
    lerpPoint(b, bProjected, progress),
    c,
    lerpPoint(d, dProjected, progress),
  ];
};