import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/auth/register/LoginScreen";
import RegisterScreen from "./screens/auth/register/RegisterScreen";
import WelcomePage from "./screens/authenticaded/WelcomePage";

export default function App() {
  return <WelcomePage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
