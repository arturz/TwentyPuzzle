import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';
import {EmptyCell} from '../constants/EmptyCell';
import {Board} from '../types/Board';

export const moveUp = (board: Board) => {
  const emptyCellIndex = board.findIndex(cell => cell === EmptyCell);
  const replaceWithIndex = emptyCellIndex + GAME_WIDTH;

  if (replaceWithIndex < GAME_WIDTH * GAME_HEIGHT - 1) {
    const newBoard = [...board];
    newBoard[emptyCellIndex] = newBoard[replaceWithIndex];
    newBoard[replaceWithIndex] = EmptyCell;
    return newBoard;
  }

  return board;
};
