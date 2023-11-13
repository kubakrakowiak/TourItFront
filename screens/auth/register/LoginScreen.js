import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import Button from '../../../components/ui/Button';


const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.image} source={require('../../../assets/logo_TourIT.png')}/>
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
            <Button>
                Sign In
            </Button>
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
        backgroundColor: '#F1F1F1',
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
    image: {
        width: 237,
        height: 177,
        margin: 20,
    }
});

export default LoginScreen;
