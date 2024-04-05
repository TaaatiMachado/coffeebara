
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import logo from '../../assets/logo_capi.jpg'
import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth";

const Login = ( { navigation } ) => {
    const [user, onChangeUser] = useState('');
    const [password, onChangePassword] = useState('');
    const [error, setError] = useState ('');

    const { login } = useContext(AuthContext);

    function logining(){
        const result = login(user, password)
        if (result === 'ok'){
            navigation.navigate('Tab')
        } else {
            console.log(error)
            setError ("Wrong user or password. Please try again.")
        }
    }

    return (
        <SafeAreaView style={styles.screen} >
            <View style={styles.greeting}>
                <Image source={logo} style={styles.img} />
                <Text style={styles.title}>Coffeebara</Text>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeUser}
                        value={user}
                        placeholder='Username'
                        placeholderTextColor={'#BCBCBC'}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={password}
                        placeholder="Password"
                        placeholderTextColor={'#BCBCBC'}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => logining()}>
                        <Text style={styles.textBtn}>Login</Text>
                    </TouchableOpacity>

                    <Text style={styles.error}> {error} </Text>
                </View>

                <View style={styles.links}>
                    <TouchableOpacity >
                        <Text style={styles.textLink} >Forgot your password?</Text>
                    </TouchableOpacity>
                    <Text style={styles.textLink} >|</Text>
                    {/*<TouchableOpacity>
                        <Text style={styles.textLink} > Sign Up </Text>
    </TouchableOpacity>*/}
                </View>
                
            </View>
        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#2d1e16',

    },
    greeting: {
        paddingVertical: '40%',
        paddingHorizontal: 35
    },
    title: {
        textAlign: 'center',
        fontSize: 70,
        fontFamily: 'OleoScript-Regular',
        color: "#FFF",
        lineHeight: 80

    },
    form: {
        gap: 20
    },
    input: {
        borderRadius: 8,
        backgroundColor: '#F6F6F6',
        textAlign: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
        padding: 12,
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
        padding: 12,
        width: '100%',
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
        maxHeight: 120,
        objectFit: 'contain',
        marginBottom: 0,
    },
    error: {
        color: 'red',
        textAlign: 'center'

    },
    links: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        padding: 15
    },
    textLink: {
        color: 'white'
    }
})