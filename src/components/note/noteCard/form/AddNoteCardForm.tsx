import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import {
  Button, Checkbox,
  DialogActions,
  DialogContent,
  DialogTitle, MenuItem,
  TextField,
} from '@material-ui/core';
import { addNotesSection } from '../../../../store/note/actions';
import { AddNoteCardFormWrapper } from './AddNoteCardForm.styled';
import ColorInput from './ColorInput'
import { TextFieldInputWrapper } from './TextInput.styled';

interface NewNoteData {
  title: string;
  description: string;
}

const AddNoteCardForm = ({ handleClose }: any) => {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  const addNoteList = (newNoteData: NewNoteData) => {
    console.log(newNoteData);
    handleClose();
    // dispatch(addNotesSection({
    //   title: newNoteSectionData.title,
    //   notes: [],
    // }));
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      color: selectedColor
    },
    validate: (newNoteSectionData: NewNoteData) => {
      const errors = {};

      if (newNoteSectionData.title.length < 1) {
        Object.assign(errors, {title: 'Title can not be empty'});
      }

      if (newNoteSectionData.description.length < 1) {
        Object.assign(errors, {description: 'Description can not be empty'});
      }

      return errors;
    },
    onSubmit: (newNoteSectionData: NewNoteData) => {
      Object.assign(newNoteSectionData, {color: selectedColor});

      return addNoteList(newNoteSectionData)
    },
  });

  return (
    <AddNoteCardFormWrapper onSubmit={formik.handleSubmit}>
      <DialogTitle id={'form-dialog-title'}>Add new note</DialogTitle>
      <DialogContent>
        <TextFieldInputWrapper>
          <TextField
            autoFocus={true}
            id={'title'}
            label={'Title'}
            type={'string'}
            rows={4}
            value={formik.values.title}
            onChange={formik.handleChange}
            fullWidth={true}
            error={Boolean(formik.errors.title)}
            helperText={formik.errors.title}
          />
        </TextFieldInputWrapper>
        <TextFieldInputWrapper>
          <TextField
            autoFocus={false}
            id={'description'}
            label={'Description'}
            type={'string'}
            variant={'outlined'}
            multiline={true}
            value={formik.values.description}
            onChange={formik.handleChange}
            fullWidth={true}
            error={Boolean(formik.errors.description)}
            helperText={formik.errors.description}
          />
        </TextFieldInputWrapper>
        <ColorInput
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          value={selectedColor}
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
    </AddNoteCardFormWrapper>
  );
};

export default AddNoteCardForm;
