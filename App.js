import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import LoginScreen from "./screens/auth/register/LoginScreen";
import RegisterScreen from "./screens/auth/register/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "./constans/styles.js";
import WelcomeScreen from "./screens/authenticaded/WelcomeScreen";
import AppLoading from "expo-app-loading";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { useContext, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import ProfileScreen from "./screens/authenticaded/ProfileScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import PlaceScreen from "./screens/authenticaded/PlaceScreen.js";
import LocationPicker from "./components/Places/LocationPicker";
import FullMapScreen from "./screens/authenticaded/FullMapScreen";
import fullMapScreen from "./screens/authenticaded/FullMapScreen"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
                contentStyle: { backgroundColor: "red" },
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
                options={{
                    cardStyle: { backgroundColor: Colors.darkgreen },
                }}
            />

        </Stack.Navigator>
    );
}

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: Colors.darkgreen },
            }}
            tabBarOptions={{
                showLabel: false,
                activeTintColor: Colors.orange500,
            }}
        >
            <Tab.Screen
                name="Home"
                component={WelcomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="search" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Map"
                component={FullMapScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="map-marked-alt" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Area"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="heart" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function Navigation() {
    const authCtx = useContext(AuthContext);
    return (
        <NavigationContainer>
            {authCtx.isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
        </NavigationContainer>
    );
}

function Root() {
    const [isTryingLogin, setIsTryingLogin] = useState(true);

    const authCtx = useContext(AuthContext);

    const [fontsLoaded] = useFonts({
        "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
        "Poppins-BlackItalic": require("./assets/fonts/Poppins-BlackItalic.ttf"),
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
        "Poppins-BoldItalic": require("./assets/fonts/Poppins-BoldItalic.ttf"),
        "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraBoldItalic": require("./assets/fonts/Poppins-ExtraBoldItalic.ttf"),
        "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-ExtraLightItalic": require("./assets/fonts/Poppins-ExtraLightItalic.ttf"),
        "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
        "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
        "Poppins-LightItalic": require("./assets/fonts/Poppins-LightItalic.ttf"),
        "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
        "Poppins-MediumItalic": require("./assets/fonts/Poppins-MediumItalic.ttf"),
        Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-SemiBoldItalic": require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),
        "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
        "Poppins-ThinItalic": require("./assets/fonts/Poppins-ThinItalic.ttf"),
    });

    useEffect(() => {
        async function fetchToken() {
            const storedToken = await AsyncStorage.getItem("token");

            if (storedToken) {
                authCtx.authenticate(storedToken);
            }

            setIsTryingLogin(false);
        }

        fetchToken();
    }, []);

    if (isTryingLogin || !fontsLoaded) {
        return <AppLoading />;
    }
    const insets = useSafeAreaInsets();

    return (
        <View style={{ flex: 1, paddingTop: insets.top }}>
            <Navigation />
        </View>
    );
}
export default function App() {
    return (
        <SafeAreaProvider style={styles.safeAreaProviderContaier}>
            <AuthContextProvider>
                <Root />
            </AuthContextProvider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeAreaProviderContaier: {
        backgroundColor: "#f1f1f1",
    },
});