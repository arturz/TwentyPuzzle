import { EmptyCell } from "../constants/EmptyCell";
import { Board } from "../types/Board";
import { deepCopy } from "./deepCopy";

export const moveRight = (board: Board) => {
  return board.map((row) => {
    const index = row.findIndex(cell => cell === EmptyCell);
    if (index === -1 || index === row.length - 1) {
      return row;
    }

    const newRow = deepCopy<typeof row>(row);
    const temp = newRow[index + 1];
    newRow[index + 1] = newRow[index];
    newRow[index] = temp;
    return newRow;
  });
}