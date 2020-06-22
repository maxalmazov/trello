import React from 'react';

import NoteCard from '../noteCard/NoteCard.container';
import { Note, NotesSection } from '../../../store/note/types';
import {
  NoteListHeader,
  NoteListHeaderWrapper,
  NoteListWrapper,
} from './NoteList.styled';
import NoteListAction from './NoteListAction';
import AddNoteCard from '../noteCard/form/AddNoteCard';

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
        <AddNoteCard notesSectionId={notesSection.id}/>
    </NoteListWrapper>
  );
};

export default NoteList;
