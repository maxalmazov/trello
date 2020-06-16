import styled from 'styled-components';
import {
  Grid,
  Paper,
  Typography,
  Box,
} from '@material-ui/core';

export const NoteListWrapper = styled(Grid)`
  margin: 5px;
  padding: 8px;
  background: #dfe1e6;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.12);
  box-shadow: 0 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12);
`;

export const PaperWrapper = styled(Paper)`

`;

export const NoteListHeaderWrapper = styled(Box)`
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const NoteListHeader = styled(Box)`
  padding: 12px;
  font-size: 1.3em;
`;

export const NoteListHeaderActions = styled(Typography)`

`;

export const NewNoteButton = styled(Box)`
  flex-grow: 1;
  cursor: pointer;
  padding: 8px;
  border-radius: 5px;
  &:hover {
    background-color: #ffffff;
    opacity: 0.8;
  }
`;
