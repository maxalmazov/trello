import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NoteComponent from '../notes/Note.container';
import { NotesSection } from '../../store/notesSections/types';
import { Note } from '../../store/notes/types';
import {
  NotesSectionHeader,
  NotesSectionHeaderWrapper,
  NotesSectionWrapper,
} from './NotesSection.styled';
import NotesSectionAction from './NotesSectionAction';
import AddNote from '../notes/form/AddNoteCard';
import { loadNotesBySectionId } from '../../store/notes/actions';
import { getNotes } from '../../store/notes/selectors';

const NotesSectionComponent = ({ id, title, notesIds}: NotesSection) => {
  const dispatch = useDispatch();
  const notes = useSelector(getNotes);

  useEffect(() => {
    dispatch(loadNotesBySectionId(id))
  }, [id]);

  return (
    <NotesSectionWrapper>
      <NotesSectionHeaderWrapper>
        <NotesSectionHeader>
          {title}
        </NotesSectionHeader>
        <NotesSectionAction notesSectionId={id}/>
      </NotesSectionHeaderWrapper>
        {
          notes &&
          Object.values(notes).map(
            (note: Note) => notesIds.includes('notes/' + note.id) ? (<NoteComponent key={'noteCardId' + note.id} {...note}/>): null
          )
        }
        <AddNote notesSectionId={id}/>
    </NotesSectionWrapper>
  );
};

export default NotesSectionComponent;
