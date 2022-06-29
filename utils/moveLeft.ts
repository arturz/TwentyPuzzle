import {GAME_WIDTH} from '../constants/Dimensions';
import {Board} from '../types/Board';

export const moveLeft = (board: Board, width = GAME_WIDTH) => {
  const emptyCellIndex = board.findIndex(cell => cell === board.length - 1);
  const replaceWithIndex = emptyCellIndex + 1;

  if (
    Math.floor(emptyCellIndex / width) === Math.floor(replaceWithIndex / width)
  ) {
    const newBoard = [...board];
    newBoard[emptyCellIndex] = newBoard[replaceWithIndex];
    newBoard[replaceWithIndex] = board.length - 1;
    return newBoard;
  }

  return board;
};
