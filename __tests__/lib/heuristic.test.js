import {EmptyCell} from '../../constants/EmptyCell';
import {heuristic} from '../../lib/heuristic';

describe('heuristic', () => {
  it('works with 0 heuristic', () => {
    const board = [
      [0, 1, 2, 3],
      [4, 5, 6, EmptyCell],
    ];

    expect(heuristic(board, board.length, board[0].length)).toBe(0);
  });

  it('works with fixed heuristic', () => {
    const board = [
      [EmptyCell, 1, 2, 3],
      [5, 4, 6, 0],
    ];

    expect(heuristic(board, board.length, board[0].length)).toBe(10);
  });
});
