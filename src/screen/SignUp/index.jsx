

import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import logo from '../../assets/logo_capi.jpg'

const SignUp = ({ navigation }) => {
    const [name, onChangeName] = useState('');
    const [password, onChangePassword] = useState('');
    const [confirmPassword, onChangeConfirmPassword] = useState('');
    const [email, onChangeEmail] = useState('');

    return (
        <View style={styles.screen}>
            <View style={styles.greeting}>
                <View style={styles.top}>
                    <Image source={logo} style={styles.img} />
                    <Text style={styles.text}>Sign up to order your coffee, bara-mate!</Text>
                </View>

                <View style={styles.form}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeName}
                        value={name}
                        placeholder='Enter your username'
                        placeholderTextColor={'#BCBCBC'}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholder="Enter your e-mail"
                        placeholderTextColor={'#BCBCBC'}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={password}
                        placeholder="Enter your Password"
                        placeholderTextColor={'#BCBCBC'}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Confirm your password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeConfirmPassword}
                        value={confirmPassword}
                        placeholder="Re-enter your password"
                        placeholderTextColor={'#BCBCBC'}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tab')}>
                    <Text style={styles.textBtn}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Coffeebara</Text>
        </View>
    );
}

export default SignUp

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#2d1e16',
        paddingHorizontal: 35, 
        flex: 1
    },
    greeting: {
        paddingVertical: 20,        
    },
    top: {
        justifyContent: "center",
        maxHeight: "30%"
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: "#FFF",
        lineHeight: 22,
        marginBottom: 0
    },
    label: {
        fontSize: 16,
        color: "#FFF",
        lineHeight: 22,
        marginBottom: 5,
        marginTop: 12

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
        marginTop: 30
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
})