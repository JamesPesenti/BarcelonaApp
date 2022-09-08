import { useState, useCallback, useLayoutEffect } from "react"
import { StyleSheet, Pressable, Alert } from 'react-native'
import MapView, { Marker }  from 'react-native-maps';
import { Navigation } from "@react-navigation/native"

import IconButton from "../Components/UI/IconButton"



function Map({navigation, route}) {
  const initialLocation = route.params && {
    lat: route.params.initialLat,
    lng: route.params.initialLng,
 };


  const [selectedLocation, setSelectedLocation] = useState(initialLocation)

  const region = {
    latitude: initialLocation ? initialLocation.lat : 41.3874,
    longitude: initialLocation ? initialLocation.lng : 2.1686,
    latitudeDelta: 0.1022,
    longitudeDelta: 0.1021,
  }

function selectLocationHandler(event) {
  if(initialLocation) {
    return;
  }

  const lat = event.nativeEvent.coordinate.latitude
  const lng = event.nativeEvent.coordinate.longitude

  setSelectedLocation({ lat: lat, lng: lng })
}

const savePickedLocationHandler = useCallback(() => {
  if (!selectedLocation) {
    Alert.alert("No location picked", "Tap on the map to pick location");
    return;
  }

  navigation.navigate("AddPlace", { 
    pickedLat: selectedLocation.lat, 
    pickedLng: selectedLocation.lng,
  })
}, [navigation, selectedLocation])

useLayoutEffect(() => {
  if (initialLocation) {
    return;
  }
  navigation.setOptions({
    headerRight: ({tintColor}) => <IconButton 
      icon="add"
      size={24}
      color={tintColor}
      onPress={savePickedLocationHandler}
    />
    
  })
}, [navigation, savePickedLocationHandler, initialLocation])

  return (
    <Pressable style={styles.map}>
    <MapView 
      initialRegion={region} 
      style={styles.map}
      onPress={selectLocationHandler}
    >
    {selectedLocation && (
      <Marker 
        title="Picked Location"
        coordinate={{
          latitude: selectedLocation.lat,
          longitude: selectedLocation.lng,
        }}
      />
    )}
    </MapView>
    </Pressable>
  )
}

export default Map

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
})