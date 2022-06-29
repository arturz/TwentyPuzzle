import {Set} from 'immutable';
import TinyQueue from 'tinyqueue';
import {Board} from '../types/Board';
import {checkForGoal} from './checkForGoal';
import {getPossibleStates} from './getPossibleStates';
import {heuristic} from '../lib/heuristic';
import {Node} from '../types/Node';
import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';

export const searchGoal = (
  start: Board,
  width = GAME_WIDTH,
  height = GAME_HEIGHT,
) => {
  const fringe = new TinyQueue<Node>(
    [
      {
        priority: heuristic(start, width, height),
        value: start,
      },
    ],
    (a: Node, b: Node) => a.priority - b.priority,
  );

  let explored = Set<string>();

  while (fringe.length > 0) {
    const currentNode = fringe.pop() as Node;

    for (const board of getPossibleStates(currentNode.value, width, height)) {
      if (explored.has(board.join(','))) {
        continue;
      }

      const node: Node = {
        priority: heuristic(board, width, height),
        value: board,
        parent: currentNode,
      };

      if (checkForGoal(board, width, height)) {
        return node;
      }

      explored = explored.add(board.join(','));
      fringe.push(node);
    }
  }

  return null;
};
