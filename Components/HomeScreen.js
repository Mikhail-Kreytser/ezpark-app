import React, { Component } from 'react';
import {Alert, ActivityIndicator, AsyncStorage,Image, Button, StatusBar, StyleSheet, View, Text, ScrollView, TextInput} from 'react-native';
import {StackNavigator, SwitchNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
   constructor(props) {
    super(props);
    this.state={
    };
  }
  // static navigationOptions = { 
  //   title: 'Welcome to the app!',
  // };
    static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../parking.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show me options" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  ok = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.setState({username:userToken})
  };

  _showMoreApp = () => {
    //this.props.navigation.navigate('Map');
    this.props.navigation.navigate('DrawerToggle');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});