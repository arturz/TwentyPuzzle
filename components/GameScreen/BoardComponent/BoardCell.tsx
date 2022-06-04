import {Text} from '@react-native-material/core';
import React, {FC} from 'react';

type BoardCellProps = {
  n: number;
};

export const BoardCell: FC<BoardCellProps> = ({n}) => {
  return <Text>{n}</Text>;
};
