import {Board} from '../types/Board';
import {EmptyCell} from '../constants/EmptyCell';

export const shuffleBoard = (board: Board) => {
  console.log('shuffling', board);
  return [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, EmptyCell],
    [12, 13, 14, 11],
  ].flat();
};
