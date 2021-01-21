import React from 'react'
import {StyleSheet, View} from 'react-native'

export default function Tiles({active}) {
    return(
        <View style={active ? styles.active : styles.normal}></View>
    )
}

const styles = StyleSheet.create({
    normal:{
        width: 10,marginHorizontal:2, borderRadius: 100, backgroundColor: 'green', height: 10,
    },
    active:{
        width: 50, borderRadius: 25, height: 10, backgroundColor: 'forestgreen' 
    }
})