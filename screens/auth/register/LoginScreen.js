import React, {useContext, useState} from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Button from "../../../components/ui/Button";
import InputText from "../../../components/ui/InputText";
import PlainButton from "../../../components/ui/PlainButton";
import {AuthContext} from "../../../store/auth-context";
import {loginUser} from "../../../util/http";

const LoginScreen = ({navigation}) => {

  const authCtx = useContext(AuthContext);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function navigateToRegister() {
    navigation.navigate("Register");
  }
  async function loginHandler() {
    try {

      const loginResponse = await loginUser({
        username:username,
        password:password
      });
      authCtx.authenticate(loginResponse.token);
    }catch (error) {
      console.error('Login error: ', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/logo_TourIT.png")}
        />
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
          value={password}
          onUpdateValue={setPassword}
          textInputConfig={{
            placeholder: "password",
            secureTextEntry: true,
            keyboardType: "default",
          }}
        />

        <Button onPress={loginHandler}>Sign In</Button>

        <View>
          <Text style={styles.registerText}>Still don't have an account?</Text>
        </View>

        <View>
          <PlainButton onPress={navigateToRegister} underline={true}>Register Here!</PlainButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    marginTop: 30,
    flex: 4,
    alignItems: "1",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
  },

  registerContainer: {
    width: "100%",
    flex: 3,
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
    width: 237,
    height: 177,
    margin: 20,
  },
});

export default LoginScreen;
