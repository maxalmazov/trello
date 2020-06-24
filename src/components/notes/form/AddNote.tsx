import React, { useState } from 'react';
import { Dialog, Typography } from '@material-ui/core';

import { NewNoteButton } from '../../notesSections/NotesSection.styled';
import AddNoteForm from './AddNoteForm';

interface AddNoteProps {
  notesSectionId: number
}

const AddNote = ({ notesSectionId }: AddNoteProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <NewNoteButton onClick={handleOpen}>
        <Typography variant={'button'}>+ Add new card</Typography>
      </NewNoteButton>
      <Dialog open={open} onClose={handleOpen} aria-labelledby={'form-dialog-title'}>
        <AddNoteForm handleClose={handleOpen} notesSectionId={notesSectionId}/>
      </Dialog>
    </>
  );
};

export default AddNote;
