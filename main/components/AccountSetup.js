import React from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import { Text, Radio, Right, Content, Left, ListItem } from 'native-base'
// import avatar from '../assets/avatar-profile.png'

export default function AccountSetUp(props) {

    return (
        <ScrollView>
            <Content style={{ padding: 20 }}>
                <View style={{ paddingVertical: 10, marginBottom: 25 }}>
                    <Text style={{ fontWeight: "500", fontSize: 18 }}>Account Profile</Text>
                    <Text note>Set up your Account, This will help us serve you better</Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: 'black', marginVertical: 25 }}>
                    <ListItem noBorder>
                        <Left>
                            <Text>Customer</Text>
                        </Left>
                        <Right>
                            <Radio selected={false} />
                        </Right>
                    </ListItem>
                </View>
                <View style={{ borderWidth: 1, borderColor: 'black', marginVertical: 25 }}>
                    <ListItem noBorder>
                        <Left>
                            <Text>Vendor</Text>
                        </Left>
                        <Right>
                            <Radio selected={false} />
                        </Right>
                    </ListItem>
                </View>

                <View>
                    <Text note style={{ paddingVertical: 2, fontSize:12, textAlign:'center' }}>By accepting to create and account, you agree to our</Text>
                    <View style={{ flexDirection: 'row', justifyContent:'center' }}>
                        <Text note style={{fontSize:10, color:'green'}}>Terms of Use </Text> 
                        <Text note style={{fontSize:10}}> and our </Text>
                         <Text note style={{fontSize:10, color:'green'}}> Privacy Policy </Text>
                    </View>
                </View>
               
                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity onPress={(e) => props.navigation.navigate('Profile')} style={{ width: "90%", justifyContent: 'center', alignItems: 'center', backgroundColor: 'forestgreen', alignSelf: 'center', paddingVertical: 15, borderRadius: 2 }}>
                        <Text style={{ color: '#fff' }}> NEXT </Text>
                    </TouchableOpacity>
                </View>

            </Content>
        </ScrollView>
    )
}