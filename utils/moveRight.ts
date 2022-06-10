import {EmptyCell} from '../constants/EmptyCell';
import {Board} from '../types/Board';

export const moveRight = (board: Board) => {
  return board.map(row => {
    const index = row.findIndex(cell => cell === EmptyCell);
    if (index === EmptyCell || index === row.size - 1) {
      return row;
    }

    const temp = row.get(index + 1);
    row = row.set(index + 1, row.get(index));
    row = row.set(index, temp);
    return row;
  });
};
