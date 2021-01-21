import React from 'react'
import {StatusBar} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Layout from '../components/HomeLayout'
// import Copied from '../animations/copied'
import {Landing, AccountProfile, PickForm, ResetPassword, AccountSetUp, Login, Register, AccountSecurity } from '../components'

export default function Main(){
    // const BottomTabs = createBottomTabNavigator() 
    const Stack = createStackNavigator()

    return(
      <>
        <StatusBar barStyle="light-content" backgroundColor="forestgreen"/>
        <Stack.Navigator
        screenOptions={{headerShown:false}}
        initialRouteName="Landing">
          <Stack.Screen name="Landing" component={Landing}  />
          <Stack.Screen name="Register" component={Register}  /> 
          <Stack.Screen name="Layout" component={Layout}  /> 
          <Stack.Screen name="Profile" component={AccountProfile}  /> 
          <Stack.Screen name="Login" component={Login} /> 
          <Stack.Screen name="PickForm" component={PickForm} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="AccountSecurity" component={AccountSecurity} />
          <Stack.Screen name="AccountSetup" component={AccountSetUp} />
        </Stack.Navigator>
        </>
    )
}