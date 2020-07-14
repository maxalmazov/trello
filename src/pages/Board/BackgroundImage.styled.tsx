import styled from '../../theme';
import { Modal } from '@material-ui/core';

export const BackgroundImageWrapper = styled.div<{ backgroundImage?: string }>`

`;

export const BackgroundImageFormModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const BackgroundImageFormWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  outline: ${props => props.isActive ? '3px dashed black' : '2px dashed black'};
  outline-offset: ${props => props.isActive ? '-15px' : '-10px'};
  opacity: ${props => props.isActive ? 0.5 : 1};
  background-color: ${props => props.isActive ? 'white' : ''};
`;

export const BackgroundImageFormCaption = styled.div`

`;
