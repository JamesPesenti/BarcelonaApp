import { Pressable, StyleSheet, Image } from 'react-native'

function IconButton({onPress}) {
  return (
    <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
        <Image
          style={styles.spainButton}
          source={{uri:("https://as2.ftcdn.net/v2/jpg/00/45/32/67/1000_F_45326776_V2rlczNhQGTCYPgPQywDjJoLJ2zrErra.jpg")}}
        />
    </Pressable>
  )
}

export default IconButton


const styles = StyleSheet.create({
  button: {
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: .7
  },
  spainButton: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: "transparent"
  },
})

