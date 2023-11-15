import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/auth/register/LoginScreen";
import RegisterScreen from "./screens/auth/register/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Colors } from "./constans/styles.js";
import WelcomeScreen from "./screens/sample-auth/WelcomeScreen";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        contentStyle: { backgroundColor: "red" },
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          cardStyle: { backgroundColor: Colors.darkgreen },
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          cardStyle: { backgroundColor: Colors.darkgreen },
        }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "red" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "red" },
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={WelcomeScreen}
        options={{
          cardStyle: { backgroundColor: Colors.darkgreen },
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthenticatedStack />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
