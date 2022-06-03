import { Board } from "../types/Board";
import { getEmptyCellCoords } from "./getEmptyCellCoords";
import { moveDown } from "./moveDown";
import { moveLeft } from "./moveLeft";
import { moveRight } from "./moveRight";
import { moveUp } from "./moveUp";

export const getPossibleStates = (board: Board) => {
  const possibleStates: Board[] = [];
  const { x, y } = getEmptyCellCoords(board);
  
  if (y > 0) {
    possibleStates.push(moveUp(board));
  }

  if (y < board.length - 1) {
    possibleStates.push(moveDown(board));
  }

  if (x > 0) {
    possibleStates.push(moveLeft(board));
  }

  if (board[0] && y < board[0].length - 1) {
    possibleStates.push(moveRight(board));
  }
}