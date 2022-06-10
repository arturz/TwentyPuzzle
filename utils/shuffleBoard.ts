import {EmptyCell} from '../constants/EmptyCell';
import {Board} from '../types/Board';

export const shuffleBoard = (board: Board) => {
  board = board.setIn([4, 3], board.getIn([3, 3]));
  board = board.setIn([3, 3], board.getIn([2, 3]));
  board = board.setIn([2, 3], EmptyCell);
  return board;
};
