import React, {  useState } from 'react';
import { ColorInputWrapper, ColorInputBlockWrapper } from './ColorInputStyled';
import { Typography } from '@material-ui/core';
import { theme } from '../../../../theme';

const colors = {
  WHITE: theme.white,
  ORANGE: theme.orange,
  PINK: theme.pink,
  BLUE: theme.blue,
  GREEN: theme.green,
};

const ColorInput = ({selectedColor, setSelectedColor}: any) => {

  const handleChange = (event: any) => {
    setSelectedColor(event.target.dataset.color)
  };

  return (
    <ColorInputBlockWrapper>
      <Typography variant={'subtitle1'}>
        Background color:
      </Typography>
      {
        Object.values(colors).map((color) => <ColorInputWrapper
          key={color}
          color={color}
          isChecked={selectedColor === color}
          onClick={handleChange}
          data-color={color}
        />)
      }
    </ColorInputBlockWrapper>
  );
};

export default ColorInput;
