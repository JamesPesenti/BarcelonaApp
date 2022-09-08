import { ScrollView, ImageBackground, Dimensions } from 'react-native'
import SagradaModal from "../Modals/SagradaModal"
import ParcGuellModal from "../Modals/ParcGuellModal"
import BatlloPedreraModal from "../Modals/BatlloPedreraModal"

import GaudiList from "../Modals/GaudiList"
import GaudiData from "../GaudiData"
import { useState } from "react"


const width = Dimensions.get("window").width
const height = Dimensions.get("window").height


function GaudiScreen() {
//  const [gaudiInfo, setGaudiInfo] = useState(GaudiData)
  return (
            <> 
                <ScrollView>
                    {/* <GaudiList 
                        data={GaudiData}
                        gaudiInfo={gaudiInfo}
                    /> */}
                    <ImageBackground
                        imageStyle={{borderRadius: 20,}}
                        style={{borderRadius: 50, marginVertical: 30, marginHorizontal: 5, width: 300, height: 190, }}
                        source={{uri:("https://99percentinvisible.org/app/uploads/2019/05/interior.jpg")}}>
                            <SagradaModal />
                    </ImageBackground>
                    <ImageBackground
                        imageStyle={{borderRadius: 20,}}
                        style={{borderRadius: 50, marginVertical: 30, marginHorizontal: 30, width: 300, height: 190, }}
                        source={{uri:("https://thepetitewanderess.com/wp-content/uploads/2016/03/park-guell-gaudi-header.jpg")}}>
                             <ParcGuellModal />
                    </ImageBackground>
                    <ImageBackground
                        imageStyle={{borderRadius: 20,}}
                        style={{borderRadius: 50, marginVertical: 30, marginHorizontal: 55, width: 300, height: 190, }}
                        source={{uri:("http://justfunfacts.com/wp-content/uploads/2016/03/casa-batllo-facade.jpg")}}>
                            <BatlloPedreraModal />
                    </ImageBackground>
                </ScrollView>   
            </>
        )
    }

export default GaudiScreen
