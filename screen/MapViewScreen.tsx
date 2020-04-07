import React from 'react';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import {
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Image,
    Text,
    View,
    StatusBar,
    Dimensions
} from 'react-native';

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


const MapItems = (props) => {
    let date = new Date(props.data.date);
    let strDate = date.getDate() +" "+months[date.getMonth()]+" "+date.getFullYear();
    return(
        <View style = {{width:Dimensions.get('window').width,padding : 10,height : "60%"}}>
            <TouchableOpacity 
                onPress = {
                    ()=>props.pressed()
                }
                style={[styles.doneButton,{backgroundColor : '#fff',paddingHorizontal : 10, elevation : 2,flexDirection : 'column'}]}
                >
                <View style = {[styles.profilePict,{borderRadius : 5,elevation : 5}]}>
                    <Entypo name={props.data.icon} size = {40} color='#fff'/>
                </View>
                <View style = {[{justifyContent:'flex-start',paddingHorizontal :5,alignItems : 'center',marginTop : 10}]}>
                    <Text style={[styles.textBanner,{color: '#000',fontSize : 20,marginBottom : 5}]}>{props.data.eventName}</Text>
                    <Text style={styles.textBanner}>{strDate}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


export default class MapViewScreen extends React.Component {
    state = {
        eventName : "Pilih Event",
    }
    
    render() {
        return (
            <ImageBackground
                source = {require("../assets/image/bg_validation.png")}
                style = {[styles.container]}
            >
                <View style = {[styles.nameForm,{justifyContent:'space-between',flexDirection:'row',elevation : 2}]}>
                    <View style={[{flexDirection : 'row',}]}>
                        <TouchableOpacity
                            onPress = {()=>this.props.back()}
                        >
                            <Image
                                style ={{height : 30, width : 30,marginHorizontal : 10}} 
                                source={require('../assets/image/btn_backArticle_normal.png')}
                            />
                        </TouchableOpacity>
                        <Text style = {[styles.textWelcome,{color : '#a3c7cc'}]}>EVENTS</Text>
                    </View>
                    <TouchableOpacity>
                        <Image
                            style = {{height : 30, width : 30,marginHorizontal : 10}}
                            source = {require('../assets/image/btn_newMediaArticle_normal.png')}
                        />
                    </TouchableOpacity>

                </View>
                <View>
                    <ScrollView style ={{}} horizontal = {true} pagingEnabled = {true}>
                        {this.props.data.map(d => (
                            
                            <MapItems data={d} pressed={()=>
                                {
                                    return this.props.onPressSec(d)
                                }
                            }/>
                        ))}
                    </ScrollView>
                </View>
                
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        width : "100%",
        height : "100%", 
    },
    screenContainer : {
        marginTop : StatusBar.currentHeight ,
    },
    textContainer: {
        paddingTop : 50,
        paddingBottom : 10,
        alignItems : 'center',
        justifyContent : 'center'
    },
    textWelcome : {
        fontFamily : 'product-sans-medium',
        fontSize : 22,
        color : '#fff'
    },
    textBanner : {
        fontFamily : 'product-sans-medium',
        fontSize : 16,
        color : '#a3c7cc'

    },
    profilePict : {
        alignSelf : 'center',
        width : "80%",
        height : "70%",
        borderWidth : 2,
        backgroundColor : '#a3c7cc',
        borderColor : 'white',
        justifyContent : 'center',
        alignItems : 'center',
    }, 
    formContainer : {
        margin : 8,
        paddingHorizontal : 4,
        color : '#fff',
        fontSize : 18,
        fontFamily : 'product-sans-regular' 
        
    },
    nameForm : {
        alignItems : 'center',
        justifyContent : 'center',
        height : 60,
        alignContent : 'flex-start',
        borderBottomWidth : 4,
        borderColor : '#a3e7ec',
        backgroundColor : '#fff',
        marginTop : StatusBar.currentHeight,
        marginBottom : 8,
    },    
    doneButton : {
        alignSelf : 'center',
        width : "100%",
        height : "100%",
        borderRadius : 6,
        paddingVertical : 10,
        flexDirection : 'row',
        borderColor : 'white',
        marginVertical : 8,
    }, 
})