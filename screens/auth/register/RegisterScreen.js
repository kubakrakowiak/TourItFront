import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import Button from "../../../components/ui/Button";
import InputText from "../../../components/ui/InputText";
import PlainButton from "../../../components/ui/PlainButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AuthContext } from "../../../store/auth-context";
import { registerUser } from "../../../util/http";

const RegistrationScreen = ({ navigation }) => {
  const authCtx = useContext(AuthContext);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userlastname, setLastName] = useState("");

  function navigateGoBack() {
    navigation.goBack();
  }
  async function registerHandler() {
    try {
      const registerResponse = await registerUser({
        username: username,
        email: email,
        password: password,
        profile: { name: name, last_name: userlastname },
      });
      authCtx.authenticate(registerResponse.token);
    } catch (error) {
      console.error("Registration error:", error);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
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
            <View>
              <Image
                style={styles.imagePaper}
                source={require("../../../assets/paperPlane.png")}
              />
            </View>
          </View>
        </View>

        <View style={styles.registerContainer}>
          <InputText
            value={name}
            onUpdateValue={setName}
            textInputConfig={{
              placeholder: "name",
              keyboardType: "default",
            }}
          />
          <InputText
            value={userlastname}
            onUpdateValue={setLastName}
            textInputConfig={{
              placeholder: "last name",
              keyboardType: "default",
            }}
          />
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

          <Button onPress={registerHandler}>Sign Up</Button>

          <View>
            <Text style={styles.registerText}>Already have an account?</Text>
          </View>

          <View style={styles.addMarginBottom}>
            <PlainButton onPress={navigateGoBack} underline={true}>
              Login Here!
            </PlainButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
  logoContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: "60%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  registerBox: {
    marginTop: 60,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: "15%",
    marginBottom: 70,
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
  addMarginBottom: {
    marginBottom: 30,
  },
});

export default RegistrationScreen;
