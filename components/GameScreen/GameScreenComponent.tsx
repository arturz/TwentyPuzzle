import styled from '@emotion/native';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {Board} from '../../types/Board';
import {createBoard} from '../../utils/createBoard';
import {moveDown} from '../../utils/moveDown';
import {moveLeft} from '../../utils/moveLeft';
import {moveRight} from '../../utils/moveRight';
import {moveUp} from '../../utils/moveUp';
import {BoardComponentContainer} from './BoardComponentContainer';
import {Clock} from './Clock';
import {Controls} from './Controls';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

type GameScreenComponentProps = {
  onGoToHighScore: () => void;
};

export const GameScreenComponent: FC<GameScreenComponentProps> = ({
  onGoToHighScore,
}) => {
  const [board, setBoard] = useState<Board | null>(null);

  const newGame = useCallback(() => {
    setBoard(createBoard());
  }, []);
  useEffect(newGame, []);

  const handleSwipeUp = useCallback(() => {
    if (board !== null) {
      console.log('up');
      setBoard(moveDown(board));
    }
  }, [board]);

  const handleSwipeDown = useCallback(() => {
    if (board !== null) {
      console.log('down');
      setBoard(moveUp(board));
    }
  }, [board]);

  const handleSwipeLeft = useCallback(() => {
    if (board !== null) {
      console.log('left');
      setBoard(moveRight(board));
    }
  }, [board]);

  const handleSwipeRight = useCallback(() => {
    if (board !== null) {
      console.log('right');
      setBoard(moveLeft(board));
    }
  }, [board]);

  const handleSolve = useCallback(() => {
    if (board !== null) {
      console.log('start solving');
    }
  }, [board]);

  if (board === null) {
    return null;
  }

  return (
    <Container>
      <Clock />
      <BoardComponentContainer
        board={board}
        onSwipeUp={handleSwipeUp}
        onSwipeDown={handleSwipeDown}
        onSwipeLeft={handleSwipeLeft}
        onSwipeRight={handleSwipeRight}
      />
      <Controls
        onNewGame={newGame}
        onGoToHighScore={onGoToHighScore}
        onSolve={handleSolve}
      />
    </Container>
  );
};
