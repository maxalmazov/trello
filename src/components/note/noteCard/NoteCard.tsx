import React , { useState } from 'react';
import Card from "@material-ui/core/Card";
import { makeStyles, fade } from "@material-ui/core/styles";


import NoteCardActions from './NoteCardActions';
import { Note } from '../../../store/note/types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { NoteCardWrapper } from './NoteCard.styled';
import { Collapse, FormControlLabel, Link, Switch } from '@material-ui/core';

const NoteCard = (note: Note) => {
  const PREVIEW_TEXT_LENGTH = 350;
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const renderNoteDescription = (description: string) => {
    if (description.length > PREVIEW_TEXT_LENGTH) {
      const descFirstPart = description.substring(0, PREVIEW_TEXT_LENGTH);
      const descLastPart = description.substring(PREVIEW_TEXT_LENGTH);

      return (
        <>
          {/*<div hidden={checked}>{descFirstPart}</div>*/}
          <Link hidden={checked} onClick={handleChange}>...show more</Link>
          <Collapse in={checked} collapsedHeight={'20'}>
            <div>{description}</div>
          </Collapse>
        </>
      );
    }

    return description;
  };

  return (
    <NoteCardWrapper>

      {renderNoteDescription(note.description)}

      <NoteCardActions />
    </NoteCardWrapper>
  );
};
export default NoteCard;
