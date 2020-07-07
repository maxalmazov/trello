import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NoteComponent from '../notes/Note.container';
import { NotesSection } from '../../store/notesSections/types';
import {
  NotesSectionHeader,
  NotesSectionHeaderWrapper,
  NotesSectionWrapper,
} from './NotesSection.styled';
import NotesSectionAction from './NotesSectionAction';
import AddNote from '../notes/AddNote';
import { moveNote as moveNoteAction, loadNotesBySectionId, editNote } from '../../store/notes/actions';
import { getNotes } from '../../store/notes/selectors';
import { useDrop } from 'react-dnd';
import { NOTES } from '../../store/types';
import { Notes } from '../../store/notes/types';

const NotesSectionComponent = ({ id, title, color}: NotesSection) => {
  const dispatch = useDispatch();
  const notes: Notes = useSelector(getNotes);

  const [{ item }, drop] = useDrop({
    accept: NOTES,
    hover() {
      if (item.note.sectionId === id) {
        return;
      }

      item.note.sectionId = id;
      dispatch(editNote(item.note));
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      item: monitor.getItem(),
    }),
  });

  const moveNote = useCallback(
    (dragIndex: string, hoverIndex: string) => {
      dispatch(moveNoteAction(dragIndex, hoverIndex, id));
    },
    [id],
  );

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
            (<NoteComponent index={noteId} moveNote={moveNote} key={'notes/' + noteId} note={notes.data[noteId]}/>) :
            null
        )
      }
      <AddNote notesSectionId={id}/>
    </NotesSectionWrapper>
  );
};

export default NotesSectionComponent;
