import { connect } from 'react-redux';

import Component from './Board';
import { NotesSection } from '../../store/notesSections/types';

interface State {
  notesSection: NotesSection
}

const mapStateToProps = (state: State) => ({
  ...state.notesSection,
});

export default connect(mapStateToProps)(Component);
