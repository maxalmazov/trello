import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { withFormik, FormikProps, useFormik, Form, Field } from 'formik';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { addNotesSection } from '../../../store/note/actions';
import { AddNoteListFormWrapper } from './AddNoteListForm.styled';







const AddNoteSectionForm = ({handleSubmit, values}: any) => {
  return (
    <AddNoteListFormWrapper onSubmit={handleSubmit}>
      <DialogTitle id={'form-dialog-title'}>Add new list of notes</DialogTitle>
      <DialogContent>
        <Field
          autoFocus={true}
          margin={'dense'}
          id={'title'}
          label={'Title'}
          type={'string'}
          value={values.title}
          fullWidth={true}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color={'primary'}>
          Cancel
        </Button>
        <Button type={'submit'} color={'primary'}>
          Add
        </Button>
      </DialogActions>
    </AddNoteListFormWrapper>
  );
};





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

  const addNoteList = (note: any) => {
    console.log(note);
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
      <Dialog open={open} onClose={handleClose} aria-labelledby={'form-dialog-title'}>
        {AddNoteSectionForm()}
      </Dialog>
    </>
  );
};

export default withFormik({
  mapPropsToValues: props => {console.log(props); return {title: ''};},
  handleSubmit: values => {console.log(values); return values;},
})(AddNoteSection);
