import {clampInterpolate, sharp, soft} from '../../lib/animation';
import {CopyMotion} from '../types';

export const getCopyMotion = (frame:number): CopyMotion => ({
  primaryOpacity: clampInterpolate(frame,[80,92],[0,1],soft),
  primaryReveal: clampInterpolate(frame,[80,92],[0,1],sharp),
  primaryTranslateY: clampInterpolate(frame,[80,92],[10,0],soft),
  secondaryOpacity: clampInterpolate(frame,[80,92],[0,1],soft),
  secondaryReveal: clampInterpolate(frame,[80,92],[0,1],sharp),
  secondaryTranslateY: clampInterpolate(frame,[80,92],[-8,0],soft),
  lineScaleX: clampInterpolate(frame,[75,81],[0,1],sharp),
  lineOpacity: frame < 91 ? clampInterpolate(frame,[75,81],[0,0.75],sharp) : clampInterpolate(frame,[91,99],[0.75,0],soft),
});
