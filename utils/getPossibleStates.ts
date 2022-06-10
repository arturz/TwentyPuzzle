import {Set} from 'immutable';
import {Board} from '../types/Board';
import {getEmptyCellCoords} from './getEmptyCellCoords';
import {moveDown} from './moveDown';
import {moveLeft} from './moveLeft';
import {moveRight} from './moveRight';
import {moveUp} from './moveUp';

export const getPossibleStates = (board: Board) => {
  let possibleStates = Set<Board>();
  const {x, y} = getEmptyCellCoords(board);

  if (y > 0) {
    possibleStates = possibleStates.add(moveUp(board));
  }

  if (y < board.size - 1) {
    possibleStates = possibleStates.add(moveDown(board));
  }

  if (x > 0) {
    possibleStates = possibleStates.add(moveLeft(board));
  }

  if (board.get(0) && y < board.get(0).size - 1) {
    possibleStates = possibleStates.add(moveRight(board));
  }

  return possibleStates;
};
