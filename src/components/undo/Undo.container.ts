import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import { Undo } from './Undo';


const mapStateToProps = (state: any) => {
  return {
    canUndo: state.notes.past.length > 0,
    canRedo: state.notes.future.length > 0
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Undo);
