import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Component from './Header';

const mapStateToProps = () => ({

});

export default withRouter(connect(mapStateToProps)(Component));
