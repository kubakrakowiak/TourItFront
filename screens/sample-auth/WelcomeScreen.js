import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";
import Button from "../../components/ui/Button";

export default function WelcomeScreen({ navigation }) {
  function createAccountHandler() {
    navigation.navigate("RegisterFirst");
  }
  function loginHandler() {
    navigation.navigate("Login");
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Oh, hey you!</Text>
        <Text style={styles.subTitle}>
          We hope you will have a good time here!
        </Text>
      </View>
      <Button onPress={createAccountHandler}>Create an Account</Button>
      <Button onPress={loginHandler} color={Colors.primary500}>
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
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
