import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GlobalStyles } from '../../theme';
import { Wrapper } from './Root.styled';
import Header from './Header/Header.container';
import Footer from './Footer/Footer.container';
import Board from '../Board/Board.container';
import { loadNotes } from '../../store/note/actions';
import { getNotesList } from '../../store/note/selectors';

const HomeComponent: React.FC = () => {
  const dispatch = useDispatch();
  const notesList = useSelector(getNotesList);

  useEffect(() => {
    dispatch(loadNotes())
  }, []);

  return (
    <>
      <GlobalStyles/>
      <Wrapper>
        <Header/>
        <Board notesList={notesList}/>
        <Footer/>
      </Wrapper>
    </>
  );
};

export default HomeComponent;
