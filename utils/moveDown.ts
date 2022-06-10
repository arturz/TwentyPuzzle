import {EmptyCell} from '../constants/EmptyCell';
import {Board} from '../types/Board';

export const moveDown = (board: Board) => {
  for (let i = 0; i < board.size; i++) {
    for (let j = 0; j < board.get(i).size; j++) {
      if (board.getIn([i, j]) !== EmptyCell || i === board.size - 1) {
        continue;
      }

      const temp = board.getIn([i + 1, j]);
      board = board.setIn([i + 1, j], board.getIn([i, j]));
      board = board.setIn([i, j], temp);
      return board;
    }
  }

  return board;
};
