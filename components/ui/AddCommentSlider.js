import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import UserStarRating from "./UserStarRating"; // Ensure this path is correct
import CommentStarRating from "./CommentStarRating";

const AddCommentSlider = ({ onSubmit, onClose, userName, userAvatar }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    onSubmit(rating, comment); // Pass the rating and comment up to the parent component
    setRating(0); // Reset the rating
    setComment(""); // Reset the comment
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>

      <View style={styles.modalView}>
        <View style={styles.userInfo}>
          <View style={styles.userAvatar}>
            <Image
              source={require("../../assets/avatar.jpeg")}
              style={styles.avatar}
            />
          </View>
          <View styles={styles.userNameRating}>
            <Text style={styles.userName}>{userName}</Text>
            <CommentStarRating
              currentRating={rating}
              onRatingChange={setRating}
            />
          </View>
        </View>
        <TextInput
          style={styles.input}
          value={comment}
          onChangeText={setComment}
          placeholder="What are your thoughts on this place?"
          multiline
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Add Comment</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    marginTop: "auto",
    backgroundColor: "white",
    borderRadius: 40,
    padding: 15,
    flex:1,
  },
  modalOverlay: {
    flex: 2,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  userAvatar:{
    marginRight: 15,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginRight: 5,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    minHeight: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default AddCommentSlider;
