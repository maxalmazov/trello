import React from 'react';

import NoteCard from '../noteCard/NoteCard.container';
import { NotesSection } from '../../../store/notesSections/types';
import { Note } from '../../../store/notes/types';
import {
  NoteListHeader,
  NoteListHeaderWrapper,
  NoteListWrapper,
} from './NotesSection.styled';
import NotesSectionAction from './NotesSectionAction';
import AddNoteCard from '../noteCard/form/AddNoteCard';

const NotesSectionComponent = () => {
  return (
    <NoteListWrapper>
      <NoteListHeaderWrapper>
        <NoteListHeader>
          {'notesSection.title'}
        </NoteListHeader>
        <NotesSectionAction notesSectionId={1}/>
      </NoteListHeaderWrapper>
        {/*{notesSection.notes && notesSection.notes.map((notes:Note) => <NoteCard key={'noteCardId' + notes.id} {...notes}/>)}*/}
        {/*<AddNoteCard notesSectionId={notesSection.id}/>*/}
    </NoteListWrapper>
  );
};

export default NotesSectionComponent;
