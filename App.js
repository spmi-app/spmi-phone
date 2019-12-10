// Will not use FLOW in first version of App  move it to future
import * as React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import Drawer from './src/navigation/main'

export default function App() {
  return <NavigationNativeContainer><Drawer /></NavigationNativeContainer>;
}
