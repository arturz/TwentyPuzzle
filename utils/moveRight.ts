import {GAME_WIDTH} from '../constants/Dimensions';
import {EmptyCell} from '../constants/EmptyCell';
import {Board} from '../types/Board';

export const moveRight = (board: Board) => {
  const emptyCellIndex = board.findIndex(cell => cell === EmptyCell);
  const replaceWithIndex = emptyCellIndex - 1;

  if (
    Math.floor(emptyCellIndex / GAME_WIDTH) ===
    Math.floor(replaceWithIndex / GAME_WIDTH)
  ) {
    const newBoard = [...board];
    newBoard[emptyCellIndex] = newBoard[replaceWithIndex];
    newBoard[replaceWithIndex] = EmptyCell;
    return newBoard;
  }

  return board;
};
