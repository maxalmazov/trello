import React, { useCallback, useEffect } from 'react';
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
import { moveNote as moveNoteAction, loadNotesBySectionId } from '../../store/notes/actions';
import { getNotesBySectionId } from '../../store/notes/selectors';
import { useDrop } from 'react-dnd';
import { NOTES } from '../../store/types';

const NotesSectionComponent = ({ id, title, color}: NotesSection) => {
  const dispatch = useDispatch();
  const notes: any = useSelector(getNotesBySectionId);

  // const [{ isOver, item }, drop] = useDrop({
  //   accept: NOTES,
  //   drop: () => {
  //     item.note.sectionId = id;
  //     dispatch(editNote(item.note));
  //   },
  //   collect: monitor => ({
  //     isOver: monitor.isOver(),
  //     item: monitor.getItem(),
  //   }),
  // });

  const moveNote = useCallback(
    (dragIndex: string, hoverIndex: string) => {
      console.log(dragIndex, hoverIndex, id);
      dispatch(moveNoteAction(dragIndex, hoverIndex, id));
    },
    [notes],
  );

  useEffect(() => {
    dispatch(loadNotesBySectionId(id))
  }, [id]);

  return (
    <NotesSectionWrapper color={color}>
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
