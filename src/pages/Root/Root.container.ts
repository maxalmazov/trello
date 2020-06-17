import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Component from './Root';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Component)
);
