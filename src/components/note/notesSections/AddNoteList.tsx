import React from 'react';
import { Dialog, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import AddNoteSectionForm from './AddNoteListForm';

const AddNoteSection = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Add/>
      </IconButton>
      <Dialog open={open} onClose={handleOpen} aria-labelledby={'form-dialog-title'}>
        <AddNoteSectionForm handleClose={handleOpen}/>
      </Dialog>
    </>
  );
};

export default AddNoteSection;
