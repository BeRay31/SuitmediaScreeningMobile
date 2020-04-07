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
    Alert,
    Dimensions
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
    isPalindrom() {
        let trimName = this.state.nama.toLowerCase().trim();
        for(let i=0,j=trimName.length-1; i<trimName.length && i<=j; i++,j--) {
            if(trimName[i] != trimName[j]) {
                return false;
            }
        }
        return true
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
                <TouchableOpacity style ={{padding : 10}} onPress = {(this.state.nama.trim().length>3) ? ()=>{
                    let palindrom;
                    if(this.isPalindrom()) {
                        palindrom = "Name Is Palindrom!"
                    } else {
                        palindrom = "Name Isn't Palindrom!"
                    }
                    Alert.alert(
                        'Palindrom Check',
                         palindrom,
                        [
                            {text : 'OK'}
                        ],
                        {cancelable : true}
                    )
                    return this.props.onLogin(this.state)
                    } : al} >
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
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').height, 
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