import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';

export const getCoordinatesFromCell = (
  cell: number,
  width = GAME_WIDTH,
  height = GAME_HEIGHT,
) => {
  const y = Math.floor(cell / width);
  const x = cell % width;

  return {x, y};
};
