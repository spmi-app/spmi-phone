import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Content from '../screens/content';
import Login from '../screens/login';
import { Icon } from 'native-base';

const Drawer = createDrawerNavigator();

export default ({ isSignedIn }) => {
  console.log({ isSignedIn });

  return (
    <Drawer.Navigator
      initialRouteName={isSignedIn == 2 ? 'Log out' : 'Dashboard'}>
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
      <Drawer.Screen name="Log out" component={Login} />
    </Drawer.Navigator>
  );
};

const DrawerIcon = ({ icon, color, focused }) => (
  <Icon style={{ fontSize: 20 }} color={color} {...icon} />
);
