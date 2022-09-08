import { Pressable, Text, StyleSheet, View } from 'react-native'

function Button({onPress, children}) {
  return (
    <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        marginVertical: 20,
        marginHorizontal: 100,
        margin: 18,
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: "#f73e34",
        elevation: 2,
        shadowColor: "black",
        shadowOpacity: 0.15,
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 2,
        borderRadius: 10,
        borderWidth: 1.2,
        borderColor: "#c23129",
    },
    pressed: {
        opacity: 0.7
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: "white"
    }
})