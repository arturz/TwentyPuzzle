import AsyncStorage from '@react-native-async-storage/async-storage';
import {HIGH_SCORES_KEY} from '../../constants/Storage';
import {formatScoreText} from './formatScoreText';
import {getScores} from './getScores';

export const addNewScore = async (score: number) => {
  const scores = await getScores();
  try {
    await AsyncStorage.setItem(
      HIGH_SCORES_KEY,
      JSON.stringify(scores.concat(score)),
    );
    console.log('Add new score', formatScoreText(score));
  } catch (error) {
    throw error;
  }
};
