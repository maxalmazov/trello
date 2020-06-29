import React, { useRef, useState } from 'react';
import { Collapse, Link, Typography, } from '@material-ui/core';
import { Done, Close } from '@material-ui/icons';
import { DropTargetMonitor, useDrag, useDrop, XYCoord } from 'react-dnd';

import { Note } from '../../store/notes/types';
import {
  NoteWrapper,
  NoteFooterWrapper,
  NoteIsCompletedWrapper,
  NoteDueToWrapper,
  NoteHeaderWrapper,
  NoteTitleWrapper,
  NoteActionsWrapper,
} from './Note.styled';
import NoteAction from './NoteAction';
import { NOTES } from '../../store/types';

interface NoteComponentProps {
  note: Note,
  index: string,
  moveNote: (dragIndex: string, hoverIndex: string) => void,
}

const NoteComponent = ({ note, index, moveNote}: NoteComponentProps) => {
  const PREVIEW_TEXT_LENGTH = 350;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleChange = () => {
    setIsCollapsed((prev) => !prev);
  };

  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: NOTES,
    hover(item: any, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveNote(dragIndex, hoverIndex);
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: NOTES,
      note: note,
      index
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
      isDragging: monitor.isDragging(),
    })
  });

  drag(drop(ref));

  const renderNoteDescription = (description: string) => {
    if (description.length > PREVIEW_TEXT_LENGTH) {
      return (
        <>
          <Collapse in={isCollapsed} collapsedHeight={170}>
            <Typography variant={'body1'}>
              {description}
            </Typography>
          </Collapse>
          <Link onClick={handleChange}>{!isCollapsed ? '...read more' : 'collapse↑'}</Link>
        </>
      );
    }

    return (
      <Typography variant={'body1'}>
        {description}
      </Typography>
    );
  };

  return (
      <NoteWrapper ref={ref} key={'noteId' + note.id} color={note.color} isDragging={isDragging}>
        <NoteHeaderWrapper>
          <NoteTitleWrapper>
            <Typography variant={'h6'}>
              {note.title}
            </Typography>
          </NoteTitleWrapper>
          <NoteActionsWrapper>
            <NoteAction note={note}/>
          </NoteActionsWrapper>
        </NoteHeaderWrapper>
        {
          renderNoteDescription(note.description)
        }
        <NoteFooterWrapper>
          <NoteDueToWrapper>
            <Typography variant={'caption'}>
              Due to: {new Date(note.dueTo).toLocaleDateString()}
            </Typography>
          </NoteDueToWrapper>
          <NoteIsCompletedWrapper>
            <Typography variant={'caption'}>
              Is completed:
            </Typography>
            {
              note.isCompleted ? <Done/> : <Close color={'error'}/>
            }
          </NoteIsCompletedWrapper>
        </NoteFooterWrapper>
      </NoteWrapper>
  );
};
export default NoteComponent;
