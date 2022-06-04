import styled from '@emotion/native';
import {Text} from '@react-native-material/core';
import React from 'react';

const Container = styled.View`
  margin-bottom: 10px;
`;

export const Clock = () => {
  return (
    <Container>
      <Text variant="h5">12:00</Text>
    </Container>
  );
};
