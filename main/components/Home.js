import React from 'react'
import { View, ScrollView, TouchableOpacity, Text } from 'react-native'


export default function Home() {
    return (
        <View>
            <View style={{ flexDirection:'row', backgroundColor:'#fff', height:50, paddingVertical:10,paddingLeft:3, borderBottomWidth:1, borderBottomColor:'darkgray'}}  >
                <Text style={{ fontSize: 18, fontWeight: "400"}}>HOME</Text>
            </View>

            <ScrollView style={{ padding: 20 }}>
                <View style={{ marginTop: 25, borderWidth: 1, borderColor: 'green', borderRadius: 2 }}>
                    <Text style={{ padding: 15 }}>Item pick-up details</Text>

                </View>
                <View>
                    <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: 'space-between', borderWidth: 1, borderColor: 'green', borderRadius: 2 }}>
                        <Text style={{ padding: 15 }}>Item drop-off details</Text>
                        <TouchableOpacity>
                            <Text style={{ padding: 15, fontSize: 18 }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 190 }}>
                    <TouchableOpacity style={{ width: "90%", justifyContent: 'center', alignItems: 'center', backgroundColor: 'forestgreen', alignSelf: 'center', paddingVertical: 15, borderRadius: 2 }}>
                        <Text style={{ color: '#fff' }}>MAKE PAYMENT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}