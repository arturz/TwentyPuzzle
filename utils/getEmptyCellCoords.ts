import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';
import {EmptyCell} from '../constants/EmptyCell';
import {Board} from '../types/Board';
import {getAt} from './getAt';

export const getEmptyCellCoords = (board: Board) => {
  for (let x = 0; x < GAME_WIDTH; x++) {
    for (let y = 0; y < GAME_HEIGHT; y++) {
      if (getAt(board, x, y) === EmptyCell) {
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
