import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import LoginScreen from './screen/LoginScreen';
import HomeScreen from './screen/HomeScreen';
import EventScreen from './screen/EventScreen';
import GuestScreen from './screen/GuestScreen';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const Stack = createStackNavigator();

const fetchFont = () => {
  return Font.loadAsync({
    'product-sans-regular' : require('./assets/fonts/ProductSans-Regular.ttf'),
    'product-sans-medium' : require('./assets/fonts/ProductSans-Medium.ttf'),
    'product-sans-bold' : require('./assets/fonts/ProductSans-Bold.ttf'),
  })
}

async function fetchGuestData() {
  const guestResponse = await fetch('http://www.mocky.io/v2/596dec7f0f000023032b8017');
  const guestResult = await guestResponse.json();
  guestData = guestResult;
}

const eventData = [
  {id:1,eventName:'Party',date:'2020-04-12',icon : 'drink'},
  {id:2,eventName:'Meeting',date:'2020-04-23',icon : 'new-message'},
  {id:3,eventName:'Medical Check Up',date:'2020-04-29',icon : 'squared-plus'},
  {id:4,eventName:'Project Deadline',date:'2020-04-05',icon : 'laptop'},
  {id:5,eventName:'Fine Dinner',date:'2020-04-06',icon : 'moon'},
  {id:6,eventName:'Travelling',date:'2020-04-10',icon : 'map'},
  {id:7,eventName:'Tech Seminar',date:'2020-05-12',icon : 'network'},
  {id:8,eventName:'Intern Starts',date:'2020-06-04',icon : 'rocket'},

]

let guestData = []

function LoginScreenRoute({ navigation }) {
  return (
    <LoginScreen 
      onLogin={(itemState)=>{navigation.navigate('HomeScreenRoute',itemState)}}
      />
  )
}

function HomeScreenRoute ({ navigation, route }) {
  return (
    <HomeScreen stateForm={route.params} onPressEvent={()=>navigation.navigate('EventScreenRoute',eventData)} onPressGuest={()=>navigation.navigate('GuestScreenRoute',guestData)}/>
  )
}

function EventScreenRoute ({ navigation, route }) {
  return (
    <EventScreen data={route.params} onPressSec = {(itemState)=>navigation.navigate('HomeScreenRoute',itemState)}/>
  )
}

function GuestScreenRoute ({ navigation, route }) {
  return (
    <GuestScreen data={route.params} onPressSec = {(itemState)=>navigation.navigate('HomeScreenRoute',itemState)}/>
  )
}

export default function App() {
  const [dataLoaded, setDataLoaded] = React.useState(false);
  fetchGuestData();
  if(!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={()=> setDataLoaded(true)}
      />
    );
  }
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName = 'LoginScreen'
      headerMode = 'screen' 
    >
      <Stack.Screen 
        name='LoginScreen'
        component={LoginScreenRoute}
        options={{
          headerShown : false,
        }} 
      />
      <Stack.Screen
        name='HomeScreenRoute'
        component ={HomeScreenRoute}
        options={{
          headerShown : false,

        }}/>
      <Stack.Screen
        name='EventScreenRoute'
        component ={EventScreenRoute}
        options={{
          headerShown : false,

        }}/>
        <Stack.Screen
        name='GuestScreenRoute'
        component ={GuestScreenRoute}
        options={{
          headerShown : false,

        }}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
