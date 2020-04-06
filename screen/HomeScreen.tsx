import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
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
    Alert
} from 'react-native';




export default class LoginScreen extends React.Component {
    state = {
        name : "",
        eventName : "Pilih Event",
        guestName : "Pilih Guest",
    }
    componentDidMount() {
        if(this.props.stateForm.nama) {
            this.setState({name : this.props.stateForm.nama})
        }
    }
    
    render() {
        if(this.props.stateForm.eventName != this.state.eventName && this.props.stateForm.eventName != undefined) {
            this.setState({eventName : this.props.stateForm.eventName})
        }
        if(this.props.stateForm.name != this.state.guestName && this.props.stateForm.name != undefined) {
            this.setState({guestName : this.props.stateForm.name})
        }
        ()=>{if(this.props.stateForm.birthdate != '') {
            let val = this.props.stateForm.birthdate[8] + this.props.stateForm.birthdate[9];
            val = parseInt(val);
            if (val % 2 == 0 && val % 3 ==0) {
                ()=>Alert.alert(
                    'Date Alert',
                    'iOS',
                    [
                        {text : 'OK'}
                    ],
                    {cancelable : true}
                )
            }else if(val % 2 == 0) {
                ()=>Alert.alert(
                    'Date Alert',
                    'blackberrry',
                    [
                        {text : 'OK'}
                    ],
                    {cancelable : true}
            } else if (val % 3 == 0) {
                ()=>Alert.alert(
                    'Date Alert',
                    'android',
                    [
                        {text : 'OK'}
                    ],
                    {cancelable : true}
                )
            } else {
                Alert.alert(
                    'Date Alert',
                    'phone',
                    [
                        {text : 'OK'}
                    ],
                    {cancelable : true}
                )
                
            }
        }}
        return (
            <ImageBackground
                source = {require("../assets/image/bg_validation.png")}
                style = {styles.container}
                resizeMode = 'cover'
            >
                <KeyboardAvoidingView style = {styles.screenContainer} behavior ='position'>
                    <View style ={{paddingHorizontal : 10, paddingTop : 10}}>
                        <View style={[styles.profilePict,{marginBottom : 10}]}>
                            <MaterialIcons name = 'person' size={50} color='#fff'/>
                        </View>
                    </View>
                    <View style = {[styles.nameForm,{borderWidth : 0,marginTop : 0,backgroundColor : 'none', elevation :0,}]}>
                        <TextInput
                            value = {this.state.name}
                            editable = {false}
                            style = {[styles.formContainer,{fontSize : 22,marginTop : 4}]}
                            />
                    </View>
                    <Text style = {[styles.textBanner,{alignSelf : 'center',fontSize : 22,paddingBottom : 10,}]}>Event</Text>
                    <TouchableOpacity
                        onPress = {()=>this.props.onPressEvent(this.state)}
                    >
                        <View style = {styles.nameForm}>
                            <TextInput
                                value = {this.state.eventName}
                                editable = {false}
                                style = {styles.formContainer}
                                />
                        </View>                    
                    </TouchableOpacity>
                    <Text style = {[styles.textBanner,{alignSelf : 'center',fontSize : 22,paddingBottom : 10,}]}>Guest</Text>
                    <TouchableOpacity
                        onPress = {()=>this.props.onPressGuest(this.state)}
                        >
                        <View style = {styles.nameForm}>
                            <TextInput
                                value = {this.state.guestName}
                                editable = {false}
                                style = {styles.formContainer}
                                />
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
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
        fontSize : 18,
        color : '#fff'

    },
    profilePict : {
        alignSelf : 'center',
        width : 130,
        height : 130,
        borderRadius : 65,
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
        paddingHorizontal : 10,
        marginBottom : 70,
        marginHorizontal : 28,
        alignContent : 'flex-start',
        borderWidth : 2,
        borderColor : '#fff',
        borderRadius : 10,
        backgroundColor : '#a3c7cc',
    },    
    doneButton : {
        alignSelf : 'center',
        width : "80%",
        borderRadius : 6,
        paddingVertical : 15,
        borderWidth : 2,
        borderColor : 'white',
        justifyContent : 'center',
        alignItems : 'center',
        marginVertical : 70,
    }, 
})