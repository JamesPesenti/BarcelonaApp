import { Pressable, Button, Text, View, StyleSheet} from 'react-native'
import { Ionicons } from "@expo/vector-icons"

 
function OutlinedButton({onPress, icon, children}) {
  return (
    <>
        <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
            <Ionicons style={styles.icon} name={icon} size={22} color={"#f73e34"}/>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    </>
  )
}

export default OutlinedButton

const styles= StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 100,
        margin: 18,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1.2,
        borderColor: "red",
        borderRadius: 8,
        backgroundColor: "#f2a094"
    },
    pressed: {
        opacity: 0.6
    },
    icon: {
        marginRight: 6
    },
    text: {
        color: "white"
    },
})