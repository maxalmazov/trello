import React, { useEffect, useCallback } from 'react';
import { BoardWrapper } from './Board.styled';
import Grid from '@material-ui/core/Grid';
import NoteList from '../../components/NoteList';

export interface Props {

}

const HomeComponent = (props: Props) => {
  console.log(props);
  return (
    <BoardWrapper>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <NoteList/>
      </Grid>
    </BoardWrapper>
  );
};

export default HomeComponent;
