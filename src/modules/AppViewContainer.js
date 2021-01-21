import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { Platform, UIManager, StatusBar } from 'react-native';

import AppView from './AppView';
import { openApp } from './AppState';

export default compose(
  connect(
    state => ({
      isFirstOpen: state.app.isFirstOpen,
    }),
    dispatch => ({
      openApp: (isFirstOpen) => dispatch(openApp(isFirstOpen)),
    }),
  ),
  lifecycle({
    componentDidMount() {
      this.props.openApp(this.props.isFirstOpen);
      StatusBar.setBarStyle('light-content');
      if (Platform.OS === 'android') {
        // eslint-disable-next-line no-unused-expressions
        UIManager.setLayoutAnimationEnabledExperimental &&
          UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    },
  }),
)(AppView);
