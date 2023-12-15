import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import Header from "../../components/partials/Header";
import InputText from "../../components/ui/InputText";
import Button from "../../components/ui/Button";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/ui/BackButton";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "../../constans/styles";
import SectionTitle from "../../components/ui/SectionTitle";
import useUpdateProfile from '../../hooks/useUpdateProfile';


const { width, height } = Dimensions.get("window");

const defaultProfileImg = require("../../assets/avatar.jpeg");

const ManageUser = () => {
  const navigation = useNavigation();
  const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const updateProfileData = useUpdateProfile();


  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    // Funkcja ładowania profilu użytkownika
    const loadProfile = async () => {
      try {
        const userProfileString = await AsyncStorage.getItem("userProfile");
        const userProfile = JSON.parse(userProfileString);

        if (userProfile && userProfile.profileImage) {
          setProfileImage(userProfile.profileImage);
        } else {
          setProfileImage(defaultProfileImg);
        }
      } catch (error) {
        // Obsługa błędu, jeśli coś pójdzie nie tak podczas ładowania profilu
        console.log("Nie udało się załadować profilu:", error);
      }
    };

    loadProfile();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  const saveProfileChanges = async () => {
    try {
      const profileData = {
        profile_image: profileImage,
        name: firstName,
        last_name: lastName,
      };

      await updateProfileData(profileData);
      alert("Profil zaktualizowany!");
    } catch (error) {
      alert("Wystąpił błąd podczas zapisywania profilu: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.fullHeader}>
        <View style={styles.backButton}>
          <BackButton onPress={goBack}></BackButton>
        </View>
        <View style={styles.header}>
          <Header headerText={"Manage"} subHeaderText={"User"} />
        </View>
      </View>

      <View style={styles.profileImageContainer}>
        <Image
          source={profileImage ? { uri: profileImage } : defaultProfileImg}
          style={styles.profileImage}
        />
        <Button
          style={{
            backgroundColor: "#D9D9D9",
            width: "60%",
            borderWidth: 1,
            borderColor: "#767676",
          }}
          textStyle={{ color: "#494949" }}
          title="Zmień zdjęcie"
          onPress={pickImage}
        >
          Change profile image
        </Button>
      </View>

      <KeyboardAvoidingView
        style={styles.settings}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Name"
            keyboardType="default"
          />
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Last name"
            keyboardType="default"
          />
        </View>

        <Button onPress={saveProfileChanges}>Save changes</Button>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
  fullHeader: {
    flexDirection: "row",
  },
  header: {
    flex: 1,
    bottom: 10,
    marginBottom: -50,
  },
  backButton: {
    marginTop: 20,
    marginLeft: 20,
  },
  profileImageContainer: {
    flex: 2,
    marginVertical: 20,
    alignItems: "center",
    bottom: 1,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  settings: {
    alignItems: "center",
    flex: 3,
  },
  form: {
    borderRadius: 13,
    backgroundColor: "white",
    elevation: 4,
    borderWidth: 1,
    borderColor: "#EBEBEB",
    width: "70%",
    padding: 10,
    marginBottom: 10,
  },
  input: {
    color: Colors.placeholderText,
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    textAlign: "left",
    letterSpacing: 2.03,
  },
  imageChangeButton: {},
});

export default ManageUser;
