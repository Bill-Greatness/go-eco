import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Home, Notification, Profile,Dashboard } from './'

export default function Layout(props) {
    const BottomTabs = createBottomTabNavigator()
    return (
        <BottomTabs.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor:'forestgreen'
            }}
        >
            <BottomTabs.Screen name="Home"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-home-outline" color={color} size={size} />
                    ),
                }}
                component={Home} />

            <BottomTabs.Screen name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="dashboard" color={color} size={size} />
                    ),
                }}
            />
            <BottomTabs.Screen name="Notification"
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="bell" color={color} size={size} />
                    ),
                }}
                component={Notification} />
            <BottomTabs.Screen name="Profile"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <SimpleLineIcons name="user" color={color} size={size} />
                    ),
                }}
                component={Profile} />
        </BottomTabs.Navigator>
    )
}