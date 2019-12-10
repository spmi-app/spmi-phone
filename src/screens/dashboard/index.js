import * as React from 'react';
import Dashboard from './dashboard';
import { Icon } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        title: 'Dashboard',
        headerLeft: () => (
          <Icon
            style={{paddingLeft: 10}}
            fontSize={16}
            onPress={navigation.openDrawer}
            name='menu'
          />
        ),
      }}
    />
  </Stack.Navigator>
);
