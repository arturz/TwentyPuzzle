import {EmptyCell} from '../constants/EmptyCell';
import {Board} from '../types/Board';

export const getEmptyCellCoords = (board: Board) => {
  for (let y = 0; y < board.size; y++) {
    for (let x = 0; x < board.get(y).size; x++) {
      if (board.get(y).get(x) === EmptyCell) {
        return {x, y};
      }
    }
  }

  throw new Error(
    `Can't find empty cell (${EmptyCell}) in the board (${JSON.stringify(
      board,
    )})`,
  );
};
