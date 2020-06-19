import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { addNotesSection } from '../../../store/note/actions';
import { AddNoteListFormWrapper } from './AddNoteListForm.styled';

interface NewNoteSectionData {
  title: string;
}

const AddNoteSectionForm = ({ handleClose }: any) => {
  const dispatch = useDispatch();

  const addNoteList = (newNoteSectionData: NewNoteSectionData) => {
    handleClose();
    dispatch(addNotesSection({
      title: newNoteSectionData.title,
      notes: [],
    }));
  };

  const formik = useFormik({
    initialValues: {
      title: ''
    },
    onSubmit: (newNoteSectionData: NewNoteSectionData) => addNoteList(newNoteSectionData),
  });


  return (
    <AddNoteListFormWrapper onSubmit={formik.handleSubmit}>
      <DialogTitle id={'form-dialog-title'}>Add new list of notes</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus={true}
          id={'title'}
          label={'Title'}
          type={'string'}
          value={formik.values.title}
          onChange={formik.handleChange}
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

export default AddNoteSectionForm;
