import { EmptyCell } from "../constants/EmptyCell";
import { Board } from "../types/Board";

export const getEmptyCellCoords = (board: Board) => {
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x] === EmptyCell) {
        return { x, y };
      }
    }
  }
  
  throw new Error(`Can't find empty cell (${EmptyCell}) in the board (${JSON.stringify(board)})`);
}