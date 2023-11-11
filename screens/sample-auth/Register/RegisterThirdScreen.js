import { StyleSheet, Text, View } from "react-native";
import Button from "../../../components/ui/Button";
import { useContext, useState } from "react";
import AuthInput from "../../../components/ui/AuthInput";
import { Colors } from "../../../constants/styles";
import { AuthContext } from "../../../store/auth-context";

export default function RegisterThirdScreen({ route, navigation }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { name, lastname, dateOfBirth } = route.params;
  const authCtx = useContext(AuthContext);

  function registerHandler() {
    // name, lastname, dateOfBirth, password, confirmPassword
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
          value={password}
          secure
          label={"Password"}
          onUpdateValue={setPassword}
          backgroundColor={Colors.secondary500}
        />
        <AuthInput
          value={confirmPassword}
          secure
          label={"Confirm Password"}
          onUpdateValue={setConfirmPassword}
          backgroundColor={Colors.secondary500}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button color={Colors.secondary800} onPress={registerHandler}>
          Next
        </Button>
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
