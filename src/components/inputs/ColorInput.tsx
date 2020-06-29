import React from 'react';
import {
  ColorInputWrapper,
  ColorInputBlockWrapper,
  ColorLabelWrapper
} from './ColorInputStyled';
import { Typography } from '@material-ui/core';
import { theme } from '../../theme';

const ColorInput = ({selectedColor, setSelectedColor, type}: any) => {
  const colors = theme.getColors(type);
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
        colors.map((color) => <ColorInputWrapper
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
