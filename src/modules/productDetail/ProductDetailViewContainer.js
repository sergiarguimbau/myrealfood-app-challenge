import { compose } from 'recompose';
import { connect } from 'react-redux';

import ProductDetailView from './ProductDetailView';

export default compose(
  connect(
    state => ({}),
    dispatch => ({}),
  ),
)(ProductDetailView);
