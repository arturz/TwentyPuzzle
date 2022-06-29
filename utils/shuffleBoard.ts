import {Board} from '../types/Board';
import {GAME_HEIGHT, GAME_WIDTH} from '../constants/Dimensions';
import {random} from 'lodash';
import {searchGoal} from './searchGoal';
import sgn from 'permutation-parity';
import {moveLeft} from './moveLeft';
import {moveRight} from './moveRight';
import {moveDown} from './moveDown';
import {moveUp} from './moveUp';

export const shuffleBoard = (
  board: Board,
  width = GAME_WIDTH,
  height = GAME_HEIGHT,
) => {
  let newBoard = [...board];

  for (let i = 0; i < 1000; i++) {
    switch (random(0, 3)) {
      case 0:
        newBoard = moveLeft(newBoard, width);
        break;
      case 1:
        newBoard = moveRight(newBoard, width);
        break;
      case 2:
        newBoard = moveUp(newBoard, width, height);
        break;
      case 3:
        newBoard = moveDown(newBoard, width);
        break;
    }
  }

  // Fisher–Yates shuffle
  // for (let i = length - 1; i >= 1; i--) {
  //   const j = random(0, i);

  //   const temp = newBoard[i];
  //   newBoard[i] = newBoard[j];
  //   newBoard[j] = temp;
  // }

  // while (sgn(newBoard.map(a => a + 1)) !== -1) {
  //   const i = random(0, newBoard.length - 1);
  //   const j = random(0, newBoard.length - 1);

  //   const temp = newBoard[i];
  //   newBoard[i] = newBoard[j];
  //   newBoard[j] = temp;
  // }

  // const parity = sgn(newBoard.map(a => a + 1));

  // if (parity === 0) {
  //   throw new Error('Cannot shuffle board');
  // }

  // const emptyCellIndex = board.findIndex(cell => cell === board.length - 1);
  // const replaceWithIndex = parity === 1 ? board.length - 2 : board.length - 1;

  // const temp = newBoard[emptyCellIndex];
  // newBoard[emptyCellIndex] = newBoard[replaceWithIndex];
  // newBoard[replaceWithIndex] = temp;

  return newBoard;
};
