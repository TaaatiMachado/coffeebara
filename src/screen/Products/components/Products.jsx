import { FlatList, StyleSheet, Text, View } from "react-native";
import ProdCard from "./ProdCard";
import useProducts from "../../../hooks/useProducts";

const Products = ({prodName, info, navigation})=>{
    const products = useProducts();
    //console.log (products);
    //console.log (products[info]);
    return (
        <View style={style.container}>
        <Text style={style.title}>{prodName}</Text>
        <FlatList data={products[info]}
        keyExtractor={({id})=> id}
        renderItem={({item}) => <ProdCard item={item} navigation={navigation} />}
        style={style.list}
        horizontal={true}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'space-around', gap: 15}} />
        </View>
    )
}

export default Products

const style = StyleSheet.create({
    container:{
        padding: 15,
    },
    title:{
        fontSize:25,
        fontWeight: "700",
        color:"#2d1e16",
        backgroundColor: '#f2dbbf',
        marginHorizontal: -15,
        padding: 5,
        paddingLeft: 15,
        borderStyle:"solid",
        borderLeftWidth: 5,
        borderColor: "#2d1e16"
    },
    list: {
        gap: 15,
        
    }
})