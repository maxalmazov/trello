import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';

import { removeNotesSection as removeNotesSectionAction } from '../../store/notesSections/actions';
import { NoteActionWrapper } from './Note.styled';

interface NoteActionProps {
  noteId: number;
}

const NoteAction = ({ noteId }: NoteActionProps) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const removeNote = () => {
    console.log('removed' + noteId);
  };

  const editNote = () => {
    console.log('edited' + noteId);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeNotesSection = () => {
    setAnchorEl(null);
    dispatch(removeNotesSectionAction(noteId));
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
      <Menu
        id={'notesSectionActionMenu'}
        anchorEl={anchorEl}
        keepMounted={true}
        open={open}
        onClose={handleClose}
      >
        <MenuItem key={'removedNotesSection' + noteId} onClick={removeNotesSection}>
          Removed
        </MenuItem>
      </Menu>
    </>
  );
};

export default NoteAction;
