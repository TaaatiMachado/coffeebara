import { useRoute } from "@react-navigation/native"
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native"
import roast from '../../assets/icons/coffee_bean.png'
import { useContext } from "react";
import { ProdContext } from "../../context/Products";

const Details = () => {
    const prodRoute = useRoute().params;
    const { qnt, addProd } = useContext(ProdContext)

    console.log(prodRoute)
    return (
        <View style={style.card} key={prodRoute.id}>
            <Image style={style.img} source={prodRoute.img} style={style.img} />
            <View style={style.cardBody}>
                <View style={style.itemContainer}>
                    <Text style={style.cardTitle}>{prodRoute.name}</Text>
                    <Text style={style.rating}>&#x2B50; {prodRoute.rating}</Text>
                </View>
                <Text style={style.description}>{prodRoute.description}</Text>

                <View style={style.btnContainer}>
                    <Text style={style.cardPrice}>{prodRoute.price}</Text>
                    <TouchableOpacity style={style.btn} onPress={() => addProd(prodRoute.item)}>
                        <Text style={style.textBtn}>+ Add </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>


    )
}

export default Details

const style = StyleSheet.create({
    card: {
        backgroundColor: '#2d1e16',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
        maxHeight: 350,
        objectFit: 'contain',
        zIndex: 99
    },
    cardBody: {
        backgroundColor: "#f6f1ea",
        paddingTop: 185,
        position: 'relative',
        top: -185,
        borderRadius: 15,
        padding: 20,
        minWidth: 150,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.6,
        minHeight: '52%'

    },
    cardTitle: {
        fontSize: 28,
        marginVertical: 5,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 18
    },
    itemContainer: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'middle',
        justifyContent: 'space-between'
    },
    rating: {
        fontSize: 22,
        alignSelf: "center"
    },
    cardPrice: {
        fontSize: 26,
        fontWeight: "700",
        margin: 15,
        textAlign: 'right',
        alignSelf: 'center'

    },
    btnContainer: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'middle',
        position: "absolute",
        bottom: 15
    },
    btn: {
        flex: 1,
    },
    textBtn: {
        color: '#FFF',
        backgroundColor: '#be9a6e',
        textAlign: 'center',
        borderRadius: 6,
        padding: 14,
        fontWeight: '700',
        fontSize: 22,
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