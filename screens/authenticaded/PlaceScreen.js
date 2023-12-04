import React from "react";
import {StyleSheet, View, ScrollView, Text} from "react-native";
import SectionTitle from "../../components/ui/SectionTitle";
import PlainButton from "../../components/ui/PlainButton";
import PlaceScreenImages from "../../components/partials/PlaceScreenImages.js";
import BackButton from "../../components/ui/BackButton";
import PlaceCard from "../../components/ui/PlaceCard.js";
import CommentCard from "../../components/ui/CommentCard.js";
import processComment from "../../util/processComment";
import useFetchLocationDetails from "../../hooks/useFetchLocationsDetails";

const PlaceScreen = ({ navigation, route }) => {

  const {locationId} = route.params;
  const { locationDetails,isLoading,error } = useFetchLocationDetails(locationId);

  if (isLoading){
    return <Text>Loading location details</Text>
  }

  if (error){
    return <Text>Error loading location details: {error.message}</Text>
  }

  if (!locationDetails) {
    return <Text>No location details available.</Text>;
  }


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
      <View style={styles.backButton}>
        <BackButton onPress={goBack}></BackButton>
      </View>

      <View style={styles.categoryContent}>
        <View style={styles.horizontalMenu}>
          <PlaceScreenImages onCategoryPress={handleCategoryPress} />
        </View>
      </View>

      <View style={styles.cardHolderContainer}>
        <View style={styles.cardHolder}>
          <PlaceCard location={locationDetails.location} />
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.textCardHolderContent}>
            <SectionTitle fontSize={19} color={"#494949"}>
              Comments
            </SectionTitle>
          </View>
        </View>

        <View style={styles.plainButtonHolder}>
          <PlainButton
            fontSize={14}
            color={"#7E7D7D"}
            letterSpacing={0.77}
            textDecorationLine={"none"}
          >
            Add Comment
          </PlainButton>
        </View>
        <View>
          {locationDetails.ratings.map(comment => (
            <CommentCard comment={processComment(comment)} key={comment.id} />
          ))}
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
    marginTop: 20,
  },
  plainButtonHolder: {
    textAlign: "right",
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
    paddingLeft: "3%",
    top: 20,
  },
});

export default PlaceScreen;
