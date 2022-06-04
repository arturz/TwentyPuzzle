import styled from '@emotion/native';
import {Text} from '@react-native-material/core';
import React, {FC} from 'react';

const Container = styled.View`
  margin-bottom: 10px;
`;

type ClockProps = {
  time: number;
};

const padZero = (value: number) => {
  if (value < 10) {
    return `0${value}`;
  }

  return `${value}`;
};

export const Clock: FC<ClockProps> = ({time}) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <Container>
      <Text variant="h5">{`${padZero(minutes)}:${padZero(seconds)}`}</Text>
    </Container>
  );
};
