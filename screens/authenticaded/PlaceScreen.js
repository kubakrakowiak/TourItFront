import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import SectionTitle from "../../components/ui/SectionTitle";
import PlainButton from "../../components/ui/PlainButton";
import PlaceScreenImages from "../../components/partials/PlaceScreenImages.js";
import BackButton from "../../components/ui/BackButton";
import PlaceCard from "../../components/ui/PlaceCard.js";
import CommentCard from "../../components/ui/CommentCard.js";
import AddCommentSlider from "../../components/ui/AddCommentSlider.js";
import processComment from "../../util/processComment";
import useFetchLocationDetails from "../../hooks/useFetchLocationsDetails";
import useAddReview from '../../hooks/useAddReview';


const PlaceScreen = ({ navigation, route }) => {
  const [sliderVisible, setSliderVisible] = useState(false);
  const addReview = useAddReview();


  const { locationId } = route.params;
  const { locationDetails, isLoading, error } =
    useFetchLocationDetails(locationId);

  if (isLoading) {
    return <Text>Loading location details</Text>;
  }

  if (error) {
    return <Text>Error loading location details: {error.message}</Text>;
  }

  if (!locationDetails) {
    return <Text>No location details available.</Text>;
  }

  const handleCategoryPress = (categoryId) => {
    alert(`Category ${categoryId} pressed`);
  };

  const handleRatingSubmit = async (rating, comment) => {
    try {
      const result = await addReview(locationId, rating, comment);
      console.log('Review submitted:', result);


      setSliderVisible(false);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
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

      <View style={styles.placeContent}>
        <View style={styles.horizontalMenu}>
          <PlaceScreenImages onCategoryPress={handleCategoryPress} />
        </View>
      </View>

      <View style={styles.cardHolderContainer}>
        <PlaceCard location={locationDetails.location} />
      </View>
      <View style={styles.commentTitleContainer}>
        <View style={styles.commentsCardHolderContent}>
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
          onPress={() => setSliderVisible(true)}
        >
          Add Comment
        </PlainButton>
      </View>

      {sliderVisible && (
        <AddCommentSlider
          onSubmit={handleRatingSubmit}
          onClose={() => setSliderVisible(false)}
          userName="Janina Nowak"
          userAvatar={require("../../assets/avatar.jpeg")}
        />
      )}

      <View>
        {locationDetails.ratings.map((comment) => (
          <CommentCard comment={processComment(comment)} key={comment.id} />
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
  backButton: {
    marginTop: 20,
    marginLeft: 20,
  },
  placeContent: {
    flex: 1,
  },
  horizontalMenu: {
    alignItems: "flex-start",
  },
  cardHolderContainer:{
flex: 3,
  },
  commentTitleContainer: {
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
  commentsCardHolderContent: {
    textAlign: "left",
    alignItems: "flex-start",
    paddingLeft: "3%",
    top: 20,
  },
});

export default PlaceScreen;
