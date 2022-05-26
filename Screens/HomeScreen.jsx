import { Text, View, StyleSheet, ScrollView, ImageBackground, Dimensions } from 'react-native'


const width = Dimensions.get("window").width
const height = Dimensions.get("window").height


function HomeScreen() {
  return (
    <ScrollView>
        <ImageBackground
            style={styles.background}
            source={{uri:("https://media.istockphoto.com/photos/low-angle-view-of-casa-batllo-building-architecture-by-antoni-gaudi-picture-id1340655933?k=20&m=1340655933&s=612x612&w=0&h=NGaBQ311AotH6qgb-bxZ42C8w5TKjTkjBW4i3m6gvYQ=")}}
        >
            <Text>Welcome to Barcelona</Text>
        </ImageBackground>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    background: {
        opacity: .3,
        width: width,
        height: height
    }
})