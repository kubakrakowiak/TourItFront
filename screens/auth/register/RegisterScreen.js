import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, SafeAreaView } from 'react-native';

const RegistrationScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image source={('')} style={styles.logo} />
                    <Text style={styles.headerText}>Register here!</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="email"
                    placeholderTextColor="#aaaaaa"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="confirm password"
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>Already have an account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.footerButton}>Login Here!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    headerContainer: {
        marginBottom: 48,
        alignItems: 'center',
    },
    logo: {
        width: 80, // Adjust according to your logo's aspect ratio
        height: 80, // Adjust according to your logo's aspect ratio
        resizeMode: 'contain',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    input: {
        height: 50,
        width: '90%',
        backgroundColor: 'white',
        marginBottom: 16,
        paddingLeft: 20,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#dddddd',
    },
    button: {
        backgroundColor: '#4CAF50',
        borderRadius: 25,
        width: '90%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerText: {
        color: '#aaaaaa',
        marginRight: 5,
    },
    footerButton: {
        color: '#1292B4',
        fontWeight: 'bold',
    },
});

export default RegistrationScreen;
