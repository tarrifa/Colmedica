import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const ITEM_WIDTH = Dimensions.get("window").width;
const ITEM_HEIGHT = Dimensions.get("window").height;

const Map = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }
  
      let watchId = await Location.watchPositionAsync({accuracy: Location.Accuracy.High,
        distanceInterval: 2,
        timeInterval: 3000 }, (location) => {
        setLocation(location);
      });

      return () => {
        Location.clearWatch(watchId);
      }
    })();
  }, []);

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  if (!location) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <MapView style={{width:ITEM_WIDTH, height:ITEM_HEIGHT}}
       initialRegion={{
         latitude: location.coords.latitude,
         longitude: location.coords.longitude,
         latitudeDelta: 0.005,
         longitudeDelta: 0.005,
       }}
     >
       
     <Marker
        coordinate={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }}
        />
     </MapView>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({})