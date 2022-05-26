import { useState } from "react"
import { View, Text, TextInput, ScrollView, StyleSheet} from 'react-native'
import { Colors } from "../../constants/colors"


function PlaceForm() {
    // registers key strokes in input form
    const [enteredTitle, setEnteredTitle] = useState("")

    function changeTitleHandler(enteredText) {
        setEnteredTitle(enteredText)
    }
  return (
    <ScrollView >
        <View style={styles.form}>
            <Text style={styles.label}>Name Of Place</Text>
            <TextInput 
                style={styles.input}
                onChange={changeTitleHandler} 
                value={enteredTitle}
            />
        </View>
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
