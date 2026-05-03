import {Easing, interpolate} from 'remotion';

export const clampInterpolate = (
  frame: number,
  input: [number, number],
  output: [number, number],
  easing?: (input: number) => number,
) => {
  return interpolate(frame, input, output, {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing,
  });
};

export const cubic = Easing.bezier(0.33, 1, 0.68, 1);
export const sharp = Easing.bezier(0.16, 1, 0.3, 1);
export const soft = Easing.bezier(0.22, 1, 0.36, 1);

export const expoOut = (value: number) =>
  value >= 1 ? 1 : 1 - Math.pow(2, -10 * value);
