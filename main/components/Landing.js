import * as React from 'react';
import {
    View,
    SafeAreaView, ImageBackground, TouchableOpacity
} from 'react-native';
import { Text, Button } from 'native-base'
import Carousel from 'react-native-snap-carousel';
import landing1 from '../assets/landing-image.png'
import landing2 from '../assets/landing-image2.png'
import landing3 from '../assets/landing-image3.png'
import { Tile } from '../calls'

export default class Landing extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    image: landing1
                },
                {
                    image: landing2
                },
                {
                    image: landing3
                }
            ]
        }
    }


    _renderItem({ item, index }) {
        return (
            <View style={{
                backgroundColor: 'white',
                borderRadius: 5,
            }}>
                <ImageBackground resizeMode="center" style={{ width: '80%', height: "100%" }} source={item.image}>

                </ImageBackground>

            </View>

        )
    }

    render() {
        const info = [
            {
                name: 'A Transparent System of Logistics',
                id: '1'
            },
            {
                name: "Our Technology is Easy to Understand",
                id: '2'
            },
            {
                name: 'We go because Eco Go',
                id: '3'
            }
        ]


        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: '65%', flexDirection: 'row', justifyContent: 'center', }}>
                    <Carousel
                        layout={"stack"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={500}
                        activeSlideAlignment="center"
                        itemWidth={500}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View>
                <View>

                    <View style={{ flexDirection: 'row', marginTop:10,  alignSelf: 'center' }}>
                        {[0,1,2].map((idx) => (
                            <Tile key={idx} active={this.state.activeIndex === idx} />
                        ))}
                    </View>


                    <View style={{ paddingVertical: 25, alignContent: 'center', alignItems: "center" }}>
                        <Text style={{ fontSize: 18 }}>{info[this.state.activeIndex].name}</Text>
                    </View>

                    <TouchableOpacity onPress={(e) => this.props.navigation.navigate('Register')} style={{
                        alignSelf: 'center', alignItems: 'center', padding: 15,
                        width: '70%', backgroundColor: 'forestgreen', justifyContent: "center"
                    }}>
                        <Text style={{ color: 'white', alignContent: 'center', alignSelf: 'center', fontSize: 14, textTransform: 'uppercase' }}>Create Account</Text>
                    </TouchableOpacity>

                    <View style={{ paddingVertical: 25, flexDirection: 'row', alignContent: 'center', alignItems: "center", justifyContent: 'center' }}>
                        <Text note style={{ fontSize: 12 }}>Already a member ? </Text>
                        <TouchableOpacity onPress={(e) => this.props.navigation.navigate('Login')}>
                            <Text note style={{ fontSize: 12, color: 'forestgreen' }}>  Log in</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}

