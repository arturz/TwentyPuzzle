import { Board } from "../types/Board";
import { createBoard } from "./createBoard";

const goal = JSON.stringify(createBoard());

export const checkForGoal = (board: Board) => {
  return JSON.stringify(board) === goal;
}