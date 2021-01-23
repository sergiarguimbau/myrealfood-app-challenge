import { compose } from 'recompose';
import { connect } from 'react-redux';

import { addScannedItem, clearScanHistory } from './ScanHistoryState'
import ScanHistoryView from './ScanHistoryView';

export default compose(
  connect(
    state => ({
      historyData: state.scanHistory.historyData,
    }),
    dispatch => ({
      addScannedItem: (item) => dispatch(addScannedItem(item)),
      clearScanHistory: () => dispatch(clearScanHistory()),
    }),
  ),
)(ScanHistoryView);
