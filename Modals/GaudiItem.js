// import { View, Text, Modal, StyleSheet, Pressable, Image, ImageBackground, Dimensions} from 'react-native'

// import SagradaScreen from "../Screens/GaudiScreens/SagradaScreen"
// import BatlloPedreraModal from "../Modals/BatlloPedreraModal"
// import ParcGuellModal from "../Modals/ParcGuellModal"

// const width = Dimensions.get("window").width
// const height = Dimensions.get("window").height

// const GaudiItem = ({ item, id }) => {
//   return (
//     <>
//       <ImageBackground
//             key={id}
//             style={{borderRadius: 100, marginVertical: 50, marginHorizontal: 50, width: 300, height: 250,}}
//             source={{uri:("https://99percentinvisible.org/app/uploads/2019/05/interior.jpg")}}>
//         <SagradaScreen/>
//       </ImageBackground>

//       <ImageBackground
//             key={id}
//             style={{borderRadius: 100, marginVertical: 50, marginHorizontal: 50, width: 300, height: 250,}}
//             source={{uri:("https://thepetitewanderess.com/wp-content/uploads/2016/03/park-guell-gaudi-header.jpg")}}>   
//         <ParcGuellModal item={item} />
//       </ImageBackground>
      
//       <ImageBackground
//             key={id}
//             style={{borderRadius: 100, marginVertical: 50, marginHorizontal: 50, width: 300, height: 250,}}
//             source={{uri:("http://justfunfacts.com/wp-content/uploads/2016/03/casa-batllo-facade.jpg")}}>
//         <BatlloPedreraModal item={item}  />
//       </ImageBackground>
//     </>
//   )
// }

// export default GaudiItem

// const styles = StyleSheet.create({
//     centeredView: {
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//         marginRight: 5,
//         marginLeft: 5,
//         marginTop: 20,
//       },
//       modalView: {
//         justifyContent: "center",
//         backgroundColor: "#fff",
//         width: "100%",
//         height: "95%",
//         borderRadius: 15,
//         padding: 20,
//         marginTop: 15,
//         elevation: 3.3
//       },
//       openView: {
//         backgroundColor: "grey",
        
//       },
//       imageBackground: {
//         opacity: 1,
//         flex: 1,
//         resizeMode: "contain",
//         width: width,
//         height: 310,
//     },
//        //   gaudi card
//       gaudi: {
//         borderRadius: 15,
//         padding: 100,
//         elevation: 2,
//         marginRight: 0,
//         backgroundColor: "white"
//       },
//       button: {
//         borderRadius: 15,
//         padding: 15,
//         elevation: 2,
//         marginTop: 100,
//         marginHorizontal: 0,
//         backgroundColor: "white"
//       },
//       buttonClose: {
//         backgroundColor: "white",
//         margin: 20
//       },
//       textStyle: {
//         color: "black",
//         fontWeight: "bold",
//         textAlign: "center"
//       },
//       modalText: {
//         marginBottom: 15,
//         textAlign: "center"
//       },
//   })