import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Button, Pressable } from 'react-native'
import Swiper from 'react-native-swiper'
// https://www.npmjs.com/package/react-native-swiper
// npm i --save react-native-swiper@next


const { height, width } = Dimensions.get("window")

const InfoSlider= ({ navigation }) => {
  return (
  <>
    <View style={styles.sliderContainer}>
    <Pressable
        onPress={() => navigation.navigate("GaudiScreen")}
    >
        <View style={styles.gaudiSlide}>
          <ImageBackground
            imageStyle={{  opacity: 1, resizeMode: "cover", borderRadius: 30}}
            style={{width: "105%", height: "105%"}}
            source={{uri:("https://i.pinimg.com/originals/71/da/7f/71da7fb660b69ef409d979e9aae74916.jpg")}}
            >
              <Text style={styles.text}>Antoni Gaudi Architecture</Text>
          </ImageBackground>
        </View>
    </Pressable>
    

    <Pressable
        onPress={() => navigation.navigate("FoodScreen")}
    >
      <View style={styles.slide2}>
        <ImageBackground
            imageStyle={{ opacity: 1, resizeMode: "cover", borderRadius: 30}}
            style={{width: "105%", height: "100%"}}
            source={{uri:("https://lp-cms-production.imgix.net/2022-04/GettyImages-1335878891.jpg?auto=format&q=40&ar=16%3A9&fit=crop&w=1446")}}
        >
            <Text style={styles.tapasText}>Tapas</Text>
        </ImageBackground>
      </View>
    </Pressable>

    <Pressable
        onPress={() => navigation.navigate("SightseeingScreen")}
    >
        <View style={styles.slide3}>
          <ImageBackground
            imageStyle={{ opacity: 1, resizeMode: "cover", borderRadius: 30}}
            style={{width: "105%", height: "105%"}}
            source={{uri:("https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2015/07/HandLuggageOnly-13-1.jpg?resize=1000%2C1500&ssl=1")}}
        >
            <Text style={styles.text}>Sightseeing</Text>
          </ImageBackground>
        </View>
    </Pressable>
        

      </View>
  </>
  )
}

export default InfoSlider

const styles = StyleSheet.create({
      sliderContainer: {
        flexDirection: "row",
        marginVertical: 0,
        
      },
      gaudiBackground: {
        blurRadius: 15,
        opacity: 1,
        flex: 1,
        resizeMode: "contain",
        width: width,
        height: 300,
        borderRadius: 40
      },
      gaudiSlide:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
        backgroundColor: "white",
        width: 180,
        height: 180,
        borderRadius: 26,
        flex: 1,
        marginTop: 50,
        margin: 20,
        },
      slide2:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2.5,
        backgroundColor: "fff",
        width: 180,
        height: 180,
        borderRadius: 26,
        flex: 1,
        marginTop: 50,
        margin: 20,
        },
      slide3:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        elevation: 3,
        backgroundColor: "fff",
        width: 180,
        height: 180,
        borderRadius: 26,
        flex: 1,
        marginTop: 50,
        margin: 20,
        },
      slide4:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        elevation: 3.6,
        backgroundColor: "fff",
        width: 180,
        height: 180,
        borderRadius: 26,
        flex: 1,
        marginTop: 50,
        margin: 20,
        },
      titleText: {
        marginBottom: 20,
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        },
      text: {
          opacity: 1,
          marginTop: 80,
          color: "white",
          backgroundColor: "transparent",
          borderRadius: 12,
          borderColor: "#d4d4d4",
          borderWidth: 2,
          marginHorizontal: 15,
          fontSize: 22,
          textAlign: "center",
        },
        tapasText: {
          opacity: 1,
          marginTop: 80,
          color: "white",
          backgroundColor: "transparent",
          borderRadius: 12,
          borderColor: "#d4d4d4",
          borderWidth: 2,
          marginHorizontal: 15,
          fontSize: 26,
          textAlign: "center",
        },

})