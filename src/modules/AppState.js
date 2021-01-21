// Initial state
const initialState = {
  isFirstOpen: true,
};

// Actions
const FIRST_APP_OPEN = 'AppState/FIRST_APP_OPEN';
const START_APP_OPEN = 'AppState/START_APP_OPEN';

// Action creators
function setAppOpened(isFirstOpen) {
  return {
      type: isFirstOpen ? FIRST_APP_OPEN : START_APP_OPEN,
  };
}

// Dispatch functions
export function openApp(isFirstOpen) {
  return dispatch => {
      dispatch(setAppOpened(isFirstOpen))
  }
}

// Reducer
export default function AppStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FIRST_APP_OPEN:
      return Object.assign({}, state, {
        isFirstOpen: false,
      });
    default:
      return state;
  }
}
