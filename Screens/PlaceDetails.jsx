import {ScrollView, StyleSheet, Image, Text, View} from 'react-native'
import { useEffect, useState } from 'react'
import OutlinedButton from "../Components/UI/OutlinedButton"

function PlaceDetails({route, navigation}) {
  const [fetched , setFetchedPlace] = useState()

  function showOnMapHandler() {
    navigation.navigate("Map", {
      initialLat: fetchedPlace.location.lat,
      initilaLng: fetchedPlace.location.lng,
    })
  }

  const selectedPlaceId = route.params.placeId;

  // use selectedPlaceId to fetch data for a place
  useEffect(() => {
    async function loadPlaceData() {
      const place = await fetchPlaceDetails(selectedPlaceId);
      setFetchedPlace(place)
      navigation.setOptions({
        title: place.title,

      });
    }

    loadPlaceData();
  }, [selectedPlaceId])

  if (!fetchedPlace) {
    return (
      <View style={styles.fallback}>
        <Text>Loading place data..</Text>
      </View>
    )
  }
 
  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: fetchedPlace.imageUri}} />
      <View style={styles.locationContainer}>
          <View style={styles.addressContainer}>
            <Text style={styles.address}>{fetchedPlace.address}</Text>
          </View>
          <OutlinedButton icon="map" onPress={showOnMapHandler}>View on map</OutlinedButton>
      </View>
    </ScrollView>
  )
}

export default PlaceDetails

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
})