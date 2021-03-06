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


const EventItems = (props) => {
    let date = new Date(props.data.date);
    let strDate = date.getDate() +" "+months[date.getMonth()]+" "+date.getFullYear();
    return(
        <TouchableOpacity 
            style={[styles.doneButton,{backgroundColor : '#fff',paddingHorizontal : 10, elevation : 2}]}
            onPress={()=>{
                props.pressed()
            }}>
            <View style = {[styles.container,{justifyContent:'flex-start',paddingHorizontal :5}]}>
                <Text style={[styles.textBanner,{color: '#000',fontSize : 20,marginBottom : 5}]}>{props.data.eventName}</Text>
                <Text style={styles.textBanner}>{strDate}</Text>
                <Text style={[styles.textBanner,{color: '#a3a3a3',fontSize : 14,marginTop : 12}]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio commodi earum molestias, fugiat pariatur eos.</Text>
            </View>
            <View style = {[styles.profilePict,{borderRadius : 5,elevation : 5}]}>
                <Entypo name={props.data.icon} size = {40} color='#fff'/>
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
                    <TouchableOpacity
                        onPress = {()=>this.props.addBtn()}
                        >
                        <Image
                            style = {{height : 30, width : 30,marginHorizontal : 10}}
                            source = {require('../assets/image/btn_newMediaArticle_normal.png')}
                        />
                    </TouchableOpacity>

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
        fontSize : 16,
        color : '#a3c7cc'

    },
    profilePict : {
        alignSelf : 'center',
        width : "40%",
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
        borderBottomWidth : 4,
        borderColor : '#a3e7ec',
        backgroundColor : '#fff',
        marginTop : StatusBar.currentHeight,
        marginBottom : 8,
    },    
    doneButton : {
        alignSelf : 'center',
        width : "94%",
        height : 180,
        borderRadius : 6,
        paddingVertical : 10,
        flexDirection : 'row',
        borderColor : 'white',
        marginVertical : 8,
    }, 
})