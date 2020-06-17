import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { CardActionWrapper } from './NoteCardAction.styled';

const NoteCardActions = (props: any) => {
  return (
    <CardActionWrapper >
      <Typography variant={'caption'}>
        Due to: {props.note.dueTo.toDateString}
      </Typography>
      {/*Warning: Failed prop type: Material-UI: You are providing an onClick event listener to a child of a button element.*/}
      {/*Firefox will never trigger the event.*/}
      {/*You should move the onClick listener to the parent button element*/}
      {/*<FormControlLabel*/}
      {/*  control={<Checkbox checked={props.note.isComplete} />}*/}
      {/*  label={'Done'}*/}
      {/*  labelPlacement={'start'}*/}
      {/*/>*/}
    </CardActionWrapper>
  );
};
export default NoteCardActions;
