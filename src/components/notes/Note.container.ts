import { connect, useSelector } from 'react-redux';

import Component from './Note';
import { Note, Notes } from '../../store/notes/types';
import { getNotes } from '../../store/notes/selectors';

interface State {
  notes: Notes
}

const mapStateToProps = (state: any) => ({
  // ...state.notes
});

export default connect(mapStateToProps)(Component);
