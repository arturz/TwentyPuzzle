import styled from '@emotion/native';
import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {GOAL_ITERATE_TIMEOUT} from '../../constants/Dimensions';
import {Board} from '../../types/Board';
import {checkForGoal} from '../../utils/checkForGoal';
import {createBoard} from '../../utils/createBoard';
import {extractPathToGoal} from '../../utils/extractPathToGoal';
import {moveDown} from '../../utils/moveDown';
import {moveLeft} from '../../utils/moveLeft';
import {moveRight} from '../../utils/moveRight';
import {moveUp} from '../../utils/moveUp';
import {addNewScore} from '../../utils/scores/addNewScore';
import {searchGoal} from '../../utils/searchGoal';
import {shuffleBoard} from '../../utils/shuffleBoard';
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
  const [time, setTime] = useState<number>(0);
  const [foundPathToGoal, setFoundPathToGoal] = useState<Board[]>([]);
  const [controlsDisabled, setControlsDisabled] = useState(false);
  const clockRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    if (foundPathToGoal.length > 0) {
      const [extractedBoard, ...rest] = foundPathToGoal;
      setBoard(extractedBoard);
      setTimeout(() => {
        setFoundPathToGoal(rest);
      }, GOAL_ITERATE_TIMEOUT);
    } else {
      setControlsDisabled(false);
    }
  }, [foundPathToGoal]);

  const incrementTime = useCallback(() => {
    setTime(oldTime => oldTime + 1);
  }, []);

  const newGame = useCallback(() => {
    setBoard(shuffleBoard(createBoard()));

    setTime(0);

    if (clockRef.current !== null) {
      clearInterval(clockRef.current);
    }

    clockRef.current = setInterval(incrementTime, 1000);
  }, [incrementTime]);

  useEffect(newGame, [newGame]);

  const handleSwipeUp = useCallback(() => {
    if (board !== null && !checkForGoal(board) && !controlsDisabled) {
      console.log('up');
      setBoard(moveUp(board));
    }
  }, [board, controlsDisabled]);

  const handleSwipeDown = useCallback(() => {
    if (board !== null && !checkForGoal(board) && !controlsDisabled) {
      console.log('down');
      setBoard(moveDown(board));
    }
  }, [board, controlsDisabled]);

  const handleSwipeLeft = useCallback(() => {
    if (board !== null && !checkForGoal(board) && !controlsDisabled) {
      console.log('left');
      setBoard(moveLeft(board));
    }
  }, [board, controlsDisabled]);

  const handleSwipeRight = useCallback(() => {
    if (board !== null && !checkForGoal(board) && !controlsDisabled) {
      console.log('right');
      setBoard(moveRight(board));
    }
  }, [board, controlsDisabled]);

  const handleSolve = useCallback(() => {
    if (board !== null && !controlsDisabled) {
      console.log('start solving');
      setControlsDisabled(true);
      const goal = searchGoal(board);
      if (goal !== null) {
        const pathToGoal = extractPathToGoal(goal);
        setFoundPathToGoal(pathToGoal);
      }
    }
  }, [board, controlsDisabled]);

  useEffect(() => {
    if (board && checkForGoal(board)) {
      console.log('Goal');
      addNewScore(time);
      if (clockRef.current !== null) {
        clearInterval(clockRef.current);
      }
    }
  }, [board, time]);

  if (board === null) {
    return null;
  }

  return (
    <Container>
      <Clock time={time} />
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
        disabled={controlsDisabled}
      />
    </Container>
  );
};
