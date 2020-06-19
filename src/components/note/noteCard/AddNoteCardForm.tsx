import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import {
  Button, Checkbox,
  DialogActions,
  DialogContent,
  DialogTitle, MenuItem,
  TextField,
} from '@material-ui/core';
import { addNotesSection } from '../../../store/note/actions';
import { AddNoteCardFormWrapper } from './AddNoteCardForm.styled';
import ColorInput from './ColorInput'

interface NewNoteSectionData {
  title: string;
}

const AddNoteCardForm = ({ handleClose }: any) => {
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
      title: '',
      description: '',
      color: '#ffffff'
    },
    validate: (newNoteSectionData: NewNoteSectionData) => {
      const errors = {};
      if (newNoteSectionData.title.length < 1) {
        Object.assign(errors, {title: 'Title can not be empty'});
      }

      return errors;
    },
    onSubmit: (newNoteSectionData: NewNoteSectionData) => addNoteList(newNoteSectionData),
  });

  return (
    <AddNoteCardFormWrapper onSubmit={formik.handleSubmit}>
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
          error={Boolean(formik.errors.title)}
          helperText={formik.errors.title}
        />
        <ColorInput/>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color={'primary'}>
          Cancel
        </Button>
        <Button type={'submit'} color={'primary'}>
          Add
        </Button>
      </DialogActions>
    </AddNoteCardFormWrapper>
  );
};

export default AddNoteCardForm;
