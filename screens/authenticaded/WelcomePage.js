import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Header from "../../components/partials/Header";
import InputText from "../../components/ui/InputText";
import LocationCard from "../../components/ui/LocationCard";
import SectionTitle from "../../components/ui/SectionTitle";
import HorizontalMenu from "../../components/partials/HorizontalMenu";
import PlainButton from "../../components/ui/PlainButton";

const { width, height } = Dimensions.get("window");

const locations = [
  {
    image: require("../../assets/smallLogo.png"),
    name: "nazwa1",
    rating: 5.9,
    city: "Krakow",
    isLiked: false,
    id: "id",
  },
  {
    image: require("../../assets/smallLogo.png"),
    name: "nazwa2",
    rating: 4.6,
    city: "Poznan",
    isLiked: false,
    id: "id",
  },
  {
    image: require("../../assets/smallLogo.png"),
    name: "nazwa3",
    rating: 3.1,
    city: "Krakow",
    isLiked: false,
    id: "id",
  },
  {
    image: require("../../assets/smallLogo.png"),
    name: "nazwa4",
    rating: 2.1,
    city: "Gdynia",
    isLiked: true,
    id: "id",
  },
];
const WelcomePage = () => {
  const handleCategoryPress = (categoryId) => {
    alert(`Category ${categoryId} pressed`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Header headerText={"Welcome"} subHeaderText={"back!"} />
        </View>
      </View>

      <View style={styles.pageContent}>
        <View style={styles.searchContent}>
          <View style={styles.textHolderContent}>
            <SectionTitle fontSize={20}>Where do you want to go?</SectionTitle>
          </View>

          <View style={styles.searchBar}>
            <InputText
              textInputConfig={{
                placeholder: "Search",
                keyboardType: "default",
              }}
              icon={"search"}
              textTransform="capitalize"
              containerWidth="95%"
            />
          </View>
        </View>
        <View style={styles.categoryContent}>
          <View style={styles.textHolderContent}>
            <SectionTitle fontSize={20} marginBottom={5}>
              Category
            </SectionTitle>
          </View>
          <View style={styles.horizontalMenu}>
            <HorizontalMenu
              onCategoryPress={handleCategoryPress}
            ></HorizontalMenu>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.textHolderContent}>
            <SectionTitle fontSize={20}>Last seen</SectionTitle>
          </View>
        </View>

        <View style={styles.plainButtonHolder}>
          <PlainButton>View all</PlainButton>
        </View>

        <View style={styles.cardHolder}>
          {locations.map((location) => (
            <LocationCard onPress={() => alert("test")} location={location} />
          ))}
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
  header: {
    flex: 1.4,
  },
  pageContent: {
    flex: 5,
  },
  searchContent: {
    flex: 1,
  },
  categoryContent: {
    flex: 2,
  },
  horizontalMenu: {
    alignItems: "center",
    width: "100%",
  },
  textHolderContent: {
    width: "80%",
    textAlign: "left",
    alignItems: "flex-start",
    paddingLeft: "5%",
  },
  searchBar: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  cardContainer: {
    flex: 0.5,
  },
  plainButtonHolder: {
    textAlign: "right",
    alignItems: "flex-end",
    width: "80%",
    paddingRight: "5%",
  },
  cardHolder: {
    flex: 4,
  },
});

export default WelcomePage;
