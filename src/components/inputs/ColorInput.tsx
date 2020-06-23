import React, {  useState } from 'react';
import {
  ColorInputWrapper,
  ColorInputBlockWrapper,
  ColorLabelWrapper
} from './ColorInputStyled';
import { FormControlLabel, Typography } from '@material-ui/core';
import { theme } from '../../theme';

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
      <ColorLabelWrapper>
        <Typography variant={'subtitle1'}>
          Background color:
        </Typography>
      </ColorLabelWrapper>
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
