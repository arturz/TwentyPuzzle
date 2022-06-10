import TinyQueue from 'tinyqueue';
import {Board} from '../types/Board';

type Node = {
  priority: number;
  value: Board;
  parent?: Node;
};

export const searchGoal = () => {
  const fringe = new TinyQueue();
  const explored = new Set();

  while (fringe.length > 0) {
    // const currentNode =
  }
};
