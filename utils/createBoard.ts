import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';
import {Board} from '../types/Board';

export const createBoard = (width = GAME_WIDTH, height = GAME_HEIGHT) => {
  let board: Board = [];

  for (let i = 0; i < width * height; i++) {
    board.push(i);
  }

  return board;
};
