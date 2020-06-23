import React , { useState, useEffect } from 'react';
import { Collapse, Link, } from '@material-ui/core';

import NoteCardActions from './NoteCardActions';
import { Note } from '../../../store/notes/types';
import { NoteCardWrapper } from './NoteCard.styled';

const NoteCard = (note: Note) => {
  const PREVIEW_TEXT_LENGTH = 350;
  const [checked, setChecked] = useState(false);

  useEffect(() => {

  });

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
    <NoteCardWrapper color={note.color}>
      {renderNoteDescription(note.description)}
      <NoteCardActions note={note}/>
    </NoteCardWrapper>
  );
};
export default NoteCard;
