import {} from 'react-native'
import PlaceForm from "../Components/Places/PlaceForm"
import { insertPlace } from "../util/database"

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    await insertPlace(place)
    navigation.navigate("All Places")
      // place: this.place
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />
  
}

export default AddPlace