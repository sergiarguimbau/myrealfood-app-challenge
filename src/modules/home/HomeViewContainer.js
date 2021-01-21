import { compose } from 'recompose';
import { connect } from 'react-redux';

import HomeView from './HomeView';

export default compose(
  connect(
    state => ({}),
    dispatch => ({}),
  ),
)(HomeView);