import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';

export const getCoordinatesFromCell = (cell: number) => {
  const y = Math.floor(cell / (GAME_HEIGHT - 1));
  const x = cell % GAME_WIDTH;

  return {x, y};
};
