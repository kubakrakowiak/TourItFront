import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import Button from "../../components/ui/Button";
import PlainButton from "../../components/ui/PlainButton";
import { registerUser } from "../../util/http";
import { AuthContext } from "../../store/auth-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

const ProfileScreen = () => {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();
  async function logoutHandler() {
    authCtx.logout();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileHolder}>
          <View style={styles.profieImageHolder}>
            <Image
              style={styles.profileImage}
              source={require("../../assets/avatar.jpeg")}
            />
          </View>

          <View style={styles.profileName}>
            <Text style={styles.textName}>Jowita</Text>
            <Text style={styles.textSurName}>Nowak</Text>
          </View>
        </View>
      </View>
      <View style={styles.settingsContainer}>
        <View style={styles.settingsContent}>
          <TouchableOpacity onPress={() => navigation.navigate('ManageUser')} style={styles.settingsButtons}>
            <View style={styles.icon}>
              <View style={styles.iconBackground}>
                <FontAwesome5  name="user-friends" size={20} color="#FEA02F" />
              </View>
            </View>
            <View style={styles.buttonText}>
              <Text style={styles.innerButtonText}>Manage User</Text>
            </View>
            <View style={styles.innerButton}>
              <View style={styles.forwardIcon}>
                <Ionicons
                  name="md-chevron-forward-sharp"
                  size={27}
                  color="black"
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('LastSeen')} style={styles.settingsButtons}>
            <View style={styles.icon}>
              <View style={styles.iconBackground}>
                <MaterialCommunityIcons
                  name="navigation-variant"
                  size={23}
                  color="#FEA02F"
                />
              </View>
            </View>
            <View style={styles.buttonText}>
              <Text style={styles.innerButtonText}>Last Seen</Text>
            </View>
            <View style={styles.innerButton}>
              <View style={styles.forwardIcon}>
                <Ionicons
                  name="md-chevron-forward-sharp"
                  size={27}
                  color="black"
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.logOutContainer}>
        <TouchableOpacity onPress={logoutHandler} style={styles.settingsButtons}>
          <View style={styles.icon}>
            <View style={styles.iconBackground}>
            <MaterialIcons name="logout" size={23} color="#FEA02F" />
            </View>
          </View>
          <View style={styles.buttonLogOutText}>
            <Text style={styles.innerButtonText}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
  profileContainer: {
    flex: 3,
    top: 100,
  },
  profileHolder: {
    flexDirection: "row",
    alignItems: "center",
  },
  profieImageHolder: {
    flex: 2,
    alignItems: "center",
  },
  profileImage: {
    width: 106,
    height: 106,
    borderRadius: 53,
  },
  profileName: {
    flex: 3,
    alignItems: "flex-start",
  },
  textName: {
    color: "#FEA02F",
    fontFamily: "Poppins-Bold",
    fontSize: 32,
    letterSpacing: 1.76,
    marginBottom: -16,
  },
  textSurName: {
    color: "#242424",
    fontFamily: "Poppins-Medium",
    fontSize: 32,
    letterSpacing: 1.76,
  },
  settingsContainer: {
    flex: 4,
  },
  settingsContent: {
    alignItems: "center",
  },
  settingsButtons: {
    flexDirection: "row",
    backgroundColor: "#F1F1F1",
    borderWidth: 1,
    borderColor: "#767676",
    borderRadius: 20,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  icon: {
    flex: 1,
  },
  iconBackground: {
    backgroundColor: "#006D6D",
    borderRadius: 22,
    width: 43,
    height: 43,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    flex: 3,
    textAlign: "left",
    justifyContent: "center",
  },
  innerButtonText: {
    color: "#494949",
    fontFamily: "Poppins-Bold",
    letterSpacing: 1.1,
    fontSize: 20,
  },
  innerButton: {
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "center",
    marginRight: 5,
  },
  forwardIcon: {
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  logOutContainer: {
    flex: 1,
  },
  buttonLogOutText: {
    flex: 5,
    textAlign: "left",
    justifyContent: "center",
  },
});

export default ProfileScreen;
