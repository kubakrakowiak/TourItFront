import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import SectionTitle from "../../components/ui/SectionTitle";
import PlainButton from "../../components/ui/PlainButton";
import PlaceScreenImages from "../../components/partials/PlaceScreenImages.js";
import BackButton from "../../components/ui/BackButton";
import PlaceCard from "../../components/ui/PlaceCard.js";
import CommentCard from "../../components/ui/CommentCard.js";

const comments = [
  {
    userImage: require("../../assets/sniezka.jpeg"),
    commentDate: "month ago",
    userRating: 2,
    userName: "Andrzej Kowalski",
    isLiked: false,
    id: "id",
    commentText:
      "asdddddddddwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwqdq",
  },
  {
    userImage: require("../../assets/sniezka.jpeg"),
    commentDate: "month ago",
    userRating: 4,
    userName: "Andrzej Nowak",
    isLiked: false,
    id: "id",
    commentText: "asddddddddddddddd",
  },
  {
    userImage: require("../../assets/sniezka.jpeg"),
    commentDate: "month ago",
    userRating: 3,
    userName: "Andrzej Kowalski",
    isLiked: false,
    id: "id",
    commentText:
      "Lorem Ipsum aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
];

const PlaceScreen = ({ navigation, route }) => {
  const location = route.params.location;
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
          <PlaceCard location={location} key={location.id} />
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
          {comments.map((comment) => (
            <CommentCard comment={comment} key={comment.id} />
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
