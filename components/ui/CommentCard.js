import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import UserStarRating from "./UserStarRating"; // Upewnij się, że ścieżka jest poprawna

const { width, height } = Dimensions.get("window");

function CommentCard({ comment }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.dataContainer}>
        <View style={styles.imageContainer}>
          <Image source={comment.userImage} style={styles.userImage} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.userName}>{comment.userName}</Text>
          <UserStarRating rating={comment.userRating} />
          <Text style={styles.commentDate}>{comment.commentDate}</Text>
        </View>
      </View>
      <Text style={styles.commentText}>{comment.commentText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "column",
    padding: 16,
    backgroundColor: "#FFF",
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10,
  },
  imageContainer: {
    marginRight: 16,
  },
  userImage: {
    width: width*0.13,
    height: width*0.13,
    borderRadius: width*0.13,
  },
  dataContainer: {
    flex: 1,
    flexDirection: "row",
  },
  headerContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  userName: {
    fontSize: 16,
    fontFamily:"Poppins-Bold",
    marginRight: 8,
    letterSpacing: 0.88,
  },
  commentDate: {
    fontSize: 11,
    color: "#999",
    fontFamily: "Poppins-Medium",
    letterSpacing: 0.55,
  },
  commentText: {
    fontFamily: "Poppins-Medium",
    textAlign: "left",
    fontSize: 11,
    color: "#333",
  },
});

export default CommentCard;
