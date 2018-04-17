import React from 'react';
import { ActivityIndicator, AsyncStorage, Button, StatusBar, StyleSheet, View} from 'react-native';
import { StackNavigator, SwitchNavigator, DrawerNavigator } from 'react-navigation';
import SignInScreen from './Components/SignInScreen.js';
import SignUpScreen from './Components/SignUpScreen.js';
import HomeScreen from './Components/HomeScreen.js';
import MapScreen from './Components/MapScreen.js';
import AuthLoadingScreen from './Components/AuthLoadingScreen.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
});

const AppStack = DrawerNavigator({ Home: HomeScreen, Map: MapScreen });
const AuthStack = StackNavigator({ SignIn: SignInScreen, SignUp: SignUpScreen });

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
 