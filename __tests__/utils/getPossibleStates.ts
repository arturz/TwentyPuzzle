import {List} from 'immutable';
import {EmptyCell} from '../../constants/EmptyCell';
import {deepCopy} from '../../lib/deepCopy';
import {getPossibleStates} from '../../utils/getPossibleStates';

describe('getPossibleStates', () => {
  it('works properly', () => {
    // const a = [1, 2, 3];
    // const b = [1, 2, 3];

    // expect(a).toMatchObject(b);

    // expect(a).toEqual(expect.arrayContaining(b));
    // expect(a.length).toHaveLength(b.length);

    expect(
      deepCopy(getPossibleStates(List([List([0, 1]), List([2, EmptyCell])]))),
    ).toMatchObject([
      [
        [0, EmptyCell],
        [2, 1],
      ],
      [
        [0, 1],
        [EmptyCell, 2],
      ],
    ]);

    // expect([
    //   ...getPossibleStates([
    //     [1, 2, 3],
    //     [4, 5],
    //   ]),
    // ]).toMatchObject([
    //   [
    //     [1, EmptyCell],
    //     [3, 2],
    //   ],
    //   [
    //     [1, 2],
    //     [EmptyCell, 3],
    //   ],
    // ]);
  });
});
