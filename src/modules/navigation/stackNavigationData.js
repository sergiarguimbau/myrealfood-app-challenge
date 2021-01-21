import HomeScreen from '../home/HomeViewContainer';

import { colors, fonts } from '../../styles';

const headerBackground = '';

const StackNavigationData = [
  {
    name: 'Home',
    component: HomeScreen,
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