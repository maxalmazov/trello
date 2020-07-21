import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GlobalStyles } from '../../theme';
import { Wrapper } from './Root.styled';
import Header from './Header/Header.container';
import Footer from './Footer/Footer.container';
import Board from '../Board/Board.container';
import { getBackgroundImage } from '../../store/backgroundImage/selectors';
import { loadBackgroundImage } from '../../store/backgroundImage/actions';

const HomeComponent: React.FC = () => {
  const dispatch = useDispatch();
  const backgroundImage = useSelector(getBackgroundImage);


  useEffect(() => {
    dispatch(loadBackgroundImage());
  }, []);

  return(
    <>
      <GlobalStyles/>
      <Wrapper backgroundImageUrl={backgroundImage.url}>
        <Header/>
        <Board/>
        <Footer/>
      </Wrapper>
    </>
  )
};

export default HomeComponent;
