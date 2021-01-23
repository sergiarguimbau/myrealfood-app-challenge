import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import scanHistory from '../modules/scanHistory/ScanHistoryState';
import app from '../modules/AppState';

export default combineReducers({
  // ## Generator Reducers
  scanHistory,
  app,
});
