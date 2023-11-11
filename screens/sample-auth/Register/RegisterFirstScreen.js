import { StyleSheet, Text, View } from "react-native";
import Button from "../../../components/ui/Button";
import { useState } from "react";
import AuthInput from "../../../components/ui/AuthInput";
import { Colors } from "../../../constants/styles";

export default function RegisterFirstScreen({ navigation }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  function registerHandler() {
    navigation.navigate("RegisterSecond", {
      name: name,
      lastname: lastname,
    });
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
          value={name}
          label={"Name"}
          onUpdateValue={setName}
          backgroundColor={Colors.secondary500}
        />
        <AuthInput
          value={lastname}
          label={"Lastname"}
          onUpdateValue={setLastname}
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
