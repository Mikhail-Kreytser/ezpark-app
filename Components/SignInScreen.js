import React, { Component } from 'react';
import {Alert, ActivityIndicator, AsyncStorage, Button, StatusBar, StyleSheet, View, Text, ScrollView, TextInput} from 'react-native';
import {StackNavigator, SwitchNavigator } from 'react-navigation';
import {URL, API, LOGIN, USER, CREATE} from '../Urls/API'
import axios from 'react-native-axios'

export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username: '',
      password: '',
      URL: URL,
      loading: false,
      message:'',
      token:'',
    };

    //this.signInAsync = this.signInAsync.bind(this);
  }
  static navigationOptions = {
    title: 'Please sign in',
  };

  _signUp = () => {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <View style={styles.container}>
        <View  style={{minWidth: '100%'}}>
          <ScrollView style={{padding: 60}}>
              
              <TextInput 
                  style={{fontSize: 40, paddingBottom:10}} 
                  placeholder='http://192.168.1.6:3001/' 
                  autoCorrect={false}
                  onChangeText={(URL) => this.setState({URL})}
                  />
              <TextInput 
                  style={{fontSize: 40, paddingBottom:10}} 
                  placeholder='Username' 
                  autoCorrect={false}
                  onChangeText={(username) => this.setState({username})}
                  />
              <TextInput 
                  style={{fontSize: 40, paddingBottom:10}} 
                  placeholder='Password' 
                  autoCorrect={false} 
                  secureTextEntry ={true}
                  onChangeText={(password) => this.setState({password})}
                  />
              <View style={{margin:7}} />
              <Button
                  onPress={this._signInAsync}
                  title="Submit" 
                  />
              <View style={{margin:7}} />                  
              <Button
                  onPress={this._signUp}
                  title="Sign Up" 
                  />
          </ScrollView>
        </View>
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator animating ={this.state.loading} size={100} color='white' />
        </View>
      </View>
    );
  }

  _signInAsync = async () => {
    this.setState({loading:true});

    // var params = {
    //     username: this.state.username,
    //     password: this.state.password,
    // };

    // var formBody = [];
    // for (var property in params) {
    //     var encodedKey = encodeURIComponent(property);
    //     var encodedValue = encodeURIComponent(params[property]);
    //     formBody.push(encodedKey + "=" + encodedValue);
    // }
    // formBody = formBody.join("&");

    // var proceed = false;
    // fetch(`${this.state.URL}` + API + USER + LOGIN, {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: formBody
    //         })
    //         .then((response) => {
    //           console.log(response.json())
    //           console.log(response.json().msg)
    //             if (response.status === 200){
    //               proceed = true;
    //               this.setState({ token: response.token })
    //             }
    //             else this.setState({ message: response.msg });
    //         })
    //         .then(() => {
    //           this.setState({ loading: false })
    //           if (proceed){
    //             AsyncStorage.setItem('userToken', `${this.state.token}`);
    //             this.props.navigation.navigate('App');
    //           }else{
    //             Alert.alert(this.state.message);
    //             // Alert.alert('Incorect username/password');
    //           }
    //         })
    //         .catch(err => {
    //           this.setState({ message: err.message });
    //           this.setState({ loading: false })
    //           Alert.alert(this.state.message);
    //   });

    axios.post(`${this.state.URL}` + API + USER + LOGIN, {
      username: `${this.state.username}`,
      password: `${this.state.password}`,
    }).then((response) => {
      this.setState({loading:false})
      if(response.data.success){
        AsyncStorage.setItem('userToken', `${response.data.token}`);
        this.props.navigation.navigate('App');
      }else{
        Alert.alert('Incorect username/password');
      }
    }).catch((error) => {
      this.setState({loading:false})
      Alert.alert('Incorect username/password');
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});