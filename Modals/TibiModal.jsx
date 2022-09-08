import { useState } from "react"
import { ScrollView, View, Text, Modal, StyleSheet, Pressable, Image, ImageBackground, Dimensions} from 'react-native'


const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const TibiModal = ({ item, id, navigation }) => {
    const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
    <ScrollView>
       <View style={styles.centeredView}>
        <Modal 
            key={id}
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }} 
        >
            <ScrollView>
              <View style={styles.openView}>
                    <View style={styles.modalView}>
                    <ScrollView style={{marginTop: 10, paddingBottom: -100}} horizontal={true} showsHorizontalScrollIndicator={false}>
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri: ("https://lh4.googleusercontent.com/cmtAUoyvc4f0ObiTZe992o9AQSF4JqfhNT1_Af0g99SS7qJYLhPeZEN6U7Lg9nr_B3lDGUlc5FnbLivaBkCYNlhRsIhn8jBVpA0hfbVR0itzcH0Zo_cenvTIWsKN_m3dWg2ZpLxB")}} />
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/94/21/e0/parc-d-atraccions-tibidabo.jpg?w=1200&h=-1&s=1")}} />
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://lh5.googleusercontent.com/NIoFXYPgQg6ezhtEtYSAVuS-Dl9AZuE-N91wJkpS61r-WSPjYJznez3p0a4aq2snkbywE_ieqplIBwZTp8dCJ_gmDbTq3n2SjZpKsa86-2tUopeAW4sOqAS3TpIHuG6tKCFF5DNr")}} />
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://www.trenscat.com/funis/images/tibidabo/mjP210612138.jpg")}} />
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://upload.wikimedia.org/wikipedia/commons/a/ac/Mirador_del_Tibidabo.jpg")}} />
                    </ScrollView>
                    <View style={{margin: -5, paddingBottom: 20}}>
                        <Text style={styles.modalTitleText}>Mount Tibidabo</Text>
                        <Text style={styles.modalText}>Tibidabo is the highest mountain in Serra de Collserola, standing at 512 meters in total height. It is a breathtaking site from which you can admire 360-views and the entire city of Barcelona straight out to the sea. Tibidabo also has the oldest amusement park in all Spain and one of the oldest in the world, officially opened in 1901.</Text>

                                <Image style={{flexDirection: "row", width: width, height: 260, borderRadius: 10, marginTop: 5, margin: 5}} source={{uri:("https://www.google.com/maps/vt/data=OOL9e3QpSFuAmHqOXWnPQv3oJDh-KTatEVN1vO9LXp_qgEFUjJ5kH7ZGa42J3AJFjhWWkYD4ns7f2by1YaD8Upy6pNi1l9XUNplGEcS66fNHeYeK6FTxrWQiitgy0MR0AK5oMkmtsJ7Rmtt1c41RUIPP4yQvVAuL5ngQ0G9Osy2WcBm4b8yT")}} />
                                    <Text style={styles.modalText}>Getting to Tibidabo</Text>
                                    <Text style={styles.modalText}>About 40 mins from Placa de Catalunya taking the metro and funicular </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                  </View>
                </View>
            </ScrollView>
        </Modal>

        <Pressable
            style={styles.gaudi}
            onPress={() => setModalVisible(true)}>
          <View>
              <Text style={{borderWidth: 1, borderColor: 'white', marginHorizontal: 90, letterSpacing: 1, fontWeight: "bold", fontSize: 18, color: 'white', marginTop: 80, textAlign: 'center'}}>Mount Tibidabo</Text>
          </View>
        </Pressable>
    </View>
    </ScrollView>
    </>
  )
}

export default TibiModal


const styles = StyleSheet.create({
 // modal display position on screen
 centeredView: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 5,
  marginLeft: 5,
  marginTop: 20,
},
// view when you open modal
modalView: {
  justifyContent: "center",
  backgroundColor: "#fff",
  width: width,
  height: 890,
  borderRadius: 45,
  paddingTop: 10,
  marginBottom: 0,
  elevation: 3.3,
  overflow: "visible"
},
openView: {
  backgroundColor: "transparent",
},
imageBackground: {
  opacity: 1,
  flex: 1,
  resizeMode: "cover",
  width: 100,
  height: 100,
},
 //   gaudi card
gaudi: {
  width: width,
  height: height,
  backgroundColor: "trasparent",
},
button: {
  borderRadius: 15,
  padding: 15,
  elevation: 2,
  marginVertical: 0,
  marginHorizontal: 70,
  backgroundColor: "white",
  
},
buttonClose: {
  backgroundColor: "white",
  margin: 0
},
textStyle: {
  color: "black",
  textAlign: "center",
},
modalTitleText: {
  fontSize: 20,
  textAlign: "center",
},
modalText: {
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  marginBottom: 10,
  marginTop: 15
},
})