import {View, Text, StyleSheet, Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'
// https://www.npmjs.com/package/react-native-swiper
// npm i --save react-native-swiper@next


const { height } = Dimensions.get("window")

const PlacesSlider= () => {
  return (
  <>
    <View style={styles.sliderContainer}>
      <Swiper 
          height={270}
          width={400}
          style={styles.wrapper} 
          showsButtons={false} 
          autoplay={true}
          autoplayTimeout={5}
          index={0}
          dotColor={"white"}
          activeDotColor={"#eb3d34"}
        >
      <View style={styles.slide}>
            <Text style={styles.titleText}>Antoni</Text>
            <Text style={styles.text}></Text>
        </View>
        <View style={styles.slide}>
            <Text style={styles.titleText}>Mount</Text>
            <Text style={styles.text}></Text>
        </View>
        <View style={styles.slide}>
            <Text style={styles.titleText}>Tapas</Text>
            <Text style={styles.text}></Text>
        </View>
        <View style={styles.slide}>
            <Text style={styles.titleText}>The</Text>
            <Text style={styles.text}></Text>
        </View>

      </Swiper>
      </View>
  </>
  )
}

export default PlacesSlider

const styles = StyleSheet.create({
    sliderContainer: {
        justifyContent: 'center',
        alignItems: "center",
        textAlign: "center",
        elevation: 3.3,
        backgroundColor: "fff",
      
        borderRadius: 46,
        flex: 1,
        marginTop: 50,
        margin: 20,
      },
      background1: {
        opacity: .8,
        height: 220,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 20,
      },
      background2: {
        opacity: .8,
        height: 250,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 20,
      },
      background3: {
        opacity: .8,
        height: 180,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 20,
      },
      background4: {
        opacity: .8,
        height: 200,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 20,
      },
      wrapper: {
        opacity: .9,
        height: 400,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 20,
        },
      slide:{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          elevation: 3.3,
          backgroundColor: "fff",
          width: 150,
          height: 150,
          borderRadius: 46,
          flex: 1,
          marginTop: 0,
          margin: 0,
        },
      slide2:{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
      slide3:{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
      slide4:{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
      titleText: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        },
      text: {
          color: "black",
          fontSize: 20,
          fontWeight: "semi-bold",
          textAlign: "center",
        },
})