import { View, Text, StyleSheet } from 'react-native'

const Card = () => {
  return (
    <View styles={styles.card}>
        <Text>Card hdhdhdhdh</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
      opacity: .3,
      backgroundColor: "#e8fff4",
      width: "100%",
      height: "100%",
      color: "yellow",
      borderRadius: 15,
      padding: 10,
      margin: 40,
      elevation: .3
    }
})