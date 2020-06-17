import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BoardWrapper } from './Board.styled';
import Grid from '@material-ui/core/Grid';
import NoteList from '../../components/note/noteList/NoteList';
import { NotesSection } from '../../store/note/types';
import { loadNotes } from '../../store/note/actions';
import { getNotesList } from '../../store/note/selectors';

export interface Props {
  // notesList: NotesSection[]
}

const HomeComponent: React.FC<Props> = (/*{ notesList }*/) => {
  const dispatch = useDispatch();
  const notesList = useSelector(getNotesList);

  useEffect(() => {
    dispatch(loadNotes())
  }, []);
  console.log(notesList);
  return (

    <BoardWrapper>
      <Grid
        container={true}
        direction={'row'}
        justify={'flex-start'}
        alignItems={'flex-start'}
      >
        {notesList && notesList.map((notesSection: NotesSection) => <NoteList key={'notesSectionId' + notesSection.id} {...notesSection}/>)}
      </Grid>
    </BoardWrapper>
  );
};

export default HomeComponent;
