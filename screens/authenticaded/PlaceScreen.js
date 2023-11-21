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

      <View style={styles.placeContent}>
        <View style={styles.horizontalMenu}>
          <PlaceScreenImages onCategoryPress={handleCategoryPress} />
        </View>
      </View>

      <View style={styles.commentsHolderContainer}>
        <View style={styles.placeNameHolder}>
          <PlaceCard location={location} key={location.id} />
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
  placeContent: {
    flex: 1,
  },
  horizontalMenu: {
    alignItems: "flex-start",
  },
  commentsHolderContainer: {
    marginTop: 20,
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
