import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Button from "../../../components/ui/Button";
import InputText from "../../../components/ui/InputText";
import PlainButton from "../../../components/ui/PlainButton";

const { width, height } = Dimensions.get("window");

const RegistrationScreen = ({navigation}) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function navigateGoBack() {
    navigation.goBack();
  }
  function loginHandler() {
    alert(username + "\n" + password);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.image}
            source={require("../../../assets/smallLogo.png")}
          />
        </View>
        

        <View style={styles.registerBox}>
          <View style={styles.registerTextContainer}>
            <Text style={styles.registerHereText}>Register</Text>
            <Text style={styles.registerHereTextHere}>here!</Text>
          </View>
          <View style={styles.imagePaperContainer}>
            <Image
              style={styles.imagePaper}
              source={require("../../../assets/paperPlane.png")}
            />
          </View>
        </View>

        <View style={styles.registerContainer}>
          <InputText
            value={username}
            onUpdateValue={setUserName}
            textInputConfig={{
              placeholder: "login",
              keyboardType: "default",
            }}
          />

          <InputText
            value={email}
            onUpdateValue={setEmail}
            textInputConfig={{
              placeholder: "email",
              secureTextEntry: true,
              keyboardType: "email-address",
            }}
          />

          <InputText
            value={password}
            onUpdateValue={setPassword}
            textInputConfig={{
              placeholder: "password",
              secureTextEntry: true,
              keyboardType: "default",
            }}
          />

          <InputText
            textInputConfig={{
              placeholder: "confirm password",
              secureTextEntry: true,
              keyboardType: "default",
            }}
          />

          <Button onPress={loginHandler}>Sign Up</Button>

          <View>
            <Text style={styles.registerText}>Already have an account?</Text>
          </View>

          <View>
            <PlainButton onPress={navigateGoBack} underline={true}>Login Here!</PlainButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: height *0.2,
  },
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
  logoContainer: {
    flex: 1,
    marginTop: 30,
    alignSelf: "flex-end",
    paddingRight: "5%",
  },
  logo: {
    width: 100,
    height: undefined,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  registerBox: {
    marginTop: "5%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: "15%",
  },
  registerTextContainer: {
    flex: 1,
    
  },
  registerHereText: {
    color: "#4D4D4D",
    textAlign: "left",
    fontFamily: "Poppins-SemiBold",
    fontSize: 40,
    letterSpacing: 3.57,
    top: 10,
  },
  registerHereTextHere: {
    color: "#FEA02F",
    textAlign: "left",
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    letterSpacing: 1.7,
  },
  registerContainer: {
    flex: 2.5,
    alignContent: "center",
    alignItems: "center",
    top: height*0.05,
  },
  registerText: {
    color: "#626262",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: 2.4,
    textTransform: "capitalize",
  },
  registerButton: {
    color: "#1292B4",
    fontWeight: "bold",
  },
  image: {
    width: 125,
    height: 66,
    margin: 10,
  },
  imagePaperContainer: {
    flex: 0.5,
    width: 100,
    height: undefined,
    paddingRight: "15%",
    alignItems: "flex-end",
  },
  imagePaper: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default RegistrationScreen;
