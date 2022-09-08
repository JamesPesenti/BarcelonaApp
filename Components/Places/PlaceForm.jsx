import { useState, useCallback } from "react"
import { Alert, View, Text, TextInput, ScrollView, StyleSheet} from 'react-native'
import { Colors } from "../../constants/colors"
import ImagePicker from "../Places/ImagePicker"
import LocationPicker from "../Places/LocationPicker"
import Button from "../UI/Button"
import { Place } from "../../Models/place"

function PlaceForm({onCreatePlace}) {
    // registers key strokes in input form
    const [enteredTitle, setEnteredTitle] = useState("")
    const [pickedLocation, setPickedLocation] = useState()
    const [selectedImage, setSelectedImage] = useState()

    function changeTitleHandler(enteredText) {
        setEnteredTitle(enteredText)
    }

    function takeImageHandler({imageUri}) {
        setSelectedImage(imageUri)
    }

    const pickLocationHandler = useCallback((location) => {
        setPickedLocation(location)
        }, [])

    function savePlaceHandler() {
        const placeData = new Place(enteredTitle, selectedImage, pickedLocation)
        onCreatePlace(placeData)
    }
    
  return (
    <ScrollView >
        <View style={styles.form}>
            <Text style={styles.label}>Name Of Place</Text>
            <TextInput 
                style={styles.input}
                onChangeText={changeTitleHandler} 
                value={enteredTitle}
            />
        </View>
        <ImagePicker onTakeImage={takeImageHandler}  />
        <LocationPicker onPickLocation={pickLocationHandler}  />
        <Button onPress={savePlaceHandler} >Add Place</Button>
    </ScrollView>
  )
}

export default PlaceForm

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24,
        // backgroundColor: "green",
    },
    label: {
        fontWeight: "bold",
        marginBottom: 4,
        color: Colors.primary500,
        textAlign: "center",
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary400,
        borderBottomWidth: 2
    },
})
