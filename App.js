// Will not use FLOW in first version of App  move it to future
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from './src/navigation/main';
import { GoogleSignin } from '@react-native-community/google-signin';
const Stack = createStackNavigator();

export default function App() {
  // Wait for API for login
  const [loading, setIsLogin] = useState(0);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '',
    });

    GoogleSignin.isSignedIn()
      .then(isSignedIn => {
        const state = isSignedIn ? 1 : 2;

        setIsLogin(state);
      })
      .catch(err => {
        console.log({ err });
        setIsLogin(2);
      });
  }, []);

  return (
    <NavigationContainer>
      {loading === 0 ? (
        <Stack.Screen name="Loading...." component={Loading} />
      ) : (
        <Drawer isSignedIn={loading} />
      )}
    </NavigationContainer>
  );
}

const Loading = () => <ActivityIndicator />;
