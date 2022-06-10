import {deepCopy} from '../../lib/deepCopy';
import {isEqual} from 'lodash';

describe('deepCopy', () => {
  it('works properly with object', () => {
    const a = {a: 123};
    const b = deepCopy(a);
    expect(a).not.toBe(b);
    expect(isEqual(a, b)).toBe(true);
  });

  it('works properly with array', () => {
    const a = [1, 2, 3];
    const b = deepCopy(a);
    expect(a).not.toBe(b);
    expect(isEqual(a, b)).toBe(true);
  });
});
