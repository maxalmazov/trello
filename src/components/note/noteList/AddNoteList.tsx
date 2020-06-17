import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux'
import {
  Button,
  Dialog, DialogActions, DialogContent, DialogContentText,
  DialogTitle,
  IconButton, TextField,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { addNotesSection } from '../../../store/note/actions';

const AddNoteSection = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getRandNumber = () => {
    let rand = 1 + Math.random() * 100;
    return Math.floor(rand);
  };

  const addNoteList = () => {
    setOpen(false);
    dispatch(addNotesSection({
      id: getRandNumber(),
      title: 'Title',
      notes: [],
    }));
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <Add/>
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addNoteList} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddNoteSection;
