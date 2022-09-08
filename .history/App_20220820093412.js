import { ImageBackground } from "react-native"
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import IconButton from "./Components/UI/IconButton"
import SpainIcon from "./Components/UI/SpainIcon"
import { Colors } from "./constants/colors"
import { useEffect, useState } from "react"
import AppLoading from "expo-app-loading"

import HomeScreen from "./Screens/HomeScreen"
import GaudiScreen from "./Screens/GaudiScreen"
import FoodScreen from "./Screens/FoodScreen"
import SightseeingScreen from "./Screens/SightseeingScreen"
import AllPlaces from "./Screens/AllPlaces"
import AddPlace from "./Screens/AddPlace"
import Map from "./Screens/Map"
import PlaceDetails from "./Screens/PlaceDetails"
import { init } from "./util/database"

const Stack = createNativeStackNavigator()

export default function App() {
  // const [dbInitialized, setDbInitialized] = useState(false)

  // useEffect(() => {
  //   init()
  //     .then(() => {
  //       setDbInitialized(true)
  //   })
  //     .catch(err => {
  //     console.log(err)
  //   })
  // }, [])

  // if (!dbInitialized) {
  //   return <AppLoading />
  // }

  return (
    <>
      <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerStyle: { 
                backgroundColor: Colors.primary500
              },
              headerTintColor: "white",
              headerTitleStyle: {
                allignItems: "center",
                fontWeight: "600",
              },
              headerTitleAlign: "center",
            }}
            >
            <Stack.Screen 
              name="Barcelona App" 
              component={HomeScreen} 
              screenOptions={{
                headerStyle: {opacity: .5}
              }}
              options={({navigation}) => ({
                title: "  Visit Barcelona!",
                headerLeft: ({tintColor}) => ( 
                  <SpainIcon
                    onPress={() => navigation.navigate("AllPlaces")}
                  />
                )
              })}
              />
            <Stack.Screen 
              name="AllPlaces" 
              component={AllPlaces} 
              options={({navigation}) => ({
                title: "Your Favorite Places", 
                headerRight: ({tintColor}) => (
                  <IconButton 
                    icon="add" 
                    size={24} 
                    color={tintColor}
                    onPress={() => navigation.navigate("AddPlace")}
                  
                  />
                ),
              })}  
              />
              <Stack.Screen 
                name="GaudiScreen" 
                component={GaudiScreen} 
                options={({navigation}) => ({
                  title: "Gaudi's Works",
                })}
              />
            <Stack.Screen
              name="FoodScreen"
              component={FoodScreen}
              options={{
                headerTitle: () => (
                  
                  <ImageBackground 
                    imageStyle={{flex: 1, left: 40, padding: 15, borderRadius: 10, overflow: 'hidden', paddingTop: 20, marginTop: 3, width: 160,}}
                    style={{width: 400, height: 70, marginTop: 0, paddingBottom: 30, overflow: 'hidden' }}
                    source={{uri:"https://image.shutterstock.com/image-photo/word-tapas-written-witch-chalk-260nw-173666312.jpg"}}
                  />
                  
                ),
                headerTitleStyle: {
                  flex: 1,
                  justifyContent: "center",
                  backgroundColor: "transparent",
                }
              }}
              />
            <Stack.Screen
              name="SightseeingScreen"
              component={SightseeingScreen}
              options={{
                title:"Sights"
              }}
              />
            <Stack.Screen 
              name="AddPlace" 
              component={AddPlace} 
              options={{
                title: "Add a new Place",
              }}
              />
            <Stack.Screen 
              name="Map"
              component={Map}
              options={{
                title: "Barcelona",
              }} 
              />
            <Stack.Screen
              name="PlaceDetails" 
              component={PlaceDetails}
              options={{
                title: "Loading Place...",
              }}
             />
          </Stack.Navigator>
        </NavigationContainer>

    </>
  );
}

