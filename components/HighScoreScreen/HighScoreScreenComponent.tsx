import {ListItem, Text} from '@react-native-material/core';
import {FlatList, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {getScores} from '../../utils/scores/getScores';
import {formatScoreText} from '../../utils/scores/formatScoreText';

export const HighScoreScreenComponent = () => {
  const [scores, setScores] = useState<number[] | null>(null);

  useEffect(() => {
    async function fetchScores() {
      const newScores = await getScores();
      setScores([...newScores].sort((a, b) => a - b));
    }
    fetchScores();
  }, []);

  if (scores === null) {
    return null;
  }

  return (
    <View>
      {scores.length === 0 ? (
        <Text>No scores</Text>
      ) : (
        <FlatList
          renderItem={({item, index}) => (
            <ListItem title={`${index + 1}. ${formatScoreText(item)}`} />
          )}
          data={scores}
          keyExtractor={(score, index) => index.toString()}
        />
      )}
    </View>
  );
};
