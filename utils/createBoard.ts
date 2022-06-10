import {List} from 'immutable';
import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';
import {EmptyCell} from '../constants/EmptyCell';
import {Board} from '../types/Board';

export const createBoard = () => {
  let rows: Board = List<List<number>>();

  for (let i = 0; i < GAME_HEIGHT; i++) {
    rows = rows.push(List<number>());
    for (let j = 0; j < GAME_WIDTH; j++) {
      const cell = i * GAME_WIDTH + j;

      if (cell === GAME_WIDTH * GAME_HEIGHT - 1) {
        rows = rows.set(i, rows.get(i).push(EmptyCell));
        continue;
      }

      rows = rows.set(i, rows.get(i).push(cell));
    }
  }

  return rows;
};
