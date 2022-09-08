import { useState } from "react"
import { ScrollView, View, Text, Modal, StyleSheet, Pressable, Image, ImageBackground, Dimensions} from 'react-native'


const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const MontjuïcModal = ({ item, id}) => {
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
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri: ("https://www.barcelona-life.com/wp-content/uploads/2018/03/magic-fountain-show-tour.jpg")}} />
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://builder.livingtours.com/public/images/produtos/20191108121614-lNw243SK.jpg")}} />
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://d1bv4heaa2n05k.cloudfront.net/user-images/1533808898028/shutterstock-224752105_destinationMain_1533808916423.jpeg")}} />
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://irbarcelona.org/wp-content/uploads/2012/08/patio-castillomontjuic2.jpg")}} />
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://aws-tiqets-cdn.imgix.net/images/content/c53efb6c93ce4d7d96cc4b327de1f2c5.jpg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=28198e1bb892352e4fa3d7457e5962c9")}} />
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://mamaquefemdema.com/wp-content/uploads/2016/07/castellmontjuic06.jpg")}} />
                    </ScrollView>
                    <View style={{margin: -5, paddingBottom: 20}}>
                        <Text style={styles.modalTitleText}>Montjuïc</Text>
                        <Text style={styles.modalText}>Tibidabo is the highest mountain in Serra de Collserola, standing at 512 meters in total height. It is a breathtaking site from which you can admire 360-views and the entire city of Barcelona straight out to the sea. Tibidabo also has the oldest amusement park in all Spain and one of the oldest in the world, officially opened in 1901.</Text>

                                <Image style={{flexDirection: "row", width: width, height: 260, borderRadius: 10, marginTop: 5, margin: 5}} source={{uri:("https://www.google.com/maps/vt/data=cT7_HeKUYwJ9dyLVMfa9yH9PSFGlmOASndagi3_QczQX_q1KZzQ9WAwS8Lpkv__Z2SaG9THzsnsNKWR5cCNL3EA8EerslyVSNWaXZoOymDrClEu5YA5B_unGAdiDTSidUnRcF71GnSInt2ov0aRU7vFZB3GQdbZGHViFbCEPCfyCxjWqCFYm")}} />
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
              <Text style={{borderWidth: 1, borderColor: 'white', marginHorizontal: 90, letterSpacing: 1, fontWeight: "bold", fontSize: 18, color: 'white', marginTop: 80, textAlign: 'center'}}>Montjuïc</Text>
          </View>
        </Pressable>
    </View>
    </ScrollView>
    </>
  )
}

export default MontjuïcModal


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