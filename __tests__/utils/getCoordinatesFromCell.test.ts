import {getCoordinatesFromCell} from '../../utils/getCoordinatesFromCell';

describe('getCoordinatesFromCell', () => {
  it('works properly', () => {
    expect(getCoordinatesFromCell(0, 2, 2)).toStrictEqual({x: 0, y: 0});
    expect(getCoordinatesFromCell(1, 2, 2)).toStrictEqual({x: 1, y: 0});
    expect(getCoordinatesFromCell(2, 2, 2)).toStrictEqual({x: 0, y: 1});
    expect(getCoordinatesFromCell(3, 2, 2)).toStrictEqual({x: 1, y: 1});

    expect(getCoordinatesFromCell(0, 3, 3)).toStrictEqual({x: 0, y: 0});
    expect(getCoordinatesFromCell(1, 3, 3)).toStrictEqual({x: 1, y: 0});
    expect(getCoordinatesFromCell(2, 3, 3)).toStrictEqual({x: 2, y: 0});
    expect(getCoordinatesFromCell(3, 3, 3)).toStrictEqual({x: 0, y: 1});
    expect(getCoordinatesFromCell(4, 3, 3)).toStrictEqual({x: 1, y: 1});
    expect(getCoordinatesFromCell(5, 3, 3)).toStrictEqual({x: 2, y: 1});
    expect(getCoordinatesFromCell(6, 3, 3)).toStrictEqual({x: 0, y: 2});
    expect(getCoordinatesFromCell(7, 3, 3)).toStrictEqual({x: 1, y: 2});
    expect(getCoordinatesFromCell(8, 3, 3)).toStrictEqual({x: 2, y: 2});
  });
});
