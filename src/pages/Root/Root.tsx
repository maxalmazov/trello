import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GlobalStyles } from '../../theme';
import { Wrapper } from './Root.styled';
import Header from './Header/Header.container';
import Footer from './Footer/Footer.container';
import Board from '../Board/Board.container';
import { loadNotesSections } from '../../store/notesSections/actions';
import { getNotesSection } from '../../store/notesSections/selectors';

const HomeComponent: React.FC = () => {
  const dispatch = useDispatch();
  const notesSections = useSelector(getNotesSection);

  useEffect(() => {
    dispatch(loadNotesSections())
  }, []);

  return (
    <>
      <GlobalStyles/>
      <Wrapper>
        <Header/>
        <Board notesSections={notesSections}/>
        <Footer/>
      </Wrapper>
    </>
  );
};

export default HomeComponent;
