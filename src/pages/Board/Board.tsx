import React from 'react';
import { Grid } from '@material-ui/core';

import { NotesSection } from '../../store/notesSections/types';
import { BoardWrapper } from './Board.styled';
import NotesSectionComponent from '../../components/note/notesSections/NotesSection';

export interface Props {
  notesSections: {
    [notesSectionId: string]: NotesSection
  }
}

const BoardComponent: React.FC<Props> = ({ notesSections }) => (
  <BoardWrapper>
    <Grid
      container={true}
      direction={'row'}
      justify={'flex-start'}
      alignItems={'flex-start'}
    >
      {
        notesSections &&
        Object.values(notesSections).map(
          (notesSection: NotesSection) =>
            <NotesSectionComponent key={'notesSectionId' + notesSection.id} {...notesSection}/>
        )
      }
    </Grid>
  </BoardWrapper>
);

export default BoardComponent;
