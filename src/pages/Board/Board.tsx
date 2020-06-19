import React from 'react';

import { BoardWrapper } from './Board.styled';
import Grid from '@material-ui/core/Grid';
import NoteList from '../../components/note/noteList/NoteList';
import { NotesSection } from '../../store/note/types';

export interface Props {
  notesList: {[notesListId: string]: NotesSection}
}

const BoardComponent: React.FC<Props> = ({notesList}) => {
  return (
    <BoardWrapper>
      <Grid
        container={true}
        direction={'row'}
        justify={'flex-start'}
        alignItems={'flex-start'}
      >
        {notesList && Object.values(notesList).map((notesSection: NotesSection) => <NoteList key={'notesSectionId' + notesSection.id} {...notesSection}/>)}
      </Grid>
    </BoardWrapper>
  );
};

export default BoardComponent;
