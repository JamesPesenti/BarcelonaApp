import { useState } from "react"
import { ScrollView, TouchableOpacity, View, Text, Modal, StyleSheet, Pressable, Image, ImageBackground, Dimensions} from 'react-native'



const width = Dimensions.get("window").width
const height = Dimensions.get("window").height


const ParcGuellModal = ({ item, id }) => {
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
                      <Image style={{flexDirection: "row", width: 180, height: 250, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri: ("https://images.adsttc.com/media/images/510c/5369/b3fc/4b7d/0100/0074/slideshow/antoni-gaudi-spain-barcelona-Parc-Guell-05-samuel-ludwig.jpg?1414599916")}} />
                      <Image style={{flexDirection: "row", width: 180, height: 250, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSEdJA5gyn_jt9gwcgs1Aj-CunkXtK_u1EFkMbKD72H6USPSRtW_r-6uwdqHhc-WsoWjV_0HNkA2Z2F1AeN2GdJWQ")}} />
                      <Image style={{flexDirection: "row", width: 180, height: 250, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://cdn2.veltra.com/ptr/20171003033606_987273174_2627_0.jpg")}} />
                      <Image style={{flexDirection: "row", width: 180, height: 250, borderRadius: 30, marginTop: 5, margin: 5}} source={{uri:("https://blog.businesstripfriend.com//upload/usersfiles/images/2955800070_51b13c6960_o%281%29.jpg")}} />
                      <Image style={{flexDirection: "row", width: 180, height: 250, borderRadius: 30, marginTop: 5, margin: 5,}} source={{uri:("https://www.cataloniahotels.com/es/blog/wp-content/uploads/2017/02/escalinata-park-guell-min.jpg")}} />
                    </ScrollView>
                    <View style={{margin: -5, paddingBottom: 20}}></View>
                       <Text style={styles.modalTitleText}>Parc Güell</Text>
                        <Text style={styles.modalText}>is a privatized park system composed of gardens and architectural elements located on Carmel Hill, Barcelona. With urbanization in mind, Eusebi Güell assigned the design of the park to Antoni Gaudí, a renowned architect and the face of Catalan modernism. Opened in 1926, the park was declared a UNESCO World Heritage Site in 1984 under "Works of Antoni Gaudí"</Text>
                        <Text style={styles.modalText}>08024 Barcelona, Spain</Text>
                        <Text style={styles.modalText}></Text>
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
                  style={{flex: 1, opacity: 1, marginTop: 5, width: 75, height: 76, justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent", borderColor: "white", borderWidth: 1, borderRadius: 50  }}
                  source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/007/191/968/small_2x/parc-guell-landmark-icon-free-vector.jpg"}}
                  item={item}
              />
          </View>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </>
  )
}

export default ParcGuellModal

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