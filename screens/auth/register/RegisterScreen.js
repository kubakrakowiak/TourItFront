import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import Button from '../../../components/ui/Button';
import InputText from '../../../components/ui/InputText';
import PlainButton from '../../../components/ui/PlainButton';




const RegistrationScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function loginHandler() {
        alert(email + "\n"+ password);
      }

    return (

        <View style={styles.container}>

            <View style={styles.logoContainer}>
                <Image style={styles.image} source={require('../../../assets/smallLogo.png')}/>
            </View>

            <View style={styles.imagePaperPlane}>
                <Image style={styles.image} source={require('../../../assets/paperPlane.png')}/>
            </View>

            <View style={styles.registerContainer}>
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
           

            
            <View>
                <Text style={styles.registerText}>Still don't have an account?</Text>
            </View>

            <View>
            <PlainButton underline={true}>
                Register Here!
            </PlainButton>
            </View>
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
        top: 0,
        marginTop: 30,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        paddingLeft: '50%',
        
       
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
        width: '100%',
        flex: 3,
        alignContent: 'center',
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
        width: 220,
        height: 66,
        flexShrink: 0,
    },
    imagePaperPlane: {
        flex: 2,
        width: 100,
        height: 100,
        transform: [{rotate: '15.179deg'}],
        flexShrink: 0,
    },
});


export default RegistrationScreen;
