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
import PlaceScreenImages from "../../components/partials/PlaceScreenImages.js";
import BackButton from "../../components/ui/BackButton";
import PlaceCard from "../../components/ui/PlaceCard.js";

const { width, height } = Dimensions.get("window");

const locations = [
  {
    image: require("../../assets/sniezka.jpeg"),
    name: "Wieliczka",
    rating: 4.2,
    city: "Kopalnia Soli",
    isLiked: false,
    id: "id",
  },
];

const PlaceScreen = () => {
  const handleCategoryPress = (categoryId) => {
    alert(`Category ${categoryId} pressed`);
  };

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={true}
    >
      <View style={styles.backButton}>
        <BackButton></BackButton>
      </View>

      <View style={styles.categoryContent}>
        <View style={styles.horizontalMenu}>
          <PlaceScreenImages onCategoryPress={handleCategoryPress} />
        </View>
      </View>

      <View style={styles.cardHolderContainer}>
        <View style={styles.cardHolder}>
          {locations.map((location) => (
            <PlaceCard
              location={location}
              key={location.id}
            />
          ))}
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.textCardHolderContent}>
            <SectionTitle fontSize={20} color={"#494949"}>
              Last seen
            </SectionTitle>
          </View>
        </View>

        <View style={styles.plainButtonHolder}>
          <PlainButton
            fontSize={14}
            color={"#7E7D7D"}
            letterSpacing={0.77}
            textDecorationLine={"normal"}
          >
            View all
          </PlainButton>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
  pageContent: {
    flex: 1,
  },
  backButton: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
  },
  categoryContent: {
    flex: 1,
  },
  horizontalMenu: {
    alignItems: "flex-start",
  },
  textHolderContent: {
    textAlign: "left",
    alignItems: "flex-start",
    paddingLeft: "5%",
  },
  searchBar: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  cardHolderContainer: {
    marginTop: 20,
  },
  cardContainer: {
    flex: 0.5,
  },
  plainButtonHolder: {
    textAlign: "right",
    paddingRight: "5%",
    alignSelf: "flex-end",
    paddingLeft: 15,
    right: 15,
    marginBottom: 5,
  },
  cardHolder: {
    flex: 4,
  },
  textCardHolderContent: {
    textAlign: "left",
    alignItems: "flex-start",
    paddingLeft: "5%",
    top: 20,
  },
});

export default PlaceScreen;
