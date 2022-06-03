import React from 'react';

const GAME_WIDTH = 4;
const GAME_HEIGHT = 5;

const createBoard = () => {
  const rows: number[][] = [];

  for (let i = 0; i < GAME_HEIGHT; i++) {
    rows.push([]);
    for (let j = 0; j < GAME_WIDTH; j++) {
      const cell = i * GAME_HEIGHT + j;

      if (cell === GAME_WIDTH * GAME_HEIGHT - 1) {
        rows[i].push(-1);
      }

      rows[i].push(cell);
    }
  }
};

export const GameContainer = () => {};
