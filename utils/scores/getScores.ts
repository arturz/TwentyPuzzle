import AsyncStorage from "@react-native-async-storage/async-storage";
import { HIGH_SCORES_KEY } from "../../constants/Storage"

export const getScores = async () => {
  try {
    const value = await AsyncStorage.getItem(HIGH_SCORES_KEY);
    if (value === null) {
      return [];
    }
    return JSON.parse(value) as number[];
  } catch (error) {
    throw error;
  }
}