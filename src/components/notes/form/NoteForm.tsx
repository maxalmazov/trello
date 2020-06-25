import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';

import { addNote, editNote } from '../../../store/notes/actions';
import { AddNoteCardFormWrapper } from './NoteForm.styled';
import ColorInput from '../../inputs/ColorInput'
import { TextFieldInputWrapper } from '../../inputs/TextInput.styled';
import { NewNote, Note } from '../../../store/notes/types';
import { theme } from '../../../theme';

interface AddNoteCardFormProps {
  handleClose: () => void;
  notesSectionId: number;
  note?: Note|null
}

const NoteForm = ({ handleClose, notesSectionId, note = null }: AddNoteCardFormProps) => {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(note ? note.color : theme.white);

  const handleNote = (newNoteData: NewNote) => {
    handleClose();
    dispatch(
      note ?
        editNote({
          id: note.id,
          ...newNoteData
        }) :
        addNote(newNoteData)
    );
  };

  const formik = useFormik({
    initialValues: {
      sectionId: notesSectionId,
      title: note ? note.title : '',
      description: note ? note.description : '',
      color: note ? note.color : selectedColor,
      dueTo: note ? note.dueTo :new Date().toISOString().substring(0, 10),
      isCompleted: note ? note.isCompleted : false,
    },
    validate: (newNoteData: NewNote) => {
      const errors = {};

      if (newNoteData.title.length < 1) {
        Object.assign(errors, {title: 'Title can not be empty'});
      }

      if (newNoteData.description.length < 1) {
        Object.assign(errors, {description: 'Description can not be empty'});
      }

      return errors;
    },
    onSubmit: (newNoteData: NewNote) => {
      Object.assign(newNoteData, {color: selectedColor});

      return handleNote(newNoteData);
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
            type={'notes'}
          />
          <FormControlLabel
            control={
              <Checkbox
                id={'isCompleted'}
                value={formik.values.isCompleted}
                onChange={formik.handleChange}
              />
            }
            label={'Is completed'}
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

export default NoteForm;
