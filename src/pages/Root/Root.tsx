import React from 'react';

import { GlobalStyles } from '../../theme';
import { Wrapper } from './Root.styled';
import Header from './Header/Header.container';
import Footer from './Footer/Footer.container';
import Board from '../Board/Board.container';

const HomeComponent: React.FC = () => (
  <>
    <GlobalStyles/>
    <Wrapper>
      <Header/>
      <Board/>
      <Footer/>
    </Wrapper>
  </>
);

export default HomeComponent;
