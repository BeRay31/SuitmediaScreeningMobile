import React from 'react';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import {
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    View,
    StatusBar,
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


const EventItems = (props) => {
    let date = new Date(props.data.date);
    let strDate = date.getDate() +" "+months[date.getMonth()]+" "+date.getFullYear();
    return(
        <TouchableOpacity 
            style={styles.doneButton}
            onPress={()=>{
                
                props.pressed()
                }}>
            <View style = {styles.profilePict}>
                <Entypo name={props.data.icon} size = {40} color='#fff'/>
            </View>
            <View style = {[styles.container,{justifyContent:'center'}]}>
                <Text style={styles.textBanner}>{props.data.eventName}</Text>
                <Text style={styles.textBanner}>{strDate}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default class EventScreen extends React.Component {
    state = {
        eventName : "Pilih Event",
    }
    
    render() {
        return (
            <ImageBackground
                source = {require("../assets/image/bg_validation.png")}
                style = {styles.container}
                resizeMode = 'cover'
            >
                <View style={[styles.nameForm]}>
                    <Text style = {styles.textWelcome}>EVENTS</Text>
                </View>
                <ScrollView style ={[styles.container]}>
                    {this.props.data.map(d => (
                        
                        <EventItems data={d} pressed={()=>
                            {
                                return this.props.onPressSec(d)
                            }
                        }/>
                    ))}
                </ScrollView>
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
        alignSelf : 'center',
        fontSize : 16,
        color : '#fff'

    },
    profilePict : {
        alignSelf : 'center',
        width : "45%",
        height : "100%",
        borderWidth : 2,
        backgroundColor : '#a3c7cc',
        borderColor : 'white',
        justifyContent : 'center',
        alignItems : 'center',
        marginVertical : 30,
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
        borderWidth : 2,
        borderColor : '#fff',
        borderRadius : 6,
        backgroundColor : '#a3c7cc',
        marginTop : StatusBar.currentHeight,
        marginBottom : 8,
    },    
    doneButton : {
        alignSelf : 'center',
        width : "86%",
        height : 100,
        borderRadius : 6,
        paddingVertical : 10,
        borderBottomWidth : 2,
        flexDirection : 'row',
        borderColor : 'white',
        marginVertical : 10,
    }, 
})