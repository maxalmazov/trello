import styled from '../../theme';

export const BoardWrapper = styled.div<{ backgroundImageUrl: string }>`
  flex: 1;
  background-image: url(${props => props.backgroundImageUrl});
  //background-color: #f5f5f5;
  padding: 3px;
`;
