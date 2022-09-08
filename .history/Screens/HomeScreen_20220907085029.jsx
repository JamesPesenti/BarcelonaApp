import { Text, View, StyleSheet, ScrollView, ImageBackground, Pressable, Dimensions } from 'react-native'
import InfoSlider from "../Components/InfoSlider"
import SpainIcon from "../Components/UI/SpainIcon"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

function HomeScreen({navigation}) {

  return (
    <>
        <ScrollView> 
        <ImageBackground
            style={styles.background}
            source={{uri:("https://img.freepik.com/premium-vector/barcelona-city-travel-tourism_185417-46.jpg?w=2000")}}
        >
        </ImageBackground>
            <Text style={styles.bigText}>Explore this beautiful Mediterranean city in the heart of Catalonia Spain!</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{flex: 1, opacity: .8, marginVertical: 60}} >
                        <InfoSlider
                            navigation={navigation}
                        />
                </ScrollView>
                <Text style={styles.heartText}>Press the heart button above to keep track of and save all of your favorite Barcelona restaurants, sights, and pictures!</Text>
                <Pressable
                    onPress={() => navigation.navigate("AllPlaces")}
                >
                     <SpainIcon 
                       imageStyle={{height: "100%", width: "100%"}}
                     />
                </Pressable>
        </ScrollView>
</>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    background: {
        opacity: 1,
        flex: 1,
        resizeMode: "contain",
        width: width,
        height: 290,
    },
    bigText: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        padding: 40
    },
    heartText: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        padding: 15
    },
    
    
})