import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Checkbox, FormControlLabel
} from '@material-ui/core';
import { addNote } from '../../../store/notes/actions';
import { AddNoteCardFormWrapper } from './AddNoteCardForm.styled';
import ColorInput from '../../inputs/ColorInput'
import { TextFieldInputWrapper } from '../../inputs/TextInput.styled';
import { NewNote } from '../../../store/notes/types';
import { theme } from '../../../theme';

interface AddNoteCardFormProps {
  handleClose: () => void;
  notesSectionId: number;
}

const AddNoteCardForm = ({ handleClose, notesSectionId }: AddNoteCardFormProps) => {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(theme.white);

  const addNoteList = (newNoteData: NewNote) => {
    handleClose();
    dispatch(addNote(newNoteData, notesSectionId));
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      color: selectedColor,
      dueTo: new Date().toISOString().substring(0, 10),
      isComplete: false,
    },
    validate: (newNoteSectionData: NewNote) => {
      const errors = {};

      if (newNoteSectionData.title.length < 1) {
        // Object.assign(errors, {title: 'Title can not be empty'});
      }

      if (newNoteSectionData.description.length < 1) {
        // Object.assign(errors, {description: 'Description can not be empty'});
      }

      return errors;
    },
    onSubmit: (newNoteSectionData: NewNote) => {
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
        <TextFieldInputWrapper>
          <TextField
            autoFocus={false}
            id={'dueTo'}
            label={'Due to'}
            type={'date'}
            value={formik.values.dueTo}
            onChange={formik.handleChange}
            fullWidth={true}
            error={Boolean(formik.errors.dueTo)}
            helperText={formik.errors.dueTo}
          />
        </TextFieldInputWrapper>
        <TextFieldInputWrapper>
          <ColorInput
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            value={selectedColor}
          />
          <FormControlLabel
            control={
              <Checkbox
                id={'isComplete'}
                checked={formik.values.isComplete}
                onChange={formik.handleChange}
              />
            }
            label={'Is complete'}
            labelPlacement={'start'}
          />

        </TextFieldInputWrapper>
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
