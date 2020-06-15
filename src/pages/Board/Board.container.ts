import { connect } from 'react-redux';

import Component from './Board';
import { StoreState } from '../../store/types';

const mapStateToProps = (state: StoreState) => ({
  ...state.notes,
});

export default connect(mapStateToProps)(Component);
