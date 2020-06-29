import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

import { NotesSections } from '../../store/notesSections/types';
import { BoardWrapper } from './Board.styled';
import NotesSectionComponent from '../../components/notesSections/NotesSection';
import { loadNotesSections } from '../../store/notesSections/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getNotesSection } from '../../store/notesSections/selectors';

const BoardComponent: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNotesSections())
  }, []);
  const notesSections: NotesSections = useSelector(getNotesSection);

    return(
    <BoardWrapper>
      <Grid
        container={true}
        direction={'row'}
        justify={'flex-start'}
        alignItems={'flex-start'}
      >
        {
          notesSections.ids &&
          notesSections.ids.map(
            (notesSectionId: string) =>
              <NotesSectionComponent key={'notesSectionId' + notesSectionId} {...notesSections.data[notesSectionId]}/>
          )
        }
      </Grid>
    </BoardWrapper>
  )
};

export default BoardComponent;
