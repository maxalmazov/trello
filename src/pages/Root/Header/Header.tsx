import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  IconButton,
  Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import {
  Header,
  HeaderContainer,
  LeftSide,
  RightSide,
} from './Header.styled';
import AddNoteSection from '../../../components/notesSections/form/AddNotesSection';

export interface HeaderProps {
}

const HeaderMenu: React.FC<RouteComponentProps & HeaderProps> = ({ location }) => {
  return (
    <Header>
      <HeaderContainer>
        <LeftSide>
          <IconButton>
            <Menu />
          </IconButton>
          <Typography>
            Like Trello
          </Typography>
        </LeftSide>
        <RightSide>
          <AddNoteSection/>
        </RightSide>
      </HeaderContainer>

    </Header>
  );
};

export default HeaderMenu;
