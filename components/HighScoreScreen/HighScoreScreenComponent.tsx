import {Text} from '@react-native-material/core';
import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getScores} from '../../utils/scores/getScores';

export const HighScoreScreenComponent = () => {
  const [scores, setScores] = useState<number[] | null>(null);

  useEffect(() => {
    async function fetchScores() {
      setScores(await getScores());
    }
    fetchScores();
  }, []);

  if (scores === null) {
    return null;
  }

  return (
    <View>
      <Text>High scores :)</Text>
    </View>
  );
};
