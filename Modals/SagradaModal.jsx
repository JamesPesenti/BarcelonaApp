import { useState } from "react"
import { ScrollView, TouchableOpacity, View, Text, Modal, StyleSheet, Pressable, Image, ImageBackground, Dimensions} from 'react-native'



const width = Dimensions.get("window").width
const height = Dimensions.get("window").height


const SagradaModal = ({ item, id }) => {
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
                      <Image style={{flexDirection: "row", width: 180, height: 230, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri: ("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTld7FNNEiDSUEEM_OlU1m7kwKFOZ4wmRxfwL9oCeAp5CWypMHk7_NSYuVqKHSbvNXrBg2Q2noW_Gppor4CnEOirQ")}} />
                      <Image style={{flexDirection: "row", width: 180, height: 230, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("http://cdn.cnn.com/cnnnext/dam/assets/201112110433-01-sagrada-familia.jpg")}} />
                      <Image style={{flexDirection: "row", width: 180, height: 230, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://pbs.twimg.com/media/EJEmJWmWoAEkeg4.jpg")}} />
                      <Image style={{flexDirection: "row", width: 180, height: 230, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("http://blog.mozaico.com/wp-content/uploads/2017/02/b48239689f32b3ed3c63d24300d49376.jpg")}} />
                      <Image style={{flexDirection: "row", width: 180, height: 230, borderRadius: 30, marginTop: 5, margin: 5,}} source={{uri:("https://aws-tiqets-cdn.imgix.net/images/content/2f7c2e53b0a4457f89de979c90265f65.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=70&s=6b364baf8ad2e6ac0cdc19d93ec74987")}} />
                    </ScrollView>
                    <View style={{margin: -5, paddingBottom: 20}}>
                        <Text style={styles.modalTitleText}>Sagrada Familia</Text>
                        <Text style={styles.modalText}>The Sagrada Família, an unfinished minor basilica in the Eixample district of Barcelona Spain. It is currently the largest unfinished Roman Catholic church and UNESCO World Heritage Site. Designed by Catalan architect Antoni Gaudí, he combined Gothic and curvilinear Art Nouveau forms. Gaudí devoted the remainder of his life to the project, and he is buried in the crypt. At the time of his death in 1926, less than a quarter of the project was complete. Relying solely on private donations, the Sagrada Família's construction progressed slowly and was interrupted by the Spanish Civil War</Text>
                        <Text style={styles.modalText}>C/ de Mallorca, 401, 08013 Barcelona, Spain</Text>
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

        <TouchableOpacity
            style={styles.gaudi}
            onPress={() => setModalVisible(true)}>
          <View>
              <Text style={styles.textStyle}></Text>
              <Image 
                  style={{ flex: 1, opacity: 1, marginTop: 0, width: 75, height: 76, justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent", borderColor: "white", borderWidth: 1, borderRadius: 50  }}
                  source={{uri: "https://cdn-icons-png.flaticon.com/512/1046/1046191.png"}}
                 
              />
          </View>
        </TouchableOpacity>
    </View>
    </ScrollView>
    </>
  )
}

export default SagradaModal

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
  height: height,
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
  opacity: 1, 
  borderRadius: 10,
  padding: 2,

  marginBottom: 60,
  marginLeft: 0,
  marginVertical: 20,
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