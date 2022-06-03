import { EmptyCell } from "../constants/EmptyCell";
import { deepCopy } from "../lib/deepCopy";
import { Board } from "../types/Board";

export const moveRight = (board: Board) => {
  return board.map((row) => {
    const index = row.findIndex(cell => cell === EmptyCell);
    if (index === EmptyCell || index === row.length - 1) {
      return row;
    }

    const newRow = deepCopy<typeof row>(row);
    const temp = newRow[index + 1];
    newRow[index + 1] = newRow[index];
    newRow[index] = temp;
    return newRow;
  });
}