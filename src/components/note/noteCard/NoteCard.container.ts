import { connect } from 'react-redux';

import Component from './NoteCard';
import { Note } from '../../../store/notes/types';
// import { NotesSection } from '../../store/notes/types';

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
