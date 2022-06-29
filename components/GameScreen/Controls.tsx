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
  disabled?: boolean;
};

export const Controls: FC<ControlProps> = ({
  onNewGame,
  onSolve,
  onGoToHighScore,
  disabled = false,
}) => {
  return (
    <Container>
      <Button title="New" onPress={onNewGame} disabled={disabled} />
      <Button title="Solve" onPress={onSolve} disabled={disabled} />
      <Button title="Scores" onPress={onGoToHighScore} disabled={disabled} />
    </Container>
  );
};
