import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';
import {EmptyCell} from '../constants/EmptyCell';
import {Board} from '../types/Board';
import {getCoordinatesFromCell} from '../utils/getCoordinatesFromCell';
import {manhattan} from './manhattan';

export const heurestic = (board: Board) => {
  return board.flat().reduce((acc, cell, index) => {
    const goalCoordinates = getCoordinatesFromCell(index);
    const coordinates = getCoordinatesFromCell(
      cell === EmptyCell ? GAME_WIDTH * GAME_HEIGHT - 1 : cell,
    );

    return acc + manhattan(goalCoordinates, coordinates);
  }, 0);
};
