import { useState } from "react"
import { ScrollView, View, Text, Modal, StyleSheet, Pressable, Image, ImageBackground, Dimensions} from 'react-native'


const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const GràciaModal = ({ item, id }) => {
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
                    <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://i.pinimg.com/originals/4e/ef/6d/4eef6d604e80c9b5306918058fb709ab.jpg")}} />
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri: ("https://www.barcelona-tourist-guide.com/images/int/streets/passeig-de-gracia/L550/passeig-de-gracia-barcelona-7520.jpg")}} />
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://www.alting.com/wp-content/uploads/2020/04/Hotel-Passeig-de-gracia-29-31-4.jpg")}} />
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/239939993.jpg?k=c6dbbb4e9c2aeaa690b60be64ea8bd74f1bd566c292df8e2c39dda652f8a65fd&o=")}} />
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://www.ilmex.com/pics_fotosproductos/10/big_crop_barcelona-4.jpg")}} />
                    </ScrollView>
                    <View style={{margin: -5, paddingBottom: 20}}>
                        <Text style={styles.modalTitleText}>Passeig de Gràcia</Text>
                        <Text style={styles.modalText}>Passeig de Gràcia is the pride of the city. It is dotted with impressive 'modernist' buildings, glamorous shops and up-market restaurants - the Champs Elysee of Spain.</Text>

                                <Image style={{flexDirection: "row", width: width, height: 220, borderRadius: 10, marginTop: 5, margin: 5}} source={{uri:("https://www.google.com/maps/vt/data=kaN28U55-5EFxsxmZJdMyU_zXjULKLcHVuBA02XaJflqsMnS_w1PSNOJk_YKM45g39pcSjtZQuseUlxgW_E_ojjOdtOYz9d3FlgjZSYX5rzyNDXiGdRE0Z-UGrLdKBZQopGHfp4NsHtjyeSPh-U3lr4M5bTHfH7xy71BLVhZrWXGV-V25SybbHHZzBNuciTdONI")}} />
                                    <Text style={styles.modalText}>Getting to Passeig de Gràcia</Text>
                                    <Text style={styles.modalText}>Only about a 2 minute walk from Placa de Catalunya</Text>
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
              <Text style={{borderWidth: 1, borderColor: 'white', marginHorizontal: 90, letterSpacing: 1, fontWeight: "bold", fontSize: 18, color: 'white', marginTop: 80, textAlign: 'center'}}>Passeig de Gràcia</Text>
          </View>
        </Pressable>
    </View>
    </ScrollView>
    </>
  )
}

export default GràciaModal


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
  height: 840,
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