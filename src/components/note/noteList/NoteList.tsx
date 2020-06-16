import React from "react";
import {
  Paper,
  Typography,
  IconButton,
  Box,
} from '@material-ui/core';
import MoreVertIcon from "@material-ui/icons/MoreVert";

import NoteCard from "../noteCard/NoteCard";
import { Note, NotesSection } from '../../../store/note/types';
import {
  NewNoteButton,
  NoteListHeader,
  NoteListHeaderWrapper,
  NoteListWrapper,
} from './NoteList.styled';

const NoteList = (notesSection: NotesSection) => {
  console.log(notesSection);

  return (
    <NoteListWrapper>
      <NoteListHeaderWrapper>
        <NoteListHeader>
          {notesSection.title}
        </NoteListHeader>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </NoteListHeaderWrapper>
        {notesSection.notes && notesSection.notes.map((note:Note) => <NoteCard key={'noteCardId' + note.id} {...note}/>)}
      <NewNoteButton >
        + Add another card
      </NewNoteButton>
    </NoteListWrapper>
  );
};

export default NoteList;
