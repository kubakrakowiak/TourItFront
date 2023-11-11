import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, Image } from 'react-native';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'path_to_your_logo.png' }}
                style={styles.logo}
            />
            <TextInput
                placeholder="email"s
                style={styles.input}
                keyboardType="email-address"
            />
            <TextInput
                placeholder="password"
                style={styles.input}
                secureTextEntry
            />
            <Button
                title="Sign In"
                onPress={() => console.log('Sign In pressed')}
            />
            <Text style={styles.registerText}>
                Still don’t have an account?
                <Text style={styles.registerLink}> Register Here!</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ecf0f1',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    registerText: {
        marginTop: 20,
    },
    registerLink: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;
