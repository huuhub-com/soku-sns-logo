export type Point = {
  x: number;
  y: number;
};

export type Quad = [Point, Point, Point, Point];

export const lerp = (a: number, b: number, t: number): number => {
  return a + (b - a) * t;
};

export const lerpPoint = (a: Point, b: Point, t: number): Point => {
  return {
    x: lerp(a.x, b.x, t),
    y: lerp(a.y, b.y, t),
  };
};

export const lerpQuad = (a: Quad, b: Quad, t: number): Quad => {
  return [
    lerpPoint(a[0], b[0], t),
    lerpPoint(a[1], b[1], t),
    lerpPoint(a[2], b[2], t),
    lerpPoint(a[3], b[3], t),
  ];
};

export const quadToPath = (q: Quad): string => {
  return `M ${q[0].x},${q[0].y} L ${q[1].x},${q[1].y} L ${q[2].x},${q[2].y} L ${q[3].x},${q[3].y} Z`;
};
