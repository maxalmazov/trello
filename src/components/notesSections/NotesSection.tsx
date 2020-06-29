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
import AddNote from '../notes/AddNote';
import { editNote, loadNotesBySectionId } from '../../store/notes/actions';
import { getNotesBySectionId } from '../../store/notes/selectors';
import { useDrop } from 'react-dnd';

const NotesSectionComponent = ({ id, title, color}: NotesSection) => {
  const dispatch = useDispatch();
  const notes: Notes = useSelector(getNotesBySectionId);

  const [{ isOver, item }, drop] = useDrop({
    accept: 'NOTES',
    drop: () => {
      item.note.sectionId = id;
      dispatch(editNote(item.note));
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      item: monitor.getItem(),
    }),
  });

  useEffect(() => {
    dispatch(loadNotesBySectionId(id))
  }, [id]);

  return (
    <NotesSectionWrapper ref={drop} color={color}>
      <NotesSectionHeaderWrapper>
        <NotesSectionHeader>
          {title}
        </NotesSectionHeader>
        <NotesSectionAction notesSectionId={id}/>
      </NotesSectionHeaderWrapper>
      {
        notes.ids &&
        notes.ids.map(
          (noteId: string) => notes.data[noteId].sectionId === id ?
            (<NoteComponent key={'notes/' + noteId} note={notes.data[noteId]}/>) :
            null
        )
      }
      <AddNote notesSectionId={id}/>
      {isOver && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 1,
          opacity: 0.5,
          backgroundColor: 'yellow',
        }}/>
      )}
    </NotesSectionWrapper>
  );
};

export default NotesSectionComponent;
