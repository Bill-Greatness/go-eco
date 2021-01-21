import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import {Text} from 'native-base'

export default function Login(props) {

    return (
        <View style={{ padding: 20}}>
            <View style={{ paddingVertical: 10, marginBottom:25  }}>
                <Text style={{ fontWeight: "500", fontSize: 20 }}>Welcome Back</Text>
                
            </View>
            <View>
                <View style={{ marginBottom: 35 }}>
                    <TextInput placeholderTextColor="black" placeholder="email address" style={{ borderWidth: 1, borderColor: 'black', paddingLeft:13 }} />
                </View>
                <View style={{ marginBottom: 35 }}>
                    <TextInput placeholderTextColor="black" placeholder="password" style={{ borderWidth: 1, borderColor: 'black', paddingLeft:13 }} />
                </View>

                <View style={{ marginTop:20 }}>
                    <TouchableOpacity onPress={(e) => props.navigation.navigate('Layout')} style={{ width: "90%", justifyContent: 'center', alignItems: 'center', backgroundColor: 'forestgreen', alignSelf: 'center', paddingVertical: 15, borderRadius: 2 }}>
                        <Text style={{ color: '#fff' }}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row', margin:20, justifyContent:'center'}}>
                    <Text note style={{fontSize:12}}>New User ? </Text>
                    <TouchableOpacity onPress={(e) => props.navigation.navigate('Register')}>
                    <Text note style={{color:'green', fontSize:12}}>{" "}Create Account</Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center'}}>
                    <TouchableOpacity onPress={(e) => props.navigation.navigate('ResetPassword')}>
                    <Text note style={{color:'green', textAlign:'center', fontSize:12}}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}