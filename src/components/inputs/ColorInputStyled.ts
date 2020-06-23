import styled from 'styled-components';
import { theme } from '../../theme';

export const ColorInputBlockWrapper = styled.div`
  display: flex;
  margin: 8px;
`;

export const ColorInputWrapper = styled.div<{color: string, isChecked: boolean}>`
  width: 18px;
  height: 18px;
  cursor: pointer;
  background-color: ${props => props.color};
  border: 1px solid ${props => props.color == theme.white ? theme.black : props.color};
  opacity: ${props => props.isChecked ? 1 : 0.5};
  box-sizing: border-box;
  border-radius: 50%;
  justify-content: flex-start;
  margin: 4px;
  &:hover {
    background-color: ${props => props.color};
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
`;

export const ColorLabelWrapper = styled.div`
  margin-right: 8px;
`;
