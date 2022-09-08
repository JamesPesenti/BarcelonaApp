import { ScrollView, Text, View, Image, ImageBackground, StyleSheet, Pressable } from 'react-native'
import TibiModal from "../Modals/TibiModal"
import MontjuïcModal from "../Modals/MontjuïcModal"
import GràciaModal from "../Modals/GràciaModal"
import GothicModal from "../Modals/GothicModal"

const SightseeingScreen = ({navigation}) => {
  return (
    <>
    <ScrollView>

    <View style={styles.container}>
    <Image 
      imageStyle={{justifyContent: "center", alignItems: "center"}}
      style={{width: 450, height: 150, justifyContent: 'center', alignItems: 'center', borderRadius: 0}} 
      source={{uri: ("https://lp-cms-production.imgix.net/features/2019/07/shutterstockRF_527535820-e36590ede3a3.jpg?auto=format&q=40&ar=16%3A9&fit=crop&w=1946")}}/>

    <View style={styles.TibiCard}>
          <ImageBackground
                source={{uri: "https://fascinatingspain.com/wp-content/uploads/principal_iglesia-del-Tibidabo_templo.jpg"}}
                imageStyle={{resizeMode: "stretch", marginBottom: 30}}
                style={{elevation: 3.3, width: "100%", height: "100%", opacity: 1, backgroundColor: "black", overflow: "hidden"}}
          >
            <TibiModal />
          </ImageBackground>
    </View>
    <View style={styles.MontjuïcCard}>
          <ImageBackground
                source={{uri: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Castell_de_Montjuic_-_Fossat_entrada_-_Barcelona_%28Catalonia%29.jpg"}}
                imageStyle={{resizeMode: "stretch", marginBottom: 30}}
                style={{elevation: 3.3, width: "100%", height: "100%", opacity: 1, backgroundColor: "black", overflow: "hidden"}}
          >
            <MontjuïcModal />
          </ImageBackground>
    </View>
    <View style={styles.GràciaCard}>
          <ImageBackground
                source={{uri: "https://a.cdn-hotels.com/gdcs/production186/d1887/09ec9b49-c9e9-4416-9441-f21b59735941.jpg"}}
                imageStyle={{resizeMode: "stretch", marginBottom: 80}}
                style={{elevation: 3.3, width: "100%", height: "100%", opacity: 1, backgroundColor: "black", overflow: "hidden"}}
          >
            <GràciaModal />
          </ImageBackground>
    </View>
    <View style={styles.GothicCard}>
          <ImageBackground
                source={{uri: "https://streetwise.world/stories/barcelona/img/2/Placa-Nova-in-Barcelona-by-evening.jpg"}}
                imageStyle={{resizeMode: "stretch", marginBottom: 80}}
                style={{elevation: 3.3, width: "100%", height: "100%", opacity: 1, backgroundColor: "black", overflow: "hidden"}}
          >
            <GothicModal />
          </ImageBackground>
    </View>
    </View>
    </ScrollView>
    </>
  )
}

export default SightseeingScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      marginVertical: 0,
      marginHorizontal: 40,

      // fdr lines cards up horizontally
      // flexDirection: "row",
  },
  TibiCard: {
      height: 180,
      width: 320,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: "white",
      overflow: "hidden",
      opacity: 1,
      textAlign: "center",
      paddingBottom: 0,
      marginVertical: 20,
      right: 20,
  },
  MontjuïcCard: {
    height: 180,
    width: 320,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "white",
    overflow: "hidden",
    opacity: 1,
    textAlign: "center",
    paddingBottom: 0,
    marginVertical: 20,
    left: 20
},
GràciaCard: {
  height: 180,
  width: 320,
  borderRadius: 20,
  borderWidth: 2,
  borderColor: "white",
  overflow: "hidden",
  opacity: 1,
  textAlign: "center",
  paddingBottom: 0,
  marginVertical: 20,
  right: 20
},
GothicCard: {
  height: 180,
  width: 320,
  borderRadius: 20,
  borderWidth: 2,
  borderColor: "white",
  overflow: "hidden",
  opacity: 1,
  textAlign: "center",
  paddingBottom: 0,
  marginVertical: 20,
  left: 20
},

  image: {
      backgroundColor: "white",
      borderRadius: 20,
      borderWidth: .5,
      borderColor: "white",
      marginTop: 10,
      marginHorizontal: 10,
      marginVertical: 30,
      flexDirection: "row",
      width: 200, 
      height: 220,
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30,
      resizeMode: "cover",
  },
  titleText: {
      textAlign: "center",
  },
})