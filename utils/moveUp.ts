import { EmptyCell } from "../constants/EmptyCell";
import { Board } from "../types/Board";
import { deepCopy } from "./deepCopy";

export const moveUp = (board: Board) => {
  const newBoard = deepCopy<Board>(board);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[j].length; j++) {
      if (!board[j].includes(EmptyCell) || i === 0) {
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