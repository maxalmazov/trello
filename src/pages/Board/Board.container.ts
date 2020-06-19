import { connect } from 'react-redux';

import Component from './Board';
import { NotesSection } from '../../store/note/types';

interface State {
 [notesListsId: string]: {
   notesList: NotesSection
 };
}

const mapStateToProps = (state: State) => ({
  ...state.notes.notesList,
});

export default connect(mapStateToProps)(Component);
