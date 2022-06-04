import styled from '@emotion/native';
import {Button} from '@react-native-material/core';
import React from 'react';

const Container = styled.View`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
`;

export const Controls = () => {
  return (
    <Container>
      <Button title="New"></Button>
      <Button title="Solve"></Button>
      <Button title="Scores"></Button>
    </Container>
  );
};
