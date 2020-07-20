import styled, { theme } from '../../theme';
import { Card, IconButton, Modal } from '@material-ui/core';

export const BackgroundImageWrapper = styled.div<{ backgroundImage?: string }>`

`;

export const BackgroundImageFormModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const BackgroundImageFormWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  outline: ${props => props.isActive ? '3px dashed black' : '2px dashed black'};
  outline-offset: ${props => props.isActive ? '-15px' : '-10px'};
`;

export const BackgroundImageFormCaption = styled(Card)`
  align-items: center;
`;

export const CloseModalWrapper = styled(IconButton)`
  && {
    background-color: ${theme.white};
    margin-bottom: 5px;
    &:hover {
      background-color: ${theme.whiteDarkened10};
    }
  }
`;
