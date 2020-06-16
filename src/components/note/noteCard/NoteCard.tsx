import React , { useState } from 'react';
import Card from "@material-ui/core/Card";
import { makeStyles, fade } from "@material-ui/core/styles";


import NoteCardActions from './NoteCardActions';
import { Note } from '../../../store/note/types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { NoteCardWrapper } from './NoteCard.styled';
import {
  Button,
  Chip,
  Collapse,
  Divider,
  ExpansionPanel,
  ExpansionPanelActions,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  FormControlLabel,
  Link,
  Switch
} from '@material-ui/core';

const NoteCard = (note: Note) => {
  const PREVIEW_TEXT_LENGTH = 350;
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const renderNoteDescription = (description: string) => {
    if (description.length > PREVIEW_TEXT_LENGTH) {
      return (
        <>
          <Collapse in={checked} collapsedHeight={180}>
            {description}
          </Collapse>
          <Link onClick={handleChange}>{!checked ? '...read more' : 'collapse↑'}</Link>
        </>
      );
    }

    return description;
  };

  return (
    <NoteCardWrapper>
      {renderNoteDescription(note.description)}
      <NoteCardActions note={note}/>
    </NoteCardWrapper>
  );
};
export default NoteCard;
