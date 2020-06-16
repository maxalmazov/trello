import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const NoteCardWrapper = styled(Card)`
  width: 320px;
  margin-bottom: 5px;
  padding: 5px;
  text-align: justify;
  &:hover {
    background-color: #e9e9e5;
  }
`;
