import * as React from 'react';
import List from './list';
import { Icon } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Content"
      component={List}
      options={{
        title: 'Content',
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
