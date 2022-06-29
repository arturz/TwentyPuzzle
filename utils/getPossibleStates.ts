import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';
import {Board} from '../types/Board';

export const getPossibleStates = (
  board: Board,
  width = GAME_WIDTH,
  height = GAME_HEIGHT,
) => {
  let possibleStates = new Set<Board>();

  const emptyCellIndex = board.findIndex(cell => cell === board.length - 1);

  const upReplaceWithIndex = emptyCellIndex + width;
  if (upReplaceWithIndex < width * height) {
    const newBoard = [...board];
    newBoard[emptyCellIndex] = newBoard[upReplaceWithIndex];
    newBoard[upReplaceWithIndex] = board.length - 1;
    possibleStates.add(newBoard);
  }

  const downReplaceWithIndex = emptyCellIndex - width;
  if (downReplaceWithIndex >= 0) {
    const newBoard = [...board];
    newBoard[emptyCellIndex] = newBoard[downReplaceWithIndex];
    newBoard[downReplaceWithIndex] = board.length - 1;
    possibleStates.add(newBoard);
  }

  const leftReplaceWithIndex = emptyCellIndex + 1;
  if (
    Math.floor(emptyCellIndex / width) ===
    Math.floor(leftReplaceWithIndex / width)
  ) {
    const newBoard = [...board];
    newBoard[emptyCellIndex] = newBoard[leftReplaceWithIndex];
    newBoard[leftReplaceWithIndex] = board.length - 1;
    possibleStates.add(newBoard);
  }

  const rightReplaceWithIndex = emptyCellIndex - 1;
  if (
    Math.floor(emptyCellIndex / width) ===
    Math.floor(rightReplaceWithIndex / width)
  ) {
    const newBoard = [...board];
    newBoard[emptyCellIndex] = newBoard[rightReplaceWithIndex];
    newBoard[rightReplaceWithIndex] = board.length - 1;
    possibleStates.add(newBoard);
  }

  // const afterUp = moveUp(board, width, height);
  // const afterDown = moveDown(board, width);
  // const afterLeft = moveLeft(board, width);
  // const afterRight = moveRight(board, width);

  // if (afterUp !== board) {
  //   possibleStates = possibleStates.add(afterUp);
  // }

  // if (afterDown !== board) {
  //   possibleStates = possibleStates.add(afterDown);
  // }

  // if (afterLeft !== board) {
  //   possibleStates = possibleStates.add(afterLeft);
  // }

  // if (afterRight !== board) {
  //   possibleStates = possibleStates.add(afterRight);
  // }

  return possibleStates;
};
