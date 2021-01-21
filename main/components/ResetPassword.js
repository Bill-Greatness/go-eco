import React from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'

export default function ResetPassword() {

    return (
        <View style={{padding:20}}>
            <View style={{ paddingVertical: 10, marginBottom: 25 }}>
                <Text style={{ fontWeight: "500", fontSize: 18 }}>Reset Password</Text>
            </View>

            <View style={{ marginBottom: 35 }}>
                <TextInput placeholder="email address" style={{ borderWidth: 1,paddingLeft:15, borderColor: 'black' }} />
            </View>


            <View style={{ marginTop: 30 }}>
                <TouchableOpacity style={{ width: "90%", justifyContent: 'center', alignItems: 'center', backgroundColor: 'forestgreen', alignSelf: 'center', paddingVertical: 15, borderRadius: 2 }}>
                    <Text style={{ color: '#fff' }}>RESET PASSWORD</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}