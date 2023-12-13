import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Header from "../../components/partials/Header";
import InputText from "../../components/ui/InputText";
import LocationCard from "../../components/ui/LocationCard";
import SectionTitle from "../../components/ui/SectionTitle";
import HorizontalMenu from "../../components/partials/HorizontalMenu";
import PlainButton from "../../components/ui/PlainButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useFetchLocations from "../../hooks/useFetchLocations";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../components/ui/BackButton";

const { width, height } = Dimensions.get("window");

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const { locations, isLoading, error } = useFetchLocations(1, 1);

  const processedLocations = locations.map((location) => ({
    //image: require("../../assets/sniezka.jpeg"),
    id: location.id,
    name: location.name,
    rating: location.average_rating,
    city: location.simple_address,
    isLiked: false,
  }));
  const handleCategoryPress = (categoryId) => {
    alert(`Category ${categoryId} pressed`);
  };
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={true}
    >
      <View style={styles.fullHeader}>
        <View style={styles.backButton}>
          <BackButton onPress={goBack}></BackButton>
        </View>
        <View style={styles.header}>
          <Header headerText={"Last"} subHeaderText={"seen!"} />
        </View>
      </View>

      <View style={styles.textCardHolderContent}>
        <SectionTitle fontSize={20} color={"#494949"}>
          All last seen places!
        </SectionTitle>
        {processedLocations.map((location) => (
          <LocationCard
            onPress={() =>
              navigation.navigate("Place", { locationId: location.id })
            }
            location={location}
            key={location.id}
          />
        ))}
      </View>
    </ScrollView>
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
    flex: 2,
    bottom: 10,
  },
  textCardHolderContent: {
    textAlign: "left",
    alignItems: "flex-start",
    paddingLeft: "5%",
    top: 10,
  },
  backButton: {
    marginTop: 20,
    marginLeft: 20,
  },
});

export default WelcomeScreen;
