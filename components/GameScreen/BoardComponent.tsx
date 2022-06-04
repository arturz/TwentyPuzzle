import styled from '@emotion/native';
import {Text} from '@react-native-material/core';
import React, {FC, useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {GAME_HEIGHT, GAME_WIDTH} from '../../constants/Dimensions';
import {Board} from '../../types/Board';
import {Size} from '../../types/Size';
import {BoardCell} from './BoardComponent/BoardCell';

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  position: relative;
`;

type BoardComponentProps = {
  board: Board;
};

export const BoardComponent: FC<BoardComponentProps> = ({board}) => {
  const containerRef = useRef<View>(null);
  const [size, setSize] = useState<Size | null>(null);

  const cellSize =
    size === null
      ? 0
      : Math.floor(
          Math.min(size.width / GAME_WIDTH, size.height / GAME_HEIGHT),
        );

  return (
    <Container
      ref={containerRef}
      onLayout={() => {
        containerRef.current?.measure((x, y, width, height, pageX, pageY) => {
          setSize({width, height});
          console.log({width, height});
        });
      }}
      {...(size !== null &&
        (size.height > size.width
          ? {marginTop: (size.height - GAME_HEIGHT * cellSize) / 2}
          : {marginLeft: (size.width - GAME_WIDTH * cellSize) / 2}))}>
      {board.flatMap((row, y) => {
        return row.map((cell, x) => {
          return (
            <BoardCell
              key={cell}
              cell={cell}
              x={cellSize * x}
              y={cellSize * y}
              size={cellSize}
            />
          );
        });
      })}
    </Container>
  );
};
