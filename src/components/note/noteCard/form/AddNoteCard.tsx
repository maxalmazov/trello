import React, { useState } from 'react';
import { Dialog } from '@material-ui/core';
import {
  NewNoteButton
} from '../../noteList/NoteList.styled';
import AddNoteCardForm from './AddNoteCardForm';

interface AddNoteCardProps {
  notesSectionId: number
}

const AddNoteCard = ({ notesSectionId }: AddNoteCardProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <NewNoteButton onClick={handleOpen}>
        <span>+ Add new card</span>
      </NewNoteButton>
      <Dialog open={open} onClose={handleOpen} aria-labelledby={'form-dialog-title'}>
        <AddNoteCardForm handleClose={handleOpen} notesSectionId={notesSectionId}/>
      </Dialog>
    </>
  );
};

export default AddNoteCard;
