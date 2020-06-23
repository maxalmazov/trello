import React , { useState, useEffect } from 'react';
import { CardHeader, Collapse, Link, Typography, } from '@material-ui/core';
import { Done, Close } from '@material-ui/icons';

import { Note, Notes } from '../../store/notes/types';
import {
  NoteWrapper,
  NoteActionsWrapper,
  NoteIsCompletedWrapper,
  NoteDueToWrapper,
} from './Note.styled';

interface NoteComponentProps {
  notes: Notes,
  notesIds: string[],
}

const NoteComponent = ({notes, notesIds}: NoteComponentProps) => {
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
            <Typography variant={'body1'}>
              {description}
            </Typography>
          </Collapse>
          <Link onClick={handleChange}>{!checked ? '...read more' : 'collapse↑'}</Link>
        </>
      );
    }

    return (
      <Typography variant={'body1'}>
        {description}
      </Typography>
    );
  };

  return (
    <>
      {
        notes &&
        Object.values(notes).map(
          (note: Note) => (
            <NoteWrapper key={'noteId' + note.id} color={note.color}>
              <CardHeader title={note.title}/>
              {
                renderNoteDescription(note.description)
              }
              <NoteActionsWrapper>
                <NoteDueToWrapper>
                  <Typography variant={'caption'}>
                    Due to: {new Date(note.dueTo).toLocaleDateString()}
                  </Typography>
                </NoteDueToWrapper>
                <NoteIsCompletedWrapper>
                  <Typography variant={'caption'}>
                    Is completed:
                  </Typography>
                  {
                    note.isCompleted ? <Done/> : <Close color={'error'}/>
                  }
                </NoteIsCompletedWrapper>
              </NoteActionsWrapper>
            </NoteWrapper>
          )
        )
      }
    </>
  );
};
export default NoteComponent;
