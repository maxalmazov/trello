import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GlobalStyles } from '../../theme';
import { Wrapper } from './Root.styled';
import Header from './Header/Header.container';
import Footer from './Footer/Footer.container';
import Board from '../Board/Board.container';
import { loadNotesSections } from '../../store/notesSections/actions';
import { getNotesSection } from '../../store/notesSections/selectors';
import { NotesSections } from '../../store/notesSections/types';

const HomeComponent: React.FC = () => {
  const dispatch = useDispatch();
  const notesSections: NotesSections = useSelector(getNotesSection);+
    console.log(notesSections);

  useEffect(() => {
    dispatch(loadNotesSections())
  }, []);

  return (
    <>
      <GlobalStyles/>
      <Wrapper>
        <Header/>
        <Board {...notesSections}/>
        <Footer/>
      </Wrapper>
    </>
  );
};

export default HomeComponent;
