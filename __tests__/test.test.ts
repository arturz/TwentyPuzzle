import {Set, List} from 'immutable';
import {createBoard} from '../utils/createBoard';

describe('test', () => {
  it('test', () => {
    let a = createBoard(); //List([List([1, 2, 3]), List([4, 5, 6])]);
    let b = createBoard(); //List([List([1, 2, 3]), List([4, 5, 6])]);

    // a = a.set(1, a.get(1).set(1, 7));
    a = a.setIn([1, 1], 99);

    console.log(JSON.stringify(a));

    let set = Set();
    set = set.add(a);
    expect(set.size).toBe(1);
    set = set.delete(b);
    expect(set.size).toBe(0);
  });
});
