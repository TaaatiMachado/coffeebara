import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native"
import shimmer from '../../assets/shimmer.gif'

const GrainDetailsShimmer = () => {

    return (
        <View style={style.card}>

            <TouchableOpacity style={style.wrapper}>
                <Image source={shimmer} style={style.image} />
                <View style={style.info}>
                    <Image source={shimmer} style={style.title} />
                    <Image source={shimmer} style={style.region} />
                    <Image source={shimmer} style={style.price} />

                </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.btn}>
                <Image source={shimmer} style={style.btn} />
            </TouchableOpacity>

        </View>


    )
}

export default GrainDetailsShimmer

const style = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
        margin: 10
    },
    card: {
        backgroundColor: '#f0eded',
        borderRadius: 15,
        gap: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },

    title: {
        width: 200,
        height: 25,
        marginBottom: 10
    },
    price: {
        width: 200,
        height: 20,
        marginBottom: 10

    },
    region: {
        width: 200,
        height: 15,
        marginBottom: 10

    },
    btn: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    info:{
        
    }

})