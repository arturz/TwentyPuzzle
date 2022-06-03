import styled, {css} from '@emotion/native';
import {Text} from '@react-native-material/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../types/RootStackParamList';
import {ScreenName} from '../constants/ScreenName';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;

export function HighScoreScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, ScreenName.HighScore>) {
  return (
    <Container>
      <Text variant="h3">High scores</Text>
    </Container>
  );
}
