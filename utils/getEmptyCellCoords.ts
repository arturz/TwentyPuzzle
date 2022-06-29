import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';
import {Board} from '../types/Board';
import {getAt} from './getAt';
import {isEmptyCell} from './isEmptyCell';

export const getEmptyCellCoords = (
  board: Board,
  width = GAME_WIDTH,
  height = GAME_HEIGHT,
) => {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (isEmptyCell(getAt(board, x, y), width, height)) {
        return {x, y};
      }
    }
  }

  throw new Error(
    `Can't find empty cell in the board (${JSON.stringify(board)})`,
  );
};
