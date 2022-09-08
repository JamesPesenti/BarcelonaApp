import { View, Text, Image, ScrollView, ImageBackground, Dimensions, Pressable, StyleSheet, StatusBar } from 'react-native'

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height


function FoodScreen({navigation}) {
  return (
<> 
<StatusBar translucent={true} backgroundColor="transparent" />              
<ImageBackground
    style={{width: width, height: height, opacity: 1, backgroundColor: "white", overflow: "hidden"}}
    imageStyle={{ opacity: .3, overflow: "hidden"}}
    source={{uri: "https://us.123rf.com/450wm/astartejulia/astartejulia2002/astartejulia200200035/139859696-set-of-finger-food-elements-canape-and-appetizes-served-on-sticks-in-sketch-style-catering-service-t.jpg?ver=6"}}
>
    <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
          <View style={styles.container}>
           <View style={styles.card0}>
                <ScrollView horizontal={true} style={{flexDirection: "row"}} showsHorizontalScrollIndicator={false}>
                    <Image style={styles.image} source={{uri: "https://www.fattiretours.com/app/uploads/2018/12/barcelona-tapas.png"}}/>
                    <Image style={styles.image} source={{uri: "https://media-cdn.tripadvisor.com/media/photo-s/01/c6/a6/e9/tapas.jpg"}}/>
                    <Image style={styles.image} source={{uri: "https://media-cdn.tripadvisor.com/media/photo-p/0b/d1/c6/d7/local-cava-must-try-remember.jpg"}}/>
                </ScrollView>
            <View style={{ flexDirection: "row", overflowHidden: "true", textAlign: "center", justifyContent: "center", marginBottom: -20, padding: 0, width: 180, borderWidth: 3, borderColor: "white", }}>
                <ImageBackground
                    source={{uri: "https://us.123rf.com/450wm/astartejulia/astartejulia2002/astartejulia200200035/139859696-set-of-finger-food-elements-canape-and-appetizes-served-on-sticks-in-sketch-style-catering-service-t.jpg?ver=6"}}
                    style={{width: 175, height:  35, opacity: 1, backgroundColor: "black", overflow: "hidden"}}
                >
                    <Text style={{color: "white", textAlign: "center", fontSize: 19}}>El Xampanyet</Text>
                </ImageBackground>
            </View>
        </View>
     
        <View style={styles.card1}>
                <ScrollView horizontal={true} style={{flexDirection: "row",}} showsHorizontalScrollIndicator={false}>
                    <Image style={styles.image} source={{uri: "https://media-cdn.tripadvisor.com/media/photo-s/0e/6f/88/0b/panoramica.jpg"}}/>
                    <Image style={styles.image} source={{uri: "https://s3.amazonaws.com/fathom_media/photos/1-el-nacional-bareclona-spain.jpg.1200x800_q85_crop.jpg"}}/>
                    <Image style={styles.image} source={{uri: "https://pbs.twimg.com/media/DBjV-PQXoAAaZHT.jpg"}}/>
                </ScrollView>
            <View style={{ flexDirection: "row", overflowHidden: "true", textAlign: "center", justifyContent: "center", marginBottom: -20, padding: 0, width: 180, borderWidth: 2, borderColor: "white", }}>
            <ImageBackground
                    source={{uri: "https://us.123rf.com/450wm/astartejulia/astartejulia2002/astartejulia200200035/139859696-set-of-finger-food-elements-canape-and-appetizes-served-on-sticks-in-sketch-style-catering-service-t.jpg?ver=6"}}
                    style={{width: 175, height:  35, opacity: 1, backgroundColor: "black", overflow: "hidden"}}
                >
                    <Text style={{color: "white", textAlign: "center", fontSize: 19}}>El Nacional</Text>
                </ImageBackground>
            </View>
        </View>


        <View style={styles.tapaCard}>
            <ImageBackground
                source={{uri: "https://us.123rf.com/450wm/astartejulia/astartejulia2002/astartejulia200200035/139859696-set-of-finger-food-elements-canape-and-appetizes-served-on-sticks-in-sketch-style-catering-service-t.jpg?ver=6"}}
                style={{width: "100%", height: "100%", opacity: 1, backgroundColor: "black", overflow: "hidden"}}
            >
                <Image style={{ position: "absolute", width: 80, height: 80, left: 10, margin: 0, paddingTop: 40, marginBottom: 50, borderRadius: 100, borderColor: "white", borderWidth: .5}} source={{uri: "https://blog.amigofoods.com/wp-content/uploads/2020/05/tapas-dishes-spelling-tapas.jpg"}}/>
                    <Text style={{fontWeight: "bold", fontSize: 17, color: 'white', marginTop: 16, left: 0, textAlign: 'center'}}>The Origin of Tapas</Text>         
                    <Text style={{lineHeight: 22, fontWeight: "bold", fontSize: 14, color: 'white', marginTop: 40, textAlign: 'center'}}
                    > It started In the 13th century while King Alfonso X of Castile was recovering from an illness and could only eat and drink
                     in small amounts. After feeling better, he made a decree that all drinks should be served with something to eat.</Text>
                     <Text style={{fontWeight: "bold", fontSize: 14, color: 'white', marginTop: 0, textAlign: 'center'}}>The first tapa {`${"(which means lid or cover)"}`} served was likely just a slice of ham placed ontop of a drink. </Text>
                <Image style={{ backgroundColor: "white", position: "absolute", width: 90, height: 90, right: 15, margin: -5, paddingTop: 40, marginBottom: 50, borderRadius: 100, borderColor: "white", borderWidth: .5}} source={{uri: "https://thefoodolic.files.wordpress.com/2017/06/firsttapadraw1.png?w=384&h=354"}}/>
            </ImageBackground>
        </View>

        <View style={styles.card2}>
                <ScrollView horizontal={true} style={{flexDirection: "row",}} showsHorizontalScrollIndicator={false}>
                    <Image style={styles.image} source={{uri: "https://teriakitalks.com/wp-content/uploads/2020/06/QuimetQuimet-07.jpg"}}/>
                    <Image style={styles.image} source={{uri: "https://homagetobcn.com/wp-content/uploads/2019/05/quimet-y-quimet-montaditos.jpg"}}/>
                    <Image style={styles.image} source={{uri: "https://i.pinimg.com/474x/d1/b7/8f/d1b78f75d43450e36b728fc16e4dd584--mezze-no-reservations.jpg"}}/>
                </ScrollView>
                <View style={{ flexDirection: "row", overflowHidden: "true", textAlign: "center", justifyContent: "center", padding: 0, marginBottom: 20, width: 180, borderWidth: 2, borderColor: "white", }}>
                <ImageBackground
                    source={{uri: "https://us.123rf.com/450wm/astartejulia/astartejulia2002/astartejulia200200035/139859696-set-of-finger-food-elements-canape-and-appetizes-served-on-sticks-in-sketch-style-catering-service-t.jpg?ver=6"}}
                    style={{width: 175, height:  35, opacity: 1, backgroundColor: "black", overflow: "hidden"}}
                >
                    <Text style={{color: "white", textAlign: "center", fontSize: 19}}>Quimet y Quimet </Text>
                </ImageBackground>
            </View>
        </View>

        <View style={styles.card3}>
                <ScrollView horizontal={true} style={{flexDirection: "row",}} showsHorizontalScrollIndicator={false}>
                    <Image style={styles.image} source={{uri: "https://media-cdn.tripadvisor.com/media/photo-s/03/58/16/ba/bar-del-pla.jpg"}}/>
                    <Image style={styles.image} source={{uri: "https://i0.wp.com/foodieinbarcelona.com/wp-content/uploads/2017/04/IMG_3126.jpg?resize=4032%2C2816&ssl=1"}}/>
                    <Image style={styles.image} source={{uri: "https://media.cntraveler.com/photos/5a8d9ed226924e3c324ef48d/16:9/w_2560%2Cc_limit/Bar-Del-Pla-Restaurante-Barcelona-Foto-de-Anna-Bosch-Miralpeix-(1).jpg"}}/>
                    <Image style={styles.image} source={{uri: "https://culinarybackstreets.com/wp-content/uploads/cb_barcelona_bardelpla_pm_final1.jpg"}}/>
                </ScrollView>
            <View style={{ flexDirection: "row", overflowHidden: "true", textAlign: "center", justifyContent: "center", marginBottom: 0, padding: 0, width: 180, borderWidth: 2, borderColor: "white", }}>
            <ImageBackground
                    source={{uri: "https://us.123rf.com/450wm/astartejulia/astartejulia2002/astartejulia200200035/139859696-set-of-finger-food-elements-canape-and-appetizes-served-on-sticks-in-sketch-style-catering-service-t.jpg?ver=6"}}
                    style={{width: 175, height:  35, opacity: 1, backgroundColor: "black", overflow: "hidden"}}
                >
                    <Text style={{color: "white", textAlign: "center", fontSize: 19}}>Bar del Pla</Text>
            </ImageBackground>
            </View>
        </View>



        </View>
    </ScrollView>
    </ImageBackground>
</>
        )
    }

