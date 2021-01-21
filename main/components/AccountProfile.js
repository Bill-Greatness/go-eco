import React from 'react'
import { View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Text, Radio, Right, Content, Left, Body, ListItem, Thumbnail } from 'native-base'
import avatar from '../assets/avatar-profile.png'

export default function AccountProfile(props) {
            const [selectedItem, setSelectedItem] = React.useState(1)
    return (
        <ScrollView>
            <Content style={{ padding: 20 }}>
                <View style={{ paddingVertical: 10, marginBottom: 25 }}>
                    <Text style={{ fontWeight: "500", fontSize: 18 }}>Account Profile</Text>
                    <Text note>Set up your Account, This will help us serve you better</Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: selectedItem === 1 ? "green" : "black", marginVertical: 15 }}>
                    <ListItem noBorder>
                        <Left>
                            <Thumbnail large source={avatar} />
                            <Text>   Customer | Vendor</Text>
                        </Left>
                        <Right>
                            <Radio selectedColor="green" onPress={() => setSelectedItem(1)} selected={selectedItem === 1} />
                        </Right>
                    </ListItem>
                </View>

                <View style={{ borderWidth: 1,  borderColor: selectedItem === 2 ? "green" : "black", marginVertical: 15 }}>
                    <ListItem noBorder>
                        <Left>
                            <Thumbnail large source={avatar} />
                            <Text>  Dispatcher</Text>
                        </Left>
                        <Right>
                            <Radio selectedColor="green" onPress={() => setSelectedItem(2)} selected={selectedItem === 2} />
                        </Right>
                    </ListItem>
                </View>

                <View style={{ borderWidth: 1,  borderColor: selectedItem === 3 ? "green" : "black", marginVertical: 15 }}>
                    <ListItem noBorder>
                        <Left>
                            <Thumbnail large source={avatar} />
                            <Text>  Investor</Text>
                        </Left>
                        <Right>
                            <Radio  onPress={() => setSelectedItem(3)} selected={selectedItem === 3} selectedColor="green" />
                        </Right>
                    </ListItem>
                </View>


                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity onPress={(e) => props.navigation.navigate('Layout')} style={{ width: "90%", justifyContent: 'center', alignItems: 'center', backgroundColor: 'forestgreen', alignSelf: 'center', paddingVertical: 15, borderRadius: 2 }}>
                        <Text style={{ color: '#fff' }}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>
                </View>

            </Content>
        </ScrollView>
    )
}