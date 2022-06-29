import {heuristic} from '../../lib/heuristic';

describe('heuristic', () => {
  it('works with 0 heuristic', () => {
    const board = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
    ].flat();

    expect(heuristic(board, 4, 2)).toBe(0);
  });

  it('works with fixed heuristic', () => {
    const board = [
      [7, 1, 2, 3],
      [5, 4, 6, 0],
    ].flat();

    expect(heuristic(board, 4, 2)).toBe(10);
  });
});
