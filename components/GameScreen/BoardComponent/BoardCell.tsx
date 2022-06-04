import styled from '@emotion/native';
import React, {FC, memo, useEffect, useRef} from 'react';
import {Animated, Easing, Image} from 'react-native';
import {GAME_HEIGHT, GAME_WIDTH} from '../../../constants/Dimensions';
import {EmptyCell} from '../../../constants/EmptyCell';
import {dogImage} from '../../../constants/Images';
import {getCoordinatesFromCell} from '../../../utils/getCoordinatesFromCell';

const CellContainer = styled(Animated.View)`
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
  const animation = useRef(new Animated.ValueXY({x, y})).current;

  useEffect(() => {
    Animated.timing(animation, {
      duration: 300,
      toValue: {x, y},
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [x, y, animation]);

  if (cell === EmptyCell) {
    return null;
  }

  const {x: imageX, y: imageY} = getCoordinatesFromCell(cell);

  return (
    <CellContainer
      style={[
        {
          transform: [{translateX: animation.x}, {translateY: animation.y}],
        },
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
