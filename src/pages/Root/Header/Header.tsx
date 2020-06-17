import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  Button,
  Dialog, DialogActions, DialogContent, DialogContentText,
  DialogTitle,
  IconButton, TextField,
  Typography
} from '@material-ui/core';
import { Menu, Add } from '@material-ui/icons';

import {
  Header,
  HeaderContainer,
  LeftSide,
  RightSide,
} from './Header.styled';
import AddNoteSection from '../../../components/note/noteList/AddNoteList';

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
