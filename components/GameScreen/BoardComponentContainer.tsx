import React, {useCallback, useEffect, useState} from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import {Board} from '../../types/Board';
import {createBoard} from '../../utils/createBoard';
import {moveDown} from '../../utils/moveDown';
import {moveLeft} from '../../utils/moveLeft';
import {moveRight} from '../../utils/moveRight';
import {moveUp} from '../../utils/moveUp';
import {BoardComponent} from './BoardComponent';

export const BoardComponentContainer = () => {
  const [board, setBoard] = useState<Board | null>(null);

  useEffect(() => {
    setBoard(createBoard());
  }, []);

  const handleSwipeUp = useCallback(() => {
    console.log('up');
    if (board !== null) {
      setBoard(moveDown(board));
    }
  }, [board]);

  const handleSwipeDown = useCallback(() => {
    console.log('down');
    if (board !== null) {
      setBoard(moveUp(board));
    }
  }, [board]);

  const handleSwipeLeft = useCallback(() => {
    console.log('left');
    if (board !== null) {
      setBoard(moveRight(board));
    }
  }, [board]);

  const handleSwipeRight = useCallback(() => {
    console.log('right');
    if (board !== null) {
      setBoard(moveLeft(board));
    }
  }, [board]);

  if (board === null) {
    return null;
  }

  return (
    <GestureRecognizer
      onSwipeUp={handleSwipeUp}
      onSwipeDown={handleSwipeDown}
      onSwipeLeft={handleSwipeLeft}
      onSwipeRight={handleSwipeRight}
      style={{flex: 1, width: '100%', height: '100%'}}>
      <BoardComponent board={board} />
    </GestureRecognizer>
  );
};
