import {checkForGoal} from '../../utils/checkForGoal';
import {createBoard} from '../../utils/createBoard';
import {extractPathToGoal} from '../../utils/extractPathToGoal';
import {searchGoal} from '../../utils/searchGoal';
import {shuffleBoard} from '../../utils/shuffleBoard';
import {last} from 'lodash';

describe('searchGoal', () => {
  it('works properly', () => {
    const width = 4;
    const height = 5;
    const board = shuffleBoard(createBoard(width, height), width, height);

    const foundGoal = searchGoal(board, width, height);

    expect(foundGoal).not.toEqual(null);

    if (foundGoal !== null) {
      const pathToGoal = extractPathToGoal(foundGoal);
      console.log(pathToGoal, pathToGoal.length);
      expect(checkForGoal(last(pathToGoal), width, height)).toBe(true);
    }
  });
});
