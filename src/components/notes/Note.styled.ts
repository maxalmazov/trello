import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { CardActions } from '@material-ui/core';

export const NoteWrapper = styled(Card)`
  && {
    width: 320px;
    margin-bottom: 5px;
    padding: 5px;
    text-align: justify;
    background-color: ${props => props.color};
    &:hover {
      background-color: #e9e9e5;
    }
  }
`;

export const NoteActionsWrapper = styled(CardActions)`
  display: flex;
  font-size: 20px;
  flex-direction: row;
  justify-content: space-between;
  &:hover {
    background-color: #e9e9e5;
  }
`;

export const NoteDueToWrapper = styled.div`
  display: flex;
  width: 320px;
  padding: 5px;
  text-align: justify;
  justify-content: flex-start;
  background-color: ${props => props.color};
  &:hover {
    background-color: #e9e9e5;
  }
`;

export const NoteIsCompletedWrapper = styled.div`
  display: flex;
  width: 320px;
  padding: 5px;
  align-items: center;
  justify-content: flex-end;
  background-color: ${props => props.color};
  &:hover {
    background-color: #e9e9e5;
  }
`;
