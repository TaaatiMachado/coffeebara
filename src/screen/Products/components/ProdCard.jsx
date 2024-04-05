import React, { useContext } from "react";
import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProdContext } from "../../../context/Products";

const ProdCard = ({ item, navigation }) => {
    
    const { qnt, addProd } = useContext(ProdContext)

    return (
        <View style={style.card}>
            <TouchableOpacity style={style.img} onPress={()=> navigation.navigate('Details', {item})}>
            <Image source={item.image_url}  style={style.img} accessibilityLabel={item.name} />
            </TouchableOpacity>
            <View style={style.cardBody}>
                <Text style={style.cardRating}>{item.rating}&#x2B50;</Text>
                <Text style={style.cardTitle}>{item.name}</Text>
                <Text style={style.cardPrice}>{item.price}</Text>
                    <TouchableOpacity accessibilityLabel="Add to cart" onPress={() => addProd(item)} style={style.button}>
                        <Text style={style.textBtn}>+ ADD </Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProdCard

const style = StyleSheet.create({
    card: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        maxWidth: 180,
        maxHeight: 300,

    },
    img: {
        maxWidth: 150,
        maxHeight: 120,
        objectFit: "contain",
        zIndex: 99,
    },
    cardBody: {
        backgroundColor: "#f6f1ea",
        paddingTop: 75,
        position: 'relative',
        top: -85,
        borderRadius: 15,
        padding: 20,
        minWidth: 150,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.6,
    },
    cardTitle: {
        fontSize: 18,
        marginVertical: 10,
        minHeight: 50
    },
    cardRating: {
        textAlign: "right",
        right: -12
    },
    cardPrice: {
        fontSize: 18,
        marginBottom: 15,
        fontWeight: "700"
    },
    textBtn: {
        color: '#FFF',
        backgroundColor: '#be9a6e',
        textAlign: 'center',
        borderRadius: 6,
        padding: 8,
        fontWeight: '700',
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.6,
    }
})