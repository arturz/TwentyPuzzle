import {manhattan} from '../../lib/manhattan';

describe('manhattan', () => {
  it('works properly', () => {
    const a = {
      x: 10,
      y: 20,
    };

    const b = {
      x: 30,
      y: 40,
    };

    expect(manhattan(a, b)).toBe(40);
  });
});
