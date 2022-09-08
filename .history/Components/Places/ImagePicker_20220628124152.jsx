import { useState } from "react"
import { Alert, Image, View, Text, Button, StyleSheet} from 'react-native'
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker"
import OutlinedButton from "../UI/OutlinedButton"




function ImagePicker({ onTakeImage }) {
  const [pickedImage, setPickedImage] = useState()

  const [cameraPermissionInformation, requestPermission] = useCameraPermissions()


  async function verifyPermissions() {
      if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
         const permissionResponse = await requestPermission()  

         return permissionResponse.granted 
      }

      if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
          Alert.alert("Access Denied", "Grant camera permissions")
          return false
      }
      return true
  } 

  async function takeImageHandler() {
      const hasPermission = await verifyPermissions()

      if (!hasPermission) {
          return;
      }

      const image = await launchCameraAsync({
          allowsEditing: true,
          aspect: [16, 9],
          quality: 0.5,
      })
      setPickedImage(image.uri)
      onTakeImage(image.uri)
    }

    let imagePreview = <Text>No image taken yet</Text>

    if (pickedImage) {
        imagePreview =  <Image style={styles.image} source={{ uri: pickedImage }} />;
    }

  return (
    <View>
        <View style={styles.imagePreview}>{imagePreview}</View>
        {/* <Button title="Take Image" onPress={takeImageHandler} /> */}
        <OutlinedButton icon="camera" onPress={takeImageHandler}>Add a Picture</OutlinedButton>
    </View>
  );
}

export default ImagePicker


const styles = StyleSheet.create({
    imagePreview: {
        width: "90%",
        height: 200,
        marginVertical: 38,
        marginHorizontal: 18,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 30,
        elevation: 3.3
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    },


})