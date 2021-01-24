import ScanHistoryScreen from '../scanHistory/ScanHistoryViewContainer';

import { colors, fonts } from '../../styles';

const headerBackground = '';

const StackNavigationData = [
  {
    name: 'ScanHistory',
    component: ScanHistoryScreen,
    headerLeft: null,
    headerBackground,
    headerTitleStyle: {
      fontFamily: fonts.primaryRegular,
      color: colors.black,
      fontSize: 18,
    },
  },
]

export default StackNavigationData;