import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import IconButton from "./Components/UI/IconButton"
import { Colors } from "./constants/colors"

import HomeScreen from "./Screens/HomeScreen"
import AllPlaces from "./Screens/AllPlaces"
import AddPlace from "./Screens/AddPlace"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerStyle: { 
                opacity: 10,
                backgroundColor: Colors.primary500 
              },
              headerTintColor: "white",
              // contentStyle: { backgroundColor: Colors.primary200},
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
              options={({navigation}) => ({
                title: "Welcome To Barcelona",
                headerLeft: ({tintColor}) => ( 
                  <IconButton 
                    icon="heart"
                    size={30}
                    color={tintColor}
                    onPress={() => navigation.navigate("All Places")}
                  />
                )
              })}
              />
            <Stack.Screen 
              name="All Places" 
              component={AllPlaces} 
              options={({navigation}) => ({
                title: "Your Favorite Places", 
                headerRight: ({tintColor}) => (
                  <IconButton 
                    icon="add" 
                    size={24} 
                    color={tintColor}
                    onPress={() => navigation.navigate("Add Place")}
                  
                  />
                ),
              })}  
              />
            <Stack.Screen 
              name="Add Place" 
              component={AddPlace} 
              options={{
                title: "Add a new Place",
              }}
              />
            {/* <Stack.Screen name="" /> */}
          </Stack.Navigator>
        </NavigationContainer>

    </>
  );
}

