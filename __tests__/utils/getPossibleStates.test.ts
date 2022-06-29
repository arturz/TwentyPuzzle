import {getPossibleStates} from '../../utils/getPossibleStates';

describe('getPossibleStates', () => {
  it('works properly with 2x2 board', () => {
    const a = [
      ...getPossibleStates(
        [
          [0, 1],
          [2, 3],
        ].flat(),
        2,
        2,
      ),
    ];
    expect(a).toMatchObject([
      [
        [0, 3],
        [2, 1],
      ].flat(),
      [
        [0, 1],
        [3, 2],
      ].flat(),
    ]);
    expect(a.length).toEqual(2);

    const b = [
      ...getPossibleStates(
        [
          [0, 3],
          [2, 1],
        ].flat(),
        2,
        2,
      ),
    ];
    expect(b).toMatchObject([
      [
        [0, 1],
        [2, 3],
      ].flat(),
      [
        [3, 0],
        [2, 1],
      ].flat(),
    ]);
    expect(b.length).toEqual(2);
  });
});
