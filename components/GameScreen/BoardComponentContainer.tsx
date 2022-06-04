import React, {FC, useCallback, useEffect, useState} from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import {Board} from '../../types/Board';
import {moveDown} from '../../utils/moveDown';
import {moveLeft} from '../../utils/moveLeft';
import {moveRight} from '../../utils/moveRight';
import {moveUp} from '../../utils/moveUp';
import {BoardComponent} from './BoardComponent';

type BoardComponentContainerProps = {
  board: Board;
  onSwipeUp: () => void;
  onSwipeDown: () => void;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
};

export const BoardComponentContainer: FC<BoardComponentContainerProps> = ({
  board,
  onSwipeUp,
  onSwipeDown,
  onSwipeLeft,
  onSwipeRight,
}) => {
  return (
    <GestureRecognizer
      config={{directionalOffsetThreshold: 10, velocityThreshold: 0.1}}
      onSwipeUp={onSwipeUp}
      onSwipeDown={onSwipeDown}
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      style={{flex: 1, width: '100%', height: '100%'}}>
      <BoardComponent board={board} />
    </GestureRecognizer>
  );
};
