// Will not use FLOW in first version of App  move it to future
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/login';
import Drawer from './src/navigation/main';
const Stack = createStackNavigator();

export default function App() {
  // Wait for API for login
  const [login, setIsLogin] = useState(true);
  useEffect(() => {}, []);
  return (
    <NavigationContainer>
      {login ? (
        <Drawer />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
