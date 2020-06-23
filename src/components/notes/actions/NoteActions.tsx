import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { CardActionWrapper } from './NoteActions.styled';
import { Note } from '../../../store/notes/types';

interface NoteCardActionsProps {
  note: Note
}
const NoteActions = ({ note }: NoteCardActionsProps) => {
  return (
    <CardActionWrapper >
      <Typography variant={'caption'}>
        Due to: {new Date(note.dueTo).toLocaleDateString()}
      </Typography>
      {/*Warning: Failed prop type: Material-UI: You are providing an onClick event listener to a child of a button element.*/}
      {/*Firefox will never trigger the event.*/}
      {/*You should move the onClick listener to the parent button element*/}
      {/*<FormControlLabel*/}
      {/*  control={<Checkbox checked={props.notes.isComplete} />}*/}
      {/*  label={'Done'}*/}
      {/*  labelPlacement={'start'}*/}
      {/*/>*/}
    </CardActionWrapper>
  );
};
export default NoteActions;
