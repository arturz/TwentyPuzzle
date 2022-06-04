import React, {FC} from 'react';
import {Board} from '../../types/Board';
import {BoardCell} from './BoardComponent/BoardCell';

type BoardComponentProps = {
  board: Board;
};

export const BoardComponent: FC<BoardComponentProps> = ({board}) => {
  return (
    <>
      {board.map(row => {
        return row.map(cell => {
          return <BoardCell key={cell} n={cell} />;
        });
      })}
    </>
  );
};
