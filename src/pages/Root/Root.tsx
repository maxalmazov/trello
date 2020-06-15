import React from 'react';
import { RouteComponentProps } from 'react-router';

import { GlobalStyles } from '../../theme';
import { Wrapper } from './Root.styled';
import Header from './Header/Header.container';
import Footer from './Footer/Footer.container';
import Board from '../Board/Board.container';

const HomeComponent: React.SFC<RouteComponentProps> = () => {
  return (
    <>
      <GlobalStyles/>
      <Wrapper>
        <Header/>
        <Board/>
        <Footer/>
      </Wrapper>
    </>
  );
};

export default HomeComponent;
