import React, {useEffect, useState} from 'react';
import {Board} from '../../types/Board';
import {createBoard} from '../../utils/createBoard';

export const GameContainer = () => {
  const [board, setBoard] = useState<Board | null>(null);

  useEffect(() => {
    setBoard(createBoard());
  }, []);
};
