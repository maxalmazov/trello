import React from 'react';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import NoteCard from '../noteCard/NoteCard';
import { Note, NotesSection } from '../../../store/note/types';
import {
  NewNoteButton,
  NoteListHeader,
  NoteListHeaderWrapper,
  NoteListWrapper,
} from './NoteList.styled';
import NoteListAction from './NoteListAction';

const NoteList = (notesSection: NotesSection) => {
  return (
    <NoteListWrapper>
      <NoteListHeaderWrapper>
        <NoteListHeader>
          {notesSection.title}
        </NoteListHeader>
        <NoteListAction notesSectionId={notesSection.id}/>
      </NoteListHeaderWrapper>
        {notesSection.notes && notesSection.notes.map((note:Note) => <NoteCard key={'noteCardId' + note.id} {...note}/>)}
      <NewNoteButton >
        + Add another card
      </NewNoteButton>
    </NoteListWrapper>
  );
};

export default NoteList;
