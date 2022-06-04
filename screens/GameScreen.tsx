import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {GameScreenComponent} from '../components/GameScreen/GameScreenComponent';
import {ScreenName} from '../constants/ScreenName';
import {RootStackParamList} from '../types/RootStackParamList';

export function GameScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, ScreenName.Game>) {
  const handleGoToHighScore = useCallback(() => {
    navigation.navigate(ScreenName.HighScore);
  }, [navigation]);

  return <GameScreenComponent onGoToHighScore={handleGoToHighScore} />;
}
