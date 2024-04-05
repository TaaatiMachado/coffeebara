import React, { useEffect, useState } from "react"
import { Image, StyleSheet, Text, View } from "react-native";

import logo from '../../../assets/logo_capi.jpg'

const TopEl = ()=> {

    return (
        <View style={topStyles.topEl} >
            <View style={topStyles.logo}>
                <Image source={logo} style={topStyles.imgEl} />
                <Text style={topStyles.logoTitle}>Coffeebara</Text>
            </View>
        </View>
    )
    }


const topStyles = StyleSheet.create({
    topEl: {
        backgroundColor: '#2d1e16',
        paddingTop: 0,
    },
    logo:{
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
        gap: 5,

    },
    logoTitle: {
        color: 'white',
        fontSize: 50,
        fontFamily: 'OleoScript-Regular'
    },
    imgEl: {
        width: '40%',
        maxHeight: 90,
        objectFit: 'contain',
        paddingBottom: 20,
        margin: 0,

    },

})

export default TopEl;