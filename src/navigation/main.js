import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/dashboard';
import Content from '../screens/content';
import Syllabus from '../screens/syllabus';
import { Icon } from 'native-base';

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator initialRouteName="Dashboard">
    <Drawer.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        drawerIcon: ({ focused, color, size }) => (
          <DrawerIcon
            color={color}
            focused={focused}
            icon={{ type: 'MaterialIcons', name: 'dashboard' }}
          />
        ),
        drawerLabel: 'Dashboard',
      }}
    />
    <Drawer.Screen
      name="Syllabus"
      component={Syllabus}
      options={{
        drawerLabel: 'Syllabus',
        drawerIcon: ({ focused, color, size }) => (
          <DrawerIcon
            color={color}
            focused={focused}
            icon={{ type: 'MaterialCommunityIcons', name: 'clock' }}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Content"
      component={Content}
      options={{
        drawerLabel: 'Content',
        drawerIcon: ({ focused, color, size }) => (
          <DrawerIcon
            color={color}
            focused={focused}
            icon={{ type: 'MaterialIcons', name: 'chat' }}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

const DrawerIcon = ({ icon, color, focused }) => (
  <Icon style={{ fontSize: 20 }} color={color} {...icon} />
);
