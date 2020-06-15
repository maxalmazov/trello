import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { RouteComponentProps } from 'react-router';

import {
  Header,
  HeaderContainer,
  LeftSide,
  RightSide,
} from './Header.styled';

export interface HeaderProps {
}

const HeaderMenu: React.FC<RouteComponentProps & HeaderProps> = ({ location }) => {
  return (
    <Header>
      <HeaderContainer>
        <LeftSide>
          <span>LeftSide</span>
        </LeftSide>
        <RightSide>
          <span>RightSide</span>
        </RightSide>
      </HeaderContainer>
    </Header>
  );
};

export default HeaderMenu;
