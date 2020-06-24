import React , { useState } from 'react';
import { CardHeader, Collapse, Link, Typography, } from '@material-ui/core';
import { Done, Close } from '@material-ui/icons';

import { Note } from '../../store/notes/types';
import {
  NoteWrapper,
  NoteActionsWrapper,
  NoteIsCompletedWrapper,
  NoteDueToWrapper,
} from './Note.styled';

interface NoteComponentProps {
  note: Note,
}

const NoteComponent = ({ note }: NoteComponentProps) => {
  const PREVIEW_TEXT_LENGTH = 350;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleChange = () => {
    setIsCollapsed((prev) => !prev);
  };

  const renderNoteDescription = (description: string) => {
    if (description.length > PREVIEW_TEXT_LENGTH) {
      return (
        <>
          <Collapse in={isCollapsed} collapsedHeight={170}>
            <Typography variant={'body1'}>
              {description}
            </Typography>
          </Collapse>
          <Link onClick={handleChange}>{!isCollapsed ? '...read more' : 'collapse↑'}</Link>
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
      <NoteWrapper key={'noteId' + note.id} color={note.color}>
        <Typography variant={'h6'}>
          {note.title}
        </Typography>
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
  );
};
export default NoteComponent;
