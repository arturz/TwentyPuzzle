import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';
import {Board} from '../types/Board';
import {getCoordinatesFromCell} from '../utils/getCoordinatesFromCell';
import {manhattan} from './manhattan';

export const heuristic = (
  board: Board,
  width = GAME_WIDTH,
  height = GAME_HEIGHT,
) => {
  return board.reduce((acc, cell, index) => {
    const goalCoordinates = getCoordinatesFromCell(index, width, height);
    const coordinates = getCoordinatesFromCell(cell, width, height);

    return acc + manhattan(goalCoordinates, coordinates);
  }, 0);
};
