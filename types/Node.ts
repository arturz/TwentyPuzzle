import {Board} from './Board';

export type Node = {
  priority: number;
  value: Board;
  parent?: Node;
};
