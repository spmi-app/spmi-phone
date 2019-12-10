import * as React from 'react';
import List from './list';
import { Icon } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Syllabus"
      component={List}
      options={{
        title: 'Syllabus',
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
