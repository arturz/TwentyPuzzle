import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../types/RootStackParamList';
import {ScreenName} from '../constants/ScreenName';
import {HighScoreScreenComponent} from '../components/HighScoreScreen/HighScoreScreenComponent';

export function HighScoreScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, ScreenName.HighScore>) {
  return <HighScoreScreenComponent />;
}
