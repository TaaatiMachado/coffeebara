
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import logo from '../../assets/logo_capi.jpg'

const Home = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.screen} >
            <View style={styles.greeting}>
                <Image source={logo} style={styles.img} />

                <View style={styles.btns}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textBtn}>Login</Text>
                    </TouchableOpacity>

                    {/*<TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('SignUp') }>
                        <Text style={styles.textBtn}>Sign up</Text>
    </TouchableOpacity>*/}
                </View>
            </View>
            <Text style={styles.title}>Coffeebara</Text>

        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#2d1e16',

    },
    greeting: {
        paddingVertical: '50%',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'OleoScript-Regular',
        color: "#FFF",
        position: 'absolute',
        bottom: 18,
        left: 0,
        right: 0
    },
    btns: {
        gap: 20
    },
    button: {
        borderRadius: 8,
        backgroundColor: '#be9a6e',
        shadowColor: 'rgba(0, 0, 0, 0.12)',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
        padding: 10,
        width: 250,
        alignSelf: 'center',
    },
    textBtn: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
    },
    img: {
        maxWidth: '100%',
        maxHeight: 200,
        objectFit: 'contain',
        marginBottom: 0,
    }
})