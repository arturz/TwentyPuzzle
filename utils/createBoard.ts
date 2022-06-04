import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';
import {EmptyCell} from '../constants/EmptyCell';
import {Board} from '../types/Board';

export const createBoard = () => {
  const rows: Board = [];

  for (let i = 0; i < GAME_HEIGHT; i++) {
    rows.push([]);
    for (let j = 0; j < GAME_WIDTH; j++) {
      const cell = i * GAME_WIDTH + j;

      if (cell === GAME_WIDTH * GAME_HEIGHT - 1) {
        rows[i].push(EmptyCell);
        continue;
      }

      rows[i].push(cell);
    }
  }

  return rows;
};
