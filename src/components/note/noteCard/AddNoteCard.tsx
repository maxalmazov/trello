import React from 'react';
import { Dialog } from '@material-ui/core';
import {
  NewNoteButton
} from '../noteList/NoteList.styled';
import AddNoteCardForm from './AddNoteCardForm';

const AddNoteCard = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <NewNoteButton onClick={handleOpen}>
        <span>+ Add new card</span>
      </NewNoteButton>
      <Dialog open={open} onClose={handleOpen} aria-labelledby={'form-dialog-title'}>
        <AddNoteCardForm handleClose={handleOpen}/>
      </Dialog>
    </>
  );
};

export default AddNoteCard;
