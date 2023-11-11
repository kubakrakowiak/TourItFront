import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/ui/Button";
import { useContext, useState } from "react";
import AuthInput from "../../components/ui/AuthInput";
import { Colors } from "../../constants/styles";
import { AuthContext } from "../../store/auth-context";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authCtx = useContext(AuthContext);

  function loginHandler() {
    authCtx.authenticate("test");
  }

  return (
    <View style={styles.authContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Oh, hey you!</Text>
        <Text style={styles.subTitle}>
          We hope you will have a good time here!
        </Text>
      </View>
      <View style={styles.formContainer}>
        <AuthInput
          value={email}
          keyboardType={"email-address"}
          label={"Email"}
          onUpdateValue={setEmail}
        />
        <AuthInput
          value={password}
          label={"Password"}
          secure
          onUpdateValue={setPassword}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={loginHandler}>Login</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    margin: 28,
  },
  formContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 32,
  },
  subTitle: {
    color: Colors.primary200,
    textAlign: "center",
    fontSize: 16,
    width: 200,
  },
});
