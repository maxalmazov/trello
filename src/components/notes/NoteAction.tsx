import React from 'react';
import { useDispatch } from 'react-redux';
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';

import { NoteActionWrapper } from './Note.styled';
import { removeNote as removeNoteAction } from '../../store/notes/actions';

interface NoteActionProps {
  noteId: number;
}

const NoteAction = ({ noteId }: NoteActionProps) => {
  const dispatch = useDispatch();

  const removeNote = () => {
    dispatch(removeNoteAction(noteId));
  };

  const editNote = () => {
    console.log('edited' + noteId);
  };

  return (
    <>
      <NoteActionWrapper>
        <span onClick={editNote}>
          <EditIcon fontSize={'small'} />
        </span>
        <span onClick={removeNote}>
          <DeleteIcon fontSize={'small'} />
        </span>
      </NoteActionWrapper>
    </>
  );
};

export default NoteAction;
