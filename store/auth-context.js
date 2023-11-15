import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {},
})

function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState(null);

    function authenticate(token) {
        setAuthToken(token);
    }

    function logout() {
        setAuthToken(null);
    }
    const value =  {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;