import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import Header from "../../components/partials/Header";
import InputText from "../../components/ui/InputText";
import LocationCard from "../../components/ui/LocationCard";
import SectionTitle from "../../components/ui/SectionTitle";
import HorizontalMenu from "../../components/partials/HorizontalMenu";
import PlainButton from "../../components/ui/PlainButton";
import useFetchLocations from "../../hooks/useFetchLocations";

const WelcomeScreen = ({ navigation }) => {
  const xCoord = 54.4892;
  const yCoord = 18.5317;

  const { locations, isLoading, error } = useFetchLocations(xCoord, yCoord);

  const renderLocation = ({ item }) => (
    <LocationCard
      onPress={() => navigation.navigate("Place", { locationId: item.id })}
      location={item}
    />
  );

  const renderHeader = () => {
    return (
      <View style={styles.pageContent}>
        <Header headerText={"Welcome"} subHeaderText={"back!"} />
        <View style={styles.searchContent}>
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
        
          <View style={styles.categoryContent}>
          <View style={styles.titleText}>
            <SectionTitle fontSize={20} marginBottom={5}>
              Category
            </SectionTitle>
            </View>
            <HorizontalMenu />
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.titleText}>
            <SectionTitle fontSize={20} color={"#494949"}>
              Trending
            </SectionTitle>
            </View>
            <View style={styles.plainButtonHolder}>
              <PlainButton
                fontSize={14}
                color={"#7E7D7D"}
                letterSpacing={0.77}
                textDecorationLine={"normal"}
              >
                Explore
              </PlainButton>
            </View>
          </View>
      </View>
    );
  };

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occurred: {error.message}</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={locations}
      renderItem={renderLocation}
      keyExtractor={(item) => item.id.toString()}
      ListFooterComponent={
        isLoading ? <ActivityIndicator size="large" /> : null
      }
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#F1F1F1",
  },
  header: {
    flex: 1,
  },
  pageContent: {
    flex: 1,
    justifyContent: "center",
  },
  titleText: {
    marginLeft: 10,
  },
  searchContent: {
    alignItems: "center"
  },
  categoryContent: {
    flex: 1.8,
  },
  cardContainer: {
    marginTop:10,
  },
  plainButtonHolder: {
    textAlign: "right",
    paddingRight: "5%",
    alignSelf: "flex-end",
    paddingLeft: 15,
    right: 15,
    marginBottom: 5,
  },
});

export default WelcomeScreen;
