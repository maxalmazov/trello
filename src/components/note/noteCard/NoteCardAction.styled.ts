import styled from 'styled-components';
import { CardActions } from '@material-ui/core';

export const CardActionWrapper = styled(CardActions)`
  font-size: 20px;
  margin-right: 8px;
  flex-direction: row;
  justify-content: space-between;
  &:hover {
    background-color: #e9e9e5;
  }
`;
