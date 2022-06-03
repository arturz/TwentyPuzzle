import styled, {css} from '@emotion/native';
import {Text} from '@react-native-material/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ScreenName} from '../constants/ScreenName';
import {RootStackParamList} from '../types/RootStackParamList';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;

export function GameScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, ScreenName.Game>) {
  return (
    <Container>
      <Text variant="h3">Game</Text>
    </Container>
  );
}
