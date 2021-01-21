import React from 'react'
import { View, TextInput, ScrollView, Text, TouchableOpacity } from 'react-native'

export default function PickForm() {
    return (

        <ScrollView style={{padding:20}}>
              <View style={{ paddingVertical: 10, marginBottom: 25 }}>
                <Text style={{ fontWeight: "500", fontSize: 18 }}>Item Pick Up</Text>
            </View>
            <View style={{ marginBottom: 20 }}>
                <TextInput placeholder="pick time" style={{ borderWidth: 1, borderColor: 'black' }} />
            </View>

            <View style={{ marginBottom: 20 }}>
                <TextInput placeholder="name" style={{ borderWidth: 1, borderColor: 'black' }} />
            </View>

            <View style={{ marginBottom: 35 }}>
                <TextInput inl placeholder="phone number" style={{ borderWidth: 1, borderColor: 'black' }} />
            </View>

            <View style={{ marginBottom: 20 }}>
                <TextInput placeholder="email" style={{ borderWidth: 1, borderColor: 'black' }} />
            </View>

            <View style={{ marginBottom: 20 }}>
                <TextInput placeholder="apartment number" style={{ borderWidth: 1, borderColor: 'black' }} />
            </View>

            <View style={{ marginBottom: 20 }}>
                <TextInput placeholder="street" style={{ borderWidth: 1, borderColor: 'black' }} />
            </View>

            <View style={{ marginBottom: 20 }}>
                <TextInput placeholder="land mark" style={{ borderWidth: 1, borderColor: 'black' }} />
            </View>

            <View style={{ marginBottom: 20 }}>
                <TextInput placeholder="item category select" style={{ borderWidth: 1, borderColor: 'black' }} />
            </View>

            <View style={{ marginTop:20,marginBottom:20 }}>
                <TouchableOpacity style={{ width: "90%", justifyContent: 'center', alignItems: 'center', backgroundColor: 'forestgreen', alignSelf: 'center', paddingVertical: 15, borderRadius: 2 }}>
                    <Text style={{ color: '#fff' }}>SAVE DETAILS</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}