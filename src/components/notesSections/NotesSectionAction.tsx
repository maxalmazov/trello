import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { MoreVert as MoreVertIcon } from '@material-ui/icons';

import { removeNotesSection as removeNotesSectionAction } from '../../store/notesSections/actions';

interface NotesSectionActionProps {
  notesSectionId: number;
}

const NotesSectionAction = ({ notesSectionId }: NotesSectionActionProps) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeNotesSection = () => {
    setAnchorEl(null);
    dispatch(removeNotesSectionAction(notesSectionId));
  };

  return (
    <>
      <IconButton onClick={openMenu}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id={'notesSectionActionMenu'}
        anchorEl={anchorEl}
        keepMounted={true}
        open={open}
        onClose={handleClose}
      >
        <MenuItem key={'removedNotesSection' + notesSectionId} onClick={removeNotesSection}>
          Removed
        </MenuItem>
      </Menu>
    </>
  );
};

export default NotesSectionAction;
