import { useState } from "react"
import { ScrollView, View, Text, Modal, StyleSheet, Pressable, Image, ImageBackground, Dimensions} from 'react-native'


const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const GothicModal = ({ item, id }) => {
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
                    <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://preview.redd.it/v9zq8ncsldt41.jpg?auto=webp&s=b4a5bc941fccdc9e414a7ba2d95ff567370d15bf")}} />
                    <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://pbs.twimg.com/media/EpReNWVXUAApRB8.jpg:large")}} />
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri: ("https://www.thegeographicalcure.com/wp-content/uploads/2021/10/img_615c5547d90ff.")}} />
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://www.barcelona-tourist-guide.com/images/int/attractions/cathedral/L/cathedral-8.jpg")}} />
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://i1.wp.com/www.photographyandtravel.com/wp-content/uploads/2017/07/3.1-Sunrise-024-Pano-Edit-Edit.jpg?fit=1024%2C874&ssl=1")}} />
                      <Image style={{flexDirection: "row", width: 270, height: 260, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://www.thegeographicalcure.com/wp-content/uploads/2021/10/img_615c554880631.")}} />
                    </ScrollView>
                    <View style={{margin: -5, paddingBottom: 20}}>
                        <Text style={styles.modalTitleText}>Gothic Quarter</Text>
                        <Text style={styles.modalText}>The Gothic Quarter is Barcelona’s birthplace. It used to be the Roman village of Barcino and was enclosed within protective walls until the 1850s. Later, the Gothic Quarter was an enclave frequented by artists like Picasso, Dali, Miro, and Antoni Gaudi.</Text>

                                <Image style={{flexDirection: "row", width: width, height: 220, borderRadius: 10, marginTop: 5, margin: 5}} source={{uri:("https://www.google.com/maps/vt/data=luNxkc9k0A-DKZC0oevHUu7uY7ALXY6MkUIuoAXaoycMBVrpD3U9TvyThoNJoo6c8W7hV76hI_L1OcyhbY7IHsWblDYcCDF-L5JgC28qmdgEH6-0J52KVS0DhwiZxS6aB157iOo23aRkbDN6di9RmYXMocvDiDHZ4Ym9ojmf3gEFTCHEq46uh9Taiy2mE25qMTs")}} />
                                    <Text style={styles.modalText}>Getting to the Gothic Quarter</Text>
                                    <Text style={styles.modalText}>located between La Rambla and the Via Laietana. You can get there via Metro Line 3 Liceu station or Metro Line 4 Jaume I Station.</Text>
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
              <Text style={{borderWidth: 1, borderColor: 'white', marginHorizontal: 90, letterSpacing: 1, fontWeight: "bold", fontSize: 18, color: 'white', marginTop: 80, textAlign: 'center'}}>Gothic Quarter</Text>
          </View>
        </Pressable>
    </View>
    </ScrollView>
    </>
  )
}

export default GothicModal


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