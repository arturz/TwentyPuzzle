import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';
import {EmptyCell} from '../constants/EmptyCell';
import {Board} from '../types/Board';
import {getCoordinatesFromCell} from '../utils/getCoordinatesFromCell';
import {manhattan} from './manhattan';

export const heuristic = (
  board: Board,
  width = GAME_WIDTH,
  height = GAME_HEIGHT,
) => {
  return board
    .flatMap(value => value)
    .reduce((acc, cell, index) => {
      const goalCoordinates = getCoordinatesFromCell(index);
      const coordinates = getCoordinatesFromCell(
        cell === EmptyCell ? width * height - 1 : cell,
      );

      return acc + manhattan(goalCoordinates, coordinates);
    }, 0);
};
