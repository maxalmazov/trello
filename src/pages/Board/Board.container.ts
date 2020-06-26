import { connect } from 'react-redux';

import Component from './Board';
import { State } from '../../store/types';


const mapStateToProps = (state: State) => {
  console.log(state);
  return({
  ...state.notesSections
})};

export default connect(mapStateToProps)(Component);
