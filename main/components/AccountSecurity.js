import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import {Text} from 'native-base'

export default function AccountSecurity() {

    return (
        <View style={{ padding: 20}}>
            <View style={{ paddingVertical: 10, marginBottom:25  }}>
                <Text style={{ fontWeight: "500", fontSize: 18 }}>Account Security</Text>
                <Text note>Set a Password for your Account to Proceed</Text>
            </View>
            <View>
                <View style={{ marginBottom: 35 }}>
                    <TextInput placeholder="password" style={{ borderWidth: 1, borderColor: 'black' }} />
                </View>
                <View style={{ marginBottom: 35 }}>
                    <TextInput placeholder="confirm password" style={{ borderWidth: 1, borderColor: 'black' }} />
                </View>

                <View style={{ marginTop: 40 }}>
                    <TouchableOpacity style={{ width: "90%", justifyContent: 'center', alignItems: 'center', backgroundColor: 'forestgreen', alignSelf: 'center', paddingVertical: 15, borderRadius: 2 }}>
                        <Text style={{ color: '#fff' }}>NEXT</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}