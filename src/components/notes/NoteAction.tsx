import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';

import { NoteActionWrapper } from './Note.styled';
import {
  removeNote as removeNoteAction,
  editNote as editNoteAction,

} from '../../store/notes/actions';
import AddNote from './form/AddNote';
import { Note } from '../../store/notes/types';
import { NewNoteButton } from '../notesSections/NotesSection.styled';
import { Dialog, Typography } from '@material-ui/core';
import AddNoteForm from './form/AddNoteForm';

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

  const editNote = () => {

    dispatch(editNoteAction(note));
  };

  return (
    <>
      <NoteActionWrapper>
        <span onClick={handleOpen}>
          <EditIcon fontSize={'small'} />
          <Dialog open={open} onClose={handleOpen} aria-labelledby={'form-dialog-title'}>
            <AddNoteForm handleClose={handleOpen} notesSectionId={note.id} note={note}/>
          </Dialog>
        </span>
        <span onClick={removeNote}>
          <DeleteIcon fontSize={'small'} />
        </span>
      </NoteActionWrapper>
    </>
  );
};

export default NoteAction;
