import { StyleSheet, Text, View } from "react-native"
import useTop from "../../hooks/useTop";
import Products from "./components/Products";
import { ScrollView } from "react-native-gesture-handler";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { ProdContext } from "../../context/Products";


const ProdHome = ({ navigation }) => {

    const [welcome, message] = useTop();

    const { user } = useContext(AuthContext)
    const { qnt } = useContext(ProdContext)



    return (
        <ScrollView>
            <View style={styles.greeting}  >
                <Text style={styles.title} >{welcome} {user?.name}</Text>
                <Text style={styles.msg}>{message}</Text>
            </View>
            <View style={styles.screen}>
                <Products prodName="Coffee Drinks" info="coffee_drinks" navigation={navigation}/>
                <Products prodName="Non Coffee Drinks" info="noncoffee_drinks" navigation={navigation}/>
                <Products prodName="Sides" info="sides" navigation={navigation}/>
            </View>
        </ScrollView>
    )
}

export default ProdHome;

const styles = StyleSheet.create({
     screen: { 
        flex: 1, 
    },
    
     greeting: {
        padding: 15,

    },
    title: {
        fontSize: 30,
        lineHeight: 36,
        color: '#2d1e16',
        fontFamily: 'Quicksand-SemiBold',
        marginBottom: 8,

    },
    msg: {
        fontSize: 18,
        lineHeight: 20,
        color: '#2d1e16',
        fontFamily: 'Quicksand-Regular',
        marginHorizontal: 8,
    }
    })