export default FoodScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginVertical: 40,
        marginHorizontal: 40,

        // fdr lines cards up horizontally
        // flexDirection: "row",
    },
    card0: {
        backgroundColor: "transparent",
        height: 300,
        width: width,
        borderRadius: 10,
        borderColor: "white",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingBottom: 40,
        marginBottom: 20,
       
    },
    card1: {
        backgroundColor: "transparent",
        height: 300,
        width: width,
        borderRadius: 20,
        borderColor: "transparent",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingBottom: 40,
        marginBottom: 20,
    },
    tapaCard: {
        backgroundColor: "#eb3d34",
        height: 240,
        width: 340,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "white",
        overflow: "hidden",
        opacity: 1,
        textAlign: "center",
        paddingBottom: 0,
        marginVertical: 60,
    },
    card2: {
        backgroundColor: "transparent",
        height: 350,
        width: width,
        borderRadius: 20,
        borderColor: "transparent",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingBottom: 40,
        marginBottom: 20,
      
    },
    card3: {
        backgroundColor: "transparent",
        height: 350,
        width: width,
        borderRadius: 20,
        borderColor: "transparent",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingBottom: 40,
        marginBottom: 20,
    },
    image: {
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 2,
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
    roomText: {
        letterSpacing: 1,
        color: "#78b38a",
        textAlign: "center",
        fontWeight: "700",
        margin: 5
    },
    descriptionText: {
        letterSpacing: 1,
        color: "#78b38a",
        textAlign: "center",
        fontWeight: "700",
    },
    button: {
        borderRadius: 8,
        margin: 20,
        padding: 10,
        elevation: 2,
        marginBottom: -25,
        marginHorizontal: 70,
        backgroundColor: "white",
    },
})