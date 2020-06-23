import React from 'react';

import { BoardWrapper } from './Board.styled';
import Grid from '@material-ui/core/Grid';
import NotesSectionComponent from '../../components/note/notesSections/NotesSection';
import { NotesSection } from '../../store/notesSections/types';

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
