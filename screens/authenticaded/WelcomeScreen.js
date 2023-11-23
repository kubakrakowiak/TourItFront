import React, { useState, useEffect } from "react";
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

import { getNearestLocations } from "util/http"; // Import funkcji getNearestLocations

const { width, height } = Dimensions.get("window");

const WelcomeScreen = ({ navigation }) => {
  const [locations, setLocations] = useState([]); // Stan dla lokacji

  useEffect(() => {
    // Pobieranie danych przy montowaniu komponentu
    const xCoord = 1; // Przykładowe współrzędne, do zmiany w zależności od potrzeb
    const yCoord = 1;

    getNearestLocations(xCoord, yCoord)
        .then(data => {
          setLocations(data); // Aktualizacja stanu lokacji
        })
        .catch(error => {
          console.error("Błąd podczas pobierania lokacji", error);
        });
  }, []);

  const handleCategoryPress = (categoryId) => {
    alert(`Category ${categoryId} pressed`);
  };

  const WelcomeScreenContent = () => (
      <View>
        <View style={styles.header}>
          <Header headerText={"Welcome"} subHeaderText={"back!"} />
        </View>

        <View style={styles.pageContent}>
          <View style={styles.searchContent}>
            <View style={styles.textHolderContent}>
              <SectionTitle fontSize={20}>
                Where do you want to go?
              </SectionTitle>
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
              <HorizontalMenu onCategoryPress={handleCategoryPress} />
            </View>
          </View>

          <View style={styles.cardHolderContainer}>
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

            <View style={styles.cardHolder}>
              {locations.map((location) => (
                  <LocationCard
                      onPress={() => navigation.navigate("Place", { location })}
                      location={location}
                      key={location.id}
                  />
              ))}
            </View>
          </View>
        </View>
      </View>
  );

  return Platform.OS === "ios" ? (
      <KeyboardAwareScrollView
          style={styles.container}
          enableOnAndroid={true}
          extraHeight={Platform.select({ android: 200, ios: 0 })}
          scrollEnabled={false}
      >
        <WelcomeScreenContent />
      </KeyboardAwareScrollView>
  ) : (
      <ScrollView
          style={styles.container}
          keyboardShouldPersistTaps="handled"
          scrollEnabled={true}
      >
        <WelcomeScreenContent />
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
  header: {
    flex: 1,
  },
  pageContent: {
    flex: 5,
  },
  searchContent: {
    flex: 1.5,
    bottom: 20,
  },
  categoryContent: {
    flex: 1.8,
  },
  horizontalMenu: {
    alignItems: "center",
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
    flex: 6,
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

export default WelcomeScreen;
