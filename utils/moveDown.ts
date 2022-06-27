import {GAME_WIDTH} from '../constants/Dimensions';
import {EmptyCell} from '../constants/EmptyCell';
import {Board} from '../types/Board';

export const moveDown = (board: Board) => {
  const emptyCellIndex = board.findIndex(cell => cell === EmptyCell);
  const replaceWithIndex = emptyCellIndex - GAME_WIDTH;

  if (replaceWithIndex >= 0) {
    const newBoard = [...board];
    newBoard[emptyCellIndex] = newBoard[replaceWithIndex];
    newBoard[replaceWithIndex] = EmptyCell;
    return newBoard;
  }

  return board;
};
