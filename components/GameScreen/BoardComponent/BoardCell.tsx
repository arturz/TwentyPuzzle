import {transform} from '@babel/core';
import styled, {css} from '@emotion/native';
import {Text} from '@react-native-material/core';
import React, {FC} from 'react';
import {View} from 'react-native';

const StyledView = styled.View`
  position: absolute;
`;

type BoardCellProps = {
  cell: number;
  size: number;
  x: number;
  y: number;
};

export const BoardCell: FC<BoardCellProps> = ({cell, size, x, y}) => {
  return (
    <StyledView
      style={[
        {transform: [{translateX: x}, {translateY: y}]},
        {width: size, height: size},
      ]}>
      <Text>{cell}</Text>
    </StyledView>
  );
};
