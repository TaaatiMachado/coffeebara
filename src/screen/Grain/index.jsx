import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ProdContext } from "../../context/Products";
import GrainDetailsShimmer from "../GrainDetailsShimmer";

const Grain = ({ navigation }) => {

    const [grain, setGrain] = useState([])
    const [isLoading, setLoading] = useState(true)
    const { qnt, addProd } = useContext(ProdContext)


    useEffect(() => {
        axios.get("https://fake-coffee-api.vercel.app/api?limit=10").then(response => {
            setGrain(response.data);
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return <>
            <View style={style.list}>
                <GrainDetailsShimmer/>
                <GrainDetailsShimmer/>
                <GrainDetailsShimmer/>
                <GrainDetailsShimmer/>
                <GrainDetailsShimmer/>
                <GrainDetailsShimmer/>
            </View>
        </>;
    }



    return (
        <>
            <Text style={style.header}>Coffeebara Grains</Text>

            <FlatList data={grain}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                    <View key={item.id} style={style.card}>

                        <TouchableOpacity style={style.wrapper} onPress={() => navigation.navigate('Grain Details', { item })}>
                            <Image source={{ uri: `${item.image_url.split('webp')[0]}png` }} style={style.image} />

                            <View style={style.info}>
                                <Text style={style.title}>{item.name}</Text>
                                <Text style={style.region}>From: {item.region}</Text>
                                <Text style={style.price}>${item.price}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.btn} onPress={() => addProd(item)}>
                            <Text style={style.btnText}>+</Text>
                        </TouchableOpacity>

                    </View>
                )}
                style={style.list}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-around', gap: 15 }} />

        </>

        

    )
}

export default Grain

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
        gap: 10  
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
    },
    card: {
        backgroundColor: '#f6f1ea',
        borderRadius: 15,
        gap: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    image: {
        width: 80,
        height: 80,
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
    price: {
        fontSize: 16
    },
    region: {

    },
    btn: {
        backgroundColor: '#be9a6e',
        width: 40,
        height: 40,
        alignItems: 'center',
        borderRadius: 10,
    },
    btnText: {
        color: '#FFF',
        fontSize: 35,
        marginTop: -5
    }
})