import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';
import {EmptyCell} from '../constants/EmptyCell';
import {Board} from '../types/Board';

export const createBoard = () => {
  let board: Board = [];

  for (let i = 0; i < GAME_WIDTH * GAME_HEIGHT; i++) {
    if (i === GAME_WIDTH * GAME_HEIGHT - 1) {
      board.push(EmptyCell);
    } else {
      board.push(i);
    }
  }

  return board;
};
