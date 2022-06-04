import { EmptyCell } from "../constants/EmptyCell";
import { deepCopy } from "../lib/deepCopy";
import { Board } from "../types/Board";

export const moveUp = (board: Board) => {
  const newBoard = deepCopy<Board>(board);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[j].length; j++) {
      if (board[i][j] !== EmptyCell || i === 0) {
        continue;
      }

      const temp = newBoard[i - 1][j];
      newBoard[i - 1][j] = newBoard[i][j];
      newBoard[i][j] = temp;
      return newBoard;
    }
  }

  return newBoard;
}