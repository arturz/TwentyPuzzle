import styled from '@emotion/native';
import {Text} from '@react-native-material/core';
import React, {FC} from 'react';
import {formatScoreText} from '../../utils/scores/formatScoreText';

const Container = styled.View`
  margin-bottom: 10px;
`;

type ClockProps = {
  time: number;
};

export const Clock: FC<ClockProps> = ({time}) => {
  return (
    <Container>
      <Text variant="h5">{formatScoreText(time)}</Text>
    </Container>
  );
};
