import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';

import { NoteActionWrapper } from './Note.styled';
import {
  removeNote as removeNoteAction,
  editNote as editNoteAction,

} from '../../store/notes/actions';
import AddNote from './AddNote';
import { Note } from '../../store/notes/types';
import { NewNoteButton } from '../notesSections/NotesSection.styled';
import { Dialog, Typography } from '@material-ui/core';
import NoteForm from './form/NoteForm';

interface NoteActionProps {
  note: Note;
}

const NoteAction = ({ note }: NoteActionProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const removeNote = () => {
    dispatch(removeNoteAction(note.id));
  };

  return (
    <>
      <NoteActionWrapper>
        <span onClick={handleOpen}>
          <EditIcon fontSize={'small'} />
        </span>
        <Dialog open={open} onClose={handleOpen} aria-labelledby={'form-dialog-title'}>
          <NoteForm handleClose={handleOpen} notesSectionId={note.sectionId} note={note}/>
        </Dialog>
        <span onClick={removeNote}>
          <DeleteIcon fontSize={'small'} />
        </span>
      </NoteActionWrapper>
    </>
  );
};

export default NoteAction;
