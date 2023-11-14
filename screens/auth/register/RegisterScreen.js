import React, {useState} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
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



            <View style={styles.registerBox}>

            <View style={styles.registerTextContainer}>

            <Text style={styles.registerHereText}>Register</Text>
            <Text style={styles.registerHereTextHere}>here!</Text>

            </View>
            <View style={styles.imagePaperContainer}>

            <View>
                <Image style={styles.imagePaper} source={require('../../../assets/paperPlane.png')}/>
            </View>

            </View>


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
    },
    logoContainer: {
        top: 0,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: '60%',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    registerBox:{
        marginTop: 60,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingLeft: '15%'
        
    },
    registerTextContainer:{
        flex:1,
    },
    registerHereText:{
        color: '#4D4D4D',
        textAlign: 'left',
        fontFamily: 'Poppins',
        fontSize: 42,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
        letterSpacing: 3.57,
        
    },
    registerHereTextHere:{
        color: '#FEA02F',
        textAlign: 'left',
        fontFamily: 'Poppins',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
        letterSpacing: 1.7,
    },
    registerContainer: {
        width: '100%',
        flex: 2,
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
        width: 125,
        height: 66,  
        margin:10,
    },
    imagePaperContainer: {
        flex:0.5,
        width: 100,
        height: 100,  
        paddingRight: "15%",
        alignItems: 'flex-end'
    },
    imagePaper: {
        width: 100,
        height: 100,  
        margin:10,

    },
});


export default RegistrationScreen;
