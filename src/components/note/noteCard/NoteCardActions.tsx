import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { CardActionWrapper } from './NoteCardAction.styled';

const NoteCardActions = (props: any) => {
  return (
    <CardActionWrapper >
        <Typography variant={'caption'}>
          Due to: {props.note.dueTo.toDateString()}
        </Typography>
      <FormControlLabel
        control={<Checkbox checked={props.note.isComplete} />}
        label={'Done'}
        labelPlacement={'start'}
      />
    </CardActionWrapper>
  );
};
export default NoteCardActions;
