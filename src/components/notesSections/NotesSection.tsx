import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NoteComponent from '../notes/Note.container';
import { NotesSection } from '../../store/notesSections/types';
import { Note, Notes } from '../../store/notes/types';
import {
  NotesSectionHeader,
  NotesSectionHeaderWrapper,
  NotesSectionWrapper,
} from './NotesSection.styled';
import NotesSectionAction from './NotesSectionAction';
import AddNote from '../notes/form/AddNote';
import { loadNotesBySectionId } from '../../store/notes/actions';
import { getNotesBySectionId } from '../../store/notes/selectors';

const NotesSectionComponent = ({ id, title, notesIds}: NotesSection) => {
  const dispatch = useDispatch();
  const notes: Notes = useSelector(getNotesBySectionId);

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
      <NoteComponent notes={notes} notesIds={notesIds}/>
        {/*{*/}
        {/*  notes &&*/}
        {/*  Object.values(notes).map(*/}
        {/*    (note: Note) => notesIds.includes('notes/' + note.id) ? () : null*/}
        {/*  )*/}
        {/*}*/}
        <AddNote notesSectionId={id}/>
    </NotesSectionWrapper>
  );
};

export default NotesSectionComponent;
