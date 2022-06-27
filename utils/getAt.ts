import {GAME_WIDTH} from '../constants/Dimensions';
import {Board} from '../types/Board';

export function getAt(board: Board, x: number, y: number) {
  return board[y * GAME_WIDTH + x];
}
