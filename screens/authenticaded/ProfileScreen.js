import React, {useContext} from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../../components/ui/Button";
import PlainButton from "../../components/ui/PlainButton";
import {registerUser} from "../../util/http";
import {AuthContext} from "../../store/auth-context";



const ProfileScreen = () => {
    const authCtx = useContext(AuthContext);
    async function logoutHandler() {
        authCtx.logout();
    }
    return (
    <View style={styles.container}>
      <Text>Test</Text>
      <Button onPress={logoutHandler}>Log out</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
});

export default ProfileScreen;
