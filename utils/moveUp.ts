import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';
import {Board} from '../types/Board';

export const moveUp = (
  board: Board,
  width = GAME_WIDTH,
  height = GAME_HEIGHT,
) => {
  const emptyCellIndex = board.findIndex(cell => cell === board.length - 1);
  const replaceWithIndex = emptyCellIndex + width;

  if (replaceWithIndex < width * height) {
    const newBoard = [...board];
    newBoard[emptyCellIndex] = newBoard[replaceWithIndex];
    newBoard[replaceWithIndex] = board.length - 1;
    return newBoard;
  }

  return board;
};
