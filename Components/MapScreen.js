import React from 'react';
import { ActivityIndicator, AsyncStorage, Button, StatusBar, StyleSheet, View} from 'react-native';
import { Marker, MapView } from 'expo';

export default class Map extends React.Component {
   constructor(props) {
    super(props);
    this.state={
      markers:[{
        coordinate:{
          latitude: 40.8197255,
          longitude: -73.9501939,
        },
        title:"marker.title",
        description:"marker.description",
      }]
    };
  }
  static navigationOptions = {
    title: 'Lots of features here',
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ flex: 1, left:'10%', right:'10%', top:0, bottom:0, position:'absolute'}}
          initialRegion={{
            latitude: 40.8197255,
            longitude: -73.9501939,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
          }}>
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
            />
          ))}

        </MapView>
      </View>




      //<View style={styles.container}> 
      //  <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
      //  <StatusBar barStyle="default" />
      //</View>
    );
  }
  // <MapView.Marker
  //             coordinate={{
  //               latitude: 40.8197255,
  //               longitude: -73.9501939,
  //             }}
  //             title={"marker.title"}
  //             description={"marker.description"}
  //           />

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