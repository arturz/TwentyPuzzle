import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';

export const isEmptyCell = (
  cell: number,
  width = GAME_WIDTH,
  height = GAME_HEIGHT,
) => {
  return cell === width * height - 1;
};
