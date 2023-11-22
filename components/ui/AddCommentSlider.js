import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
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
      <View style={styles.modalView}>
        <View style={styles.userInfo}>
          <View style={styles.userAvatar}>
            <Image
              source={{ Image: {userAvatar}}}
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
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    marginTop: "auto",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
    alignContent: "flex-start",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 5,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
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
