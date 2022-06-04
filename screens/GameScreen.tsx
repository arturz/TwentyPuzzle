import styled, {css} from '@emotion/native';
import {Text} from '@react-native-material/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {BoardComponentContainer} from '../components/GameScreen/BoardComponentContainer';
import {Clock} from '../components/GameScreen/Clock';
import {Controls} from '../components/GameScreen/Controls';
import {ScreenName} from '../constants/ScreenName';
import {RootStackParamList} from '../types/RootStackParamList';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export function GameScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, ScreenName.Game>) {
  return (
    <Container>
      <Clock />
      <BoardComponentContainer />
      <Controls />
    </Container>
  );
}
