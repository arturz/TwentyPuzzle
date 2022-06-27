import {Set} from 'immutable';
import TinyQueue from 'tinyqueue';
import {Board} from '../types/Board';
import {checkForGoal} from './checkForGoal';
import {getPossibleStates} from './getPossibleStates';
import {heuristic} from '../lib/heuristic';
import {Node} from '../types/Node';

const comparator = (a: Node, b: Node) => {
  return a.priority - b.priority;
};

export const searchGoal = (start: Board) => {
  const fringe = new TinyQueue<Node>(
    [
      {
        priority: heuristic(start),
        value: start,
      },
    ],
    comparator,
  );
  let explored = Set();

  while (fringe.length > 0) {
    const currentNode = fringe.pop();
    for (const board of getPossibleStates(currentNode.value)) {
      if (explored.has(board)) {
        continue;
      }

      const node = {
        priority: heuristic(board),
        value: board,
        parent: currentNode,
      };

      if (checkForGoal(board)) {
        return node;
      }

      explored = explored.add(board);
      fringe.push(node);
    }
  }

  return null;
};
