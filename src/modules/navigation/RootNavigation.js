import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../styles';
import I18t from '../../translations'
import StackNavigationData from './stackNavigationData';

export default function NavigatorView(props) {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      {StackNavigationData.map((item, idx) => (
        <Stack.Screen
          key={`stack_item-${idx+1}`}
          name={item.name} 
          component={item.component} 
          options={({ route }) => {
            let headerObj = {
              headerLeft: item.headerLeft,
              headerBackground: () => (
                <View style={styles.headerImage} />
              ),
              headerTitleStyle: item.headerTitleStyle,
            }
            
            // Change header title
            let titleObj;
            if (route.name == 'Home') {
              titleObj = {title : I18t.t('home_title')}
            }
            const resultObj = {...headerObj, ...titleObj};
            return resultObj;
          }}
        />
      ))}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: colors.primary,
  },
});