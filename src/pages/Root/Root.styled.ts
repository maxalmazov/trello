import styled from 'styled-components';

export const Wrapper = styled.div<{ backgroundImageUrl: string }>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: url(${props => props.backgroundImageUrl}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow-x: hidden;
`;
