import {GAME_WIDTH} from '../constants/Dimensions';
import {Board} from '../types/Board';

export const moveDown = (board: Board, width = GAME_WIDTH) => {
  const emptyCellIndex = board.findIndex(cell => cell === board.length - 1);
  const replaceWithIndex = emptyCellIndex - width;

  if (replaceWithIndex >= 0) {
    const newBoard = [...board];
    newBoard[emptyCellIndex] = newBoard[replaceWithIndex];
    newBoard[replaceWithIndex] = board.length - 1;
    return newBoard;
  }

  return board;
};
