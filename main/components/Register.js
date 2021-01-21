import React from 'react'
import { View, TextInput, Button, TouchableOpacity} from 'react-native'
import { Text } from 'native-base'

export default function Register(props) {
    return (
        <View style={{ padding: 20 }}>
            <View style={{ paddingVertical: 10 }}>
                <Text style={{fontWeight:"500", fontSize:18}}>Create Account</Text>
                <Text note>create an account to get started with GoEco</Text>
            </View>

            <View>
                <View style={{ marginBottom: 35 }}>
                    <TextInput placeholder="first name" style={{ borderWidth: 1, borderColor: 'black' }} />
                </View>

                <View style={{ marginBottom: 35 }}>
                    <TextInput placeholder="last name" style={{ borderWidth: 1, borderColor: 'black' }} />
                </View>

                <View style={{ marginBottom: 35 }}>
                    <TextInput placeholder="email address" style={{ borderWidth: 1, borderColor: 'black' }} />
                </View>

                <View style={{ marginBottom: 35 }}>
                    <TextInput placeholder="phone number" style={{ borderWidth: 1, borderColor: 'black' }} />
                </View>

                <View style={{ marginTop: 40 }}>
                        <TouchableOpacity onPress={(e) => props.navigation.navigate('AccountSetup')} style={{width:"90%", justifyContent:'center', alignItems:'center', backgroundColor:'forestgreen', alignSelf:'center',paddingVertical:15, borderRadius:2}}>
                                <Text style={{color:'#fff'}}>NEXT</Text>
                            </TouchableOpacity>
                </View>


            </View>



        </View>
    )
}