import { useState } from "react"
import { ScrollView, View, Text, Modal, StyleSheet, Pressable, TouchableOpacity, Image, ImageBackground, Dimensions} from 'react-native'


const width = Dimensions.get("window").width
const height = Dimensions.get("window").height



const BatlloPedreraModal = ({ id }) => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
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
            ><ScrollView>
                  <View style={styles.openView}>
                        <View style={styles.modalView}>
                        <ScrollView style={{marginTop: 10, paddingBottom: -100}} horizontal={true} showsHorizontalScrollIndicator={false}>
                          <Image style={{flexDirection: "row", width: 180, height: 250, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri: ("https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRjdSTnddsIYFXaYAS_7i-Hu9Ecg1TYyBGagYgTgEhUs1AEhZ3zVgZ-y2oTgvaIUWLRCCASB28KPU5oaWBBKpDwxQ")}} />
                          <Image style={{flexDirection: "row", width: 180, height: 250, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://cdn.barcelona-top-travel-tips.com/wp-content/uploads/sites/3/2016/11/pedrera-fachada.jpg")}} />
                          <Image style={{flexDirection: "row", width: 180, height: 250, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://cdn.casabatllo.es/wp-content/uploads/2022/02/planta-noble.jpg")}} />
                          <Image style={{flexDirection: "row", width: 180, height: 250, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://i.pinimg.com/originals/0a/2a/ff/0a2aff9e3930bbc6e6cc959a1d17638e.jpg")}} />
                          <Image style={{flexDirection: "row", width: 180, height: 250, borderRadius: 30, marginTop: 5, margin: 5,}} source={{uri:("https://c8.alamy.com/comp/DE1B27/spain-barcelona-interior-architecture-of-casa-batllo-DE1B27.jpg")}} />
                          <Image style={{flexDirection: "row", width: 180, height: 250, borderRadius: 30, marginTop: 5, margin: 5,}} source={{uri:("https://elviajedesofi.s3.eu-west-3.amazonaws.com/wp-content/uploads/2020/08/14172702/Barcelona297.jpeg")}} />
                          <Image style={{flexDirection: "row", width: 180, height: 250, borderRadius: 30, marginTop: 5, margin: 5,}} source={{uri:("https://divisare-res.cloudinary.com/images/c_limit,f_auto,h_2000,q_auto,w_3000/v1474876824/vovhbjaybdrirnrrajsr/antoni-gaudi-david-cardelus-casa-batllo.jpg")}} />
                        </ScrollView>
                        <View style={{margin: -5, paddingBottom: 20}}></View>
                           <Text style={styles.modalTitleText}>Casa Batllo + La Pedrera</Text>
                            <Text style={styles.modalText}>Casa Batllo was a regular home that was redesigned in 1904 by Antoni Gaudí. Located on the Passeig de Gràcia in the Eixample district, it joins a row of buildings known as the Illa de la Discòrdia, which consists of four buildings constructed by different notable Modernista architects of Barcelona. Casa Mila, popularly known as La Pedrera or "The stone quarry", a reference to its unconventional rough-hewn appearance, was the last private residence designed by Antoni Gaudi and was built between 1906-1912</Text>
                            <Text style={styles.modalText}></Text>
                            <Text style={styles.modalText}> Pg. de Gràcia, 92, 08008 Barcelona, Spain</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
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
                      style={{marginTop: 0, width: 75, height: 75, backgroundColor: "transparent", borderColor: "white", borderWidth: 1, borderRadius: 50   }}
                      source={{uri: "https://img.icons8.com/fluency/240/casa-batllo.png"}}
                  />
              </View>
            {/* </ImageBackground> */}
        </TouchableOpacity>
      </View>
    </>
  )
}

export default BatlloPedreraModal



const styles = StyleSheet.create({
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
    height: 650,
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