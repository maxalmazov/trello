import React from 'react';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import NoteCard from '../noteCard/NoteCard';
import { Note, NotesSection } from '../../../store/note/types';
import {
  NoteListHeader,
  NoteListHeaderWrapper,
  NoteListWrapper,
} from './NoteList.styled';
import NoteListAction from './NoteListAction';
import AddNoteCard from '../noteCard/AddNoteCard';

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
        <AddNoteCard />
    </NoteListWrapper>
  );
};

export default NoteList;
