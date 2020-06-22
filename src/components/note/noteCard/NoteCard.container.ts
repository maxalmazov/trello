import { connect } from 'react-redux';

import Component from './NoteCard';
import { Note } from '../../../store/note/types';
// import { NotesSection } from '../../store/note/types';

interface State {
  [notesListsId: string]: {
    [notesList: string]: {
      notes: Note[]
    }
  };
}

const mapStateToProps = (state: State) => ({
  ...state.notes.notesList.notes,
});

export default connect(mapStateToProps)(Component);
