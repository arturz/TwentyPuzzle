import {EmptyCell} from '../constants/EmptyCell';
import {deepCopy} from '../lib/deepCopy';
import {Board} from '../types/Board';

export const moveUp = (board: Board) => {
  const newBoard = deepCopy<Board>(board);

  for (let i = 0; i < board.size; i++) {
    for (let j = 0; j < board.get(i).size; j++) {
      if (board.getIn([i, j]) !== EmptyCell || i === 0) {
        continue;
      }

      const temp = board.getIn([i - 1, j]);
      board = board.setIn([i - 1, j], board.getIn([i, j]));
      board = board.setIn([i, j], temp);
      return board;
    }
  }

  return newBoard;
};
