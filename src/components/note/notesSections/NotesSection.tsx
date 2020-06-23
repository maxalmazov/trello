import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NoteCard from '../noteCard/NoteCard.container';
import { NotesSection } from '../../../store/notesSections/types';
import { Note } from '../../../store/notes/types';
import {
  NotesSectionHeader,
  NotesSectionHeaderWrapper,
  NotesSectionWrapper,
} from './NotesSection.styled';
import NotesSectionAction from './NotesSectionAction';
import AddNoteCard from '../noteCard/form/AddNoteCard';
import { loadNotesBySectionId } from '../../../store/notes/actions';
import { getNotes } from '../../../store/notes/selectors';

const NotesSectionComponent = ({ id, title, notesIds}: NotesSection) => {
  const dispatch = useDispatch();

  const notes = useSelector(getNotes);
  console.log(notes);
  //
  useEffect(() => {
    dispatch(loadNotesBySectionId(id))
  }, [id]);

  return (
    <NotesSectionWrapper>
      <NotesSectionHeaderWrapper>
        <NotesSectionHeader>
          {title}
        </NotesSectionHeader>
        <NotesSectionAction notesSectionId={1}/>
      </NotesSectionHeaderWrapper>
        {
          notes &&
          Object.values(notes).map(
            (note: Note) => notesIds.includes('notes/' + note.id) ? (<NoteCard key={'noteCardId' + note.id} {...note}/>): null
          )
        }
        <AddNoteCard notesSectionId={id}/>
    </NotesSectionWrapper>
  );
};

export default NotesSectionComponent;
