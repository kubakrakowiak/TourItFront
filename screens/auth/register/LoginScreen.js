import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import Button from '../../../components/ui/Button';
import InputText from '../../../components/ui/InputText';




const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function loginHandler() {
        alert(email + "\n"+ password);
      }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.image} source={require('../../../assets/logo_TourIT.png')}/>
            </View>
            <InputText value={email} onUpdateValue={setEmail}
            textInputConfig={{
                placeholder:"email",
                keyboardType:"email-address",
            }}
            />
            
            <InputText value={password} onUpdateValue={setPassword}
            textInputConfig={{
                placeholder: "password",
                secureTextEntry: true,
                keyboardType: 'default',
            }}
           />

            <Button onPress={loginHandler}>
                Sign In
            </Button>

            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>Still don't have an account?</Text>
            </View>
            <View>
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
    
    registerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    registerText: {
        color: '#626262',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        letterSpacing: 2.4,
        textTransform: 'capitalize'
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
