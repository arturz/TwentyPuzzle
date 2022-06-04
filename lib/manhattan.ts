import {Point} from '../types/Point';

export const manhattan = (a: object & Point, b: object & Point) => {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
};
