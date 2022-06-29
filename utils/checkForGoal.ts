import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';
import {Board} from '../types/Board';
import {createBoard} from './createBoard';

export const checkForGoal = (
  board: Board,
  width = GAME_WIDTH,
  height = GAME_HEIGHT,
) => {
  const goalBoard = createBoard(width, height);

  return board.join(',') === goalBoard.join(',');
};
