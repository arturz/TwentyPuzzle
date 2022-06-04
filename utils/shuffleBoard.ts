import { EmptyCell } from "../constants/EmptyCell";
import { deepCopy } from "../lib/deepCopy";
import { Board } from "../types/Board";

export const shuffleBoard = (board: Board) => {
  const newBoard = deepCopy<Board>(board);
  newBoard[4][3] = newBoard[3][3];
  newBoard[3][3] = newBoard[2][3];
  newBoard[2][3] = EmptyCell;
  return newBoard;
}