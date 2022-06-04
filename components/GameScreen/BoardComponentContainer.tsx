import React, {useEffect, useState} from 'react';
import {Board} from '../../types/Board';
import {createBoard} from '../../utils/createBoard';
import {BoardComponent} from './BoardComponent';

export const BoardComponentContainer = () => {
  const [board, setBoard] = useState<Board | null>(null);

  useEffect(() => {
    setBoard(createBoard());
  }, []);

  if (board === null) {
    return null;
  }

  return <BoardComponent board={board} />;
};
