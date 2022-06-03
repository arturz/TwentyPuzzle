import styled, {css} from '@emotion/native';
import {Button, Text} from '@react-native-material/core';
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

export function HomeScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, ScreenName.Home>) {
  return (
    <Container>
      <Text
        variant="h3"
        style={css`
          margin-bottom: 30px;
        `}>
        20-puzzle
      </Text>
      <Button
        title="New game"
        onPress={() => navigation.navigate(ScreenName.Game)}
        style={css`
          margin-bottom: 20px;
        `}
      />
      <Button
        title="High score"
        onPress={() => navigation.navigate(ScreenName.HighScore)}
      />
    </Container>
  );
}
