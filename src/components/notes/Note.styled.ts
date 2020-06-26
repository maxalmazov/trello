import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { theme } from '../../theme';

export const NoteActionsWrapper = styled.div`
  justify-content: flex-end;
  display: none;
`;

export const NoteActionWrapper = styled.div`
  padding: 4px;
  &:hover {
    cursor: pointer;
  }
  display: flex;
`;

export const NoteWrapper = styled(Card)<{ isDragging: boolean }>`
  && {
    width: 320px;
    margin-bottom: 5px;
    padding: 5px;
    text-align: justify;
    background-color: ${props => props.color};
    opacity: ${props => props.isDragging ? 0.5 : 1};
    &:hover {
      background-color: ${props => theme.getDarkened10(props.color)};
      ${NoteActionsWrapper} {
        display: block;
      }
    }
  }
`;

export const NoteHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NoteTitleWrapper = styled.div`
  justify-content: flex-start;
`;

export const NoteFooterWrapper = styled.div`
  display: flex;
  font-size: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const NoteDueToWrapper = styled.div`
  display: flex;
  width: 320px;
  padding: 5px;
  text-align: justify;
  justify-content: flex-start;
`;

export const NoteIsCompletedWrapper = styled.div`
  display: flex;
  width: 320px;
  padding: 5px;
  align-items: center;
  justify-content: flex-end;
`;
