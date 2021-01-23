// Initial state
const initialState = {
  historyData: [],
};

// Actions
const ADD_SCANNED_ITEM = 'ScanHistoryState/ADD_SCANNED_ITEM';
const CLEAR_SCAN_HISTORY = 'ScanHistoryState/CLEAR_SCAN_HISTORY';

// Action creators
function actionAddScannedItem(item) {
  return {
    type: ADD_SCANNED_ITEM,
    item,
  };
}

function actionClearScanHistory() {
  return {
    type: CLEAR_SCAN_HISTORY,
  };
}

// Dispatch functions
export function addScannedItem(item) {
  return dispatch => {
    dispatch(actionAddScannedItem(item));
  }
}

export function clearScanHistory() {
  return dispatch => {
    dispatch(actionClearScanHistory());
  }
}

// Reducer
export default ScanHistoryStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCANNED_ITEM:
      return Object.assign({}, state, {
        // New items are displayed at the top
        historyData: [action.item, ...state.historyData],
      });
    case CLEAR_SCAN_HISTORY:
      return Object.assign({}, state, {
        historyData: [],
      });
    default:
      return state;
  }
}
