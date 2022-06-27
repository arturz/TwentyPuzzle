import {checkForGoal} from '../../utils/checkForGoal';
import {createBoard} from '../../utils/createBoard';
import {extractPathToGoal} from '../../utils/extractPathToGoal';
import {searchGoal} from '../../utils/searchGoal';
import {shuffleBoard} from '../../utils/shuffleBoard';
import {last} from 'lodash';

describe('searchGoal', () => {
  it('works properly', () => {
    const board = shuffleBoard(createBoard());

    const foundGoal = searchGoal(board);
    const pathToGoal = extractPathToGoal(foundGoal);
    expect(checkForGoal(last(pathToGoal))).toBe(true);
  });
});
