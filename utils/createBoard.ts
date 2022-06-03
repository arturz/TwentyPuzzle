import { GAME_HEIGHT, GAME_WIDTH } from "../constants/Dimensions";

export const createBoard = () => {
  const rows: number[][] = [];

  for (let i = 0; i < GAME_HEIGHT; i++) {
    rows.push([]);
    for (let j = 0; j < GAME_WIDTH; j++) {
      const cell = i * GAME_WIDTH + j;

      if (cell === GAME_WIDTH * GAME_HEIGHT - 1) {
        rows[i].push(-1);
        continue;
      }

      rows[i].push(cell);
    }
  }

  return rows;
};

