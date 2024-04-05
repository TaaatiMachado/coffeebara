import { useContext, useEffect, useState } from "react"
import { Alert, Image, StyleSheet, Text, TouchableOpacity } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { ProdContext } from "../../context/Products"
import { View } from "react-native"

const Cart = ({ navigation }) => {

    const { cart, qnt, setCart, setQnt } = useContext(ProdContext)

    if (qnt == 0) {
        return (
            <>
                <Text style={style.header}>Your Cart</Text>
                <View style={style.empty}>
                    <Text style={style.emptyText}> Nothing to show here... yet!</Text>
                    <TouchableOpacity style={style.btn} /*onPress={navigation.navigate('Tab')}*/>
                        <Text style={style.textBtn}>Let's get something</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }

    return (
        <>
            <Text style={style.header}>Your Cart</Text>
            <FlatList data={cart}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                    <View key={item.id} style={style.card}>
                        <Image source={item.image_url} style={style.image} />
                        <View style={style.cardBody}>
                            <Text style={style.cardTitle}>{item.name}</Text>
                            <Text style={style.price}>{item.price}</Text>
                        </View>
                    </View>
                )}
                style={style.list}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', gap: 15 }} />
            <TouchableOpacity style={style.btn} onPress={() => {
                setCart([])
                setQnt('')
                Alert.alert('Order finished!')
                navigation.navigate('Products')
            }}>
                <Text style={style.textBtn}>Finish my order</Text>
            </TouchableOpacity>
        </>
    )
}


export default Cart


const style = StyleSheet.create({
    header: {
        fontSize: 30,
        fontFamily: 'OleoScript-Regular',
        color: '#FFF',
        backgroundColor: '#2d1e16',
        textAlign: 'center',
        padding: 15
    },
    list: {
        padding: 15,
        backgroundColor: '#fff',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
    },
    card: {
        backgroundColor: '#f2efef',
        borderRadius: 15,
        gap: 7,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    image: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
    },

    title: {
        fontSize: 20,
        fontFamily: 'Quicksand-Bold',
        color: '#2d1e16',
        borderLeftColor: '#2d1e16',
        borderLeftWidth: 3,
        paddingLeft: 7
    },
    cardBody: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        minWidth: "75%"
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 16
    },
    btn: {
        backgroundColor: '#be9a6e',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        minWidth: '80%',
        padding: 10,
        margin: 10
    },
    textBtn: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    icon: {
        width: 25,
        height: 25,
    },
    empty: {
        minHeight: '95%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})