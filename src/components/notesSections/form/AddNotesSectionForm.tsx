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

import { addNotesSection as addNotesSectionAction } from '../../../store/notesSections/actions';
import { AddNotesSectionFormWrapper } from './AddNotesSectionForm.styled';
import { NewNotesSectionData } from '../../../store/notesSections/types';

interface AddNoteSectionFormProps {
  handleClose: () => void;
}

const AddNoteSectionForm = ({ handleClose }: AddNoteSectionFormProps) => {
  const dispatch = useDispatch();

  const addNotesSection = (newNoteSectionData: NewNotesSectionData) => {
    handleClose();
    dispatch(addNotesSectionAction(newNoteSectionData));
  };

  const formik = useFormik({
    initialValues: {
      title: '',
    },
    validate: (newNoteSectionData: NewNotesSectionData) => {
      const errors = {};

      if (newNoteSectionData.title.length < 1) {
        Object.assign(errors, {title: 'Title can not be empty'});
      }

      return errors;
    },
    onSubmit: (newNoteSectionData: NewNotesSectionData) => addNotesSection(newNoteSectionData),
  });


  return (
    <AddNotesSectionFormWrapper onSubmit={formik.handleSubmit}>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color={'primary'}>
          Cancel
        </Button>
        <Button type={'submit'} color={'primary'}>
          Add
        </Button>
      </DialogActions>
    </AddNotesSectionFormWrapper>
  );
};

export default AddNoteSectionForm;
