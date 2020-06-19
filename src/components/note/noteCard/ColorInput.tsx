import React from 'react';
import { Dialog } from '@material-ui/core';
import {
  NewNoteButton
} from '../noteList/NoteList.styled';
import AddNoteCardForm from './AddNoteCardForm';
import { ColorInputWrapper, ColorInputBlockWrapper } from './ColorInputStyled';

export const colorList =  {
  ORANGE: '#ffbb37',
  PINK: '#ff768f',
  BLUE: '#4d88ff',
  GREEN: '#43dc9c',
};

const ColorInput = () => {
  return (
    <ColorInputBlockWrapper>
      {
        Object.values(colorList).map((color) => <ColorInputWrapper key={color} color={color}/>)
      }
    </ColorInputBlockWrapper>
  );
};

export default ColorInput;
