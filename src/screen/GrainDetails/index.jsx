import { useRoute } from "@react-navigation/native"
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native"
import roast from '../../assets/icons/coffee_bean.png'

const GrainDetails = () => {

    const { qnt, addProd } = useContext(ProdContext)

    const RenderRoast = () => {
        const roastList = [];

        for (let i = 0; i< grainRoute.roast_level; i++){
            roastList.push (
                <Image source={roast} style={{width: 15, height: 15, alignSelf: 'center' }}/>
                                )
        }
        return roastList
    }

    const grainRoute = useRoute().params.item;
    //console.log(grainRoute)
    return (
        <View style={style.card} key={grainRoute.id}>
            <Image style={style.img} source={{ uri: `${grainRoute.image_url.split('webp')[0]}png` }} style={style.img} />
            <View style={style.cardBody}>
                <Text style={style.cardTitle}>{grainRoute.name}</Text>
                <Text style={style.description}>{grainRoute.description}</Text>
                <View style={style.itemContainer}>
                    <Text style={style.itemTitle}>Roast level:</Text>
                    <RenderRoast/>
                </View>
                <View style={style.itemContainer}>
                    <Text style={style.itemTitle}>Flavors:</Text>
                    {grainRoute.flavor_profile.map((item) => (<Text style={style.item}>{item}; </Text>))}
                </View>
                <View style={style.itemContainer}>
                    <Text style={style.itemTitle}>Region:</Text>
                    <Text style={style.item}>{grainRoute.region}</Text>
                </View>
                <View style={style.btnContainer}>
                    <Text style={style.cardPrice}>${grainRoute.price}</Text>
                    <TouchableOpacity style={style.btn} onPress={() => addProd(item)}>
                        <Text style={style.textBtn}>+ Add </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>


    )
}

export default GrainDetails

const style = StyleSheet.create({
    card: {
        backgroundColor: '#2d1e16',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
        maxHeight: 400,
        objectFit: 'cover',
        zIndex: 99
    },
    cardBody: {
        backgroundColor: "#f6f1ea",
        paddingTop: 175,
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
        minHeight: '49%'

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
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },
    item: {
        fontStyle: 'italic',
        fontSize: 18
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