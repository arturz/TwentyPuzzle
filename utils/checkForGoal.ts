import {Board} from '../types/Board';
import {createBoard} from './createBoard';

const goalBoard = createBoard().join('');

export const checkForGoal = (board: Board) => {
  return board.join('') === goalBoard;
};
