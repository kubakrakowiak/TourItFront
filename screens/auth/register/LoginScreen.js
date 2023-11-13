import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={{uri: 'asset:/logo.jpg'}} style={styles.logo} />
                <Text style={styles.logoText}>TourIT</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="email"
                placeholderTextColor="#aaaaaa"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="password"
                placeholderTextColor="#aaaaaa"
                secureTextEntry
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>Still don't have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.registerButton}>Register Here!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        width: '80%',
        backgroundColor: 'white',
        marginBottom: 10,
        paddingLeft: 15,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#dddddd',
    },
    button: {
        backgroundColor: '#1292B4',
        borderRadius: 25,
        width: '80%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    registerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    registerText: {
        marginRight: 5,
        color: '#aaaaaa',
    },
    registerButton: {
        color: '#1292B4',
        fontWeight: 'bold',
    },
});

export default LoginScreen;
