import styled from '@emotion/native';
import {Button} from '@react-native-material/core';
import React, {FC} from 'react';

const Container = styled.View`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
`;

type ControlProps = {
  onNewGame: () => void;
  onSolve: () => void;
  onGoToHighScore: () => void;
};

export const Controls: FC<ControlProps> = ({
  onNewGame,
  onSolve,
  onGoToHighScore,
}) => {
  return (
    <Container>
      <Button title="New" onPress={onNewGame}></Button>
      <Button title="Solve" onPress={onSolve}></Button>
      <Button title="Scores" onPress={onGoToHighScore}></Button>
    </Container>
  );
};
