import {transform} from '@babel/core';
import styled, {css} from '@emotion/native';
import {Text} from '@react-native-material/core';
import React, {FC, memo} from 'react';
import {Image, View} from 'react-native';
import {GAME_HEIGHT, GAME_WIDTH} from '../../../constants/Dimensions';
import {EmptyCell} from '../../../constants/EmptyCell';
import {dogImage} from '../../../constants/Images';

const CellContainer = styled.View`
  position: absolute;
`;

const ImageContainer = styled.View`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

type BoardCellProps = {
  cell: number;
  size: number;
  x: number;
  y: number;
};

export const BoardCell: FC<BoardCellProps> = memo(({cell, size, x, y}) => {
  if (cell === EmptyCell) {
    return null;
  }

  const imageY = Math.floor(cell / (GAME_HEIGHT - 1));
  const imageX = cell % GAME_WIDTH;

  return (
    <CellContainer
      style={[
        {transform: [{translateX: x}, {translateY: y}]},
        {width: size, height: size},
      ]}>
      <ImageContainer>
        <Image
          source={dogImage}
          style={{
            width: GAME_WIDTH * size,
            height: GAME_HEIGHT * size,
            position: 'absolute',
            left: 0,
            top: 0,
            transform: [
              {translateX: -imageX * size},
              {translateY: -imageY * size},
            ],
          }}
        />
      </ImageContainer>
    </CellContainer>
  );
});
