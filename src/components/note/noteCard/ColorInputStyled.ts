import styled from 'styled-components';

export const ColorInputBlockWrapper = styled.div`

`;

export const ColorInputWrapper = styled.div<{color: string}>`
  width: 18px;
  height: 18px;
  cursor: pointer;
  background-color: ${props => props.color};
  border: 1px solid ${props => props.color};
  box-sizing: border-box;
  border-radius: 50%;
  justify-content: start;
  margin: 4px;
`;
