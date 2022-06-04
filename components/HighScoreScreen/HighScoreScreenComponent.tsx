import {ListItem, Text} from '@react-native-material/core';
import {FlatList, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {getScores} from '../../utils/scores/getScores';
import {formatScoreText} from '../../utils/scores/formatScoreText';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export const HighScoreScreenComponent = () => {
  const [scores, setScores] = useState<number[] | null>(null);

  useEffect(() => {
    async function fetchScores() {
      const newScores = await getScores();
      setScores([...newScores].sort((a, b) => a - b));
    }
    fetchScores();
  }, []);

  const renderItem = useCallback(
    ({item, index}: {item: number; index: number}) => {
      const trophyColor =
        {
          [0]: 'gold',
          [1]: 'silver',
          [2]: 'brown',
        }[index] ?? '#222';

      return (
        <ListItem
          leading={<Text>{index + 1}.</Text>}
          title={`${formatScoreText(item)}`}
          trailing={<Icon name="trophy" size={25} color={trophyColor} />}
        />
      );
    },
    [],
  );

  if (scores === null) {
    return null;
  }

  return (
    <View>
      {scores.length === 0 ? (
        <Text>No scores</Text>
      ) : (
        <FlatList
          renderItem={renderItem}
          data={scores}
          keyExtractor={(score, index) => index.toString()}
        />
      )}
    </View>
  );
};
