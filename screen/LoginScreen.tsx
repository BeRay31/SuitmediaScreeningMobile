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

let al = ()=>Alert.alert(
    'Invalid Name',
    'Nama harus lebih dari 3 karakter',
    [
        {text : 'OK'}
    ],
    {cancelable : true}
)
export default class LoginScreen extends React.Component {
    state = {
        nama : "",
    }
    render() {
        return (
            <ImageBackground
                source = {require("../assets/image/bg_validation.png")}
                style = {styles.container}
                resizeMode = 'cover'
            >
                <KeyboardAvoidingView style = {styles.screenContainer} behavior ='position'>
                    <View style = {styles.textContainer}>
                        <Text style={styles.textWelcome}>Selamat Datang!</Text>
                    </View>
                    <View style = {styles.textContainer}>
                        <Text style = {styles.textBanner}>Sertakan gambar profil Anda </Text>
                        <Text style = {styles.textBanner}>untuk melengkapi profil.</Text>
                    </View>
                    <TouchableOpacity style ={{padding : 10}}>
                        <View style={styles.profilePict}>
                            <MaterialIcons name = 'person-add' size={50} color='#fff'/>
                        </View>
                    </TouchableOpacity>
                    <View style = {styles.nameForm}>
                        <TextInput
                            value = {this.state.nama}
                            onChangeText = {(itemVal) =>this.setState({nama:itemVal})}
                            placeholder = 'Masukan Nama'
                            style = {styles.formContainer}
                            />
                    </View>
                </KeyboardAvoidingView>
                <TouchableOpacity style ={{padding : 10}} onPress = {(this.state.nama.length>3) ? ()=>this.props.onLogin(this.state) : al} >
                    <View style={[styles.doneButton,]}>
                        <Text style={styles.textBanner}>Selesai</Text>
                    </View>
                </TouchableOpacity>
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
        width : 120,
        height : 120,
        borderRadius : 60,
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
        paddingHorizontal : 10,
        marginVertical : 40,
        marginHorizontal : 28,
        alignContent : 'flex-start',
        borderWidth : 1,
        borderColor : '#fff',
        borderRadius : 10,
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