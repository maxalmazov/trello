import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

import { NotesSection, NotesSections } from '../../store/notesSections/types';
import { BoardWrapper } from './Board.styled';
import NotesSectionComponent from '../../components/notesSections/NotesSection';

export interface NotesSectionsProps {
  data: {
    [notesSectionId: string]: NotesSection
  },
  order: string[],
}

const BoardComponent: React.FC<NotesSectionsProps> = ({ data, order }: NotesSections) => {

  console.log(data);
    return(
    <BoardWrapper>
      <Grid
        container={true}
        direction={'row'}
        justify={'flex-start'}
        alignItems={'flex-start'}
      >
        {
          data &&
          Object.values(data).map(
            (notesSection: NotesSection) =>
              <NotesSectionComponent key={'notesSectionId' + notesSection.id} {...notesSection}/>
          )
        }
      </Grid>
    </BoardWrapper>
  )
};

export default BoardComponent;
