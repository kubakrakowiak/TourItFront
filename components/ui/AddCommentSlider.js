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
import CommentStarRating from "./CommentStarRating";
import { Colors } from "../../constans/styles";

const AddCommentSlider = ({ onSubmit, onClose, userName, userAvatar }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    onSubmit(rating, comment);
    setRating(0);
    setComment("");
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
        <TouchableOpacity onPress={onClose} style={styles.bar} />
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 15,
  },
  modalOverlay: {
    flex: 2,
  },
  bar: {
    width: "35%",
    height: 5,
    borderRadius: 5,
    backgroundColor: "#ccc",
    alignSelf: "center",
    marginBottom: 30,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  userAvatar: {
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
    padding: 15,
    marginTop: 20,
    borderRadius: 16,
    backgroundColor: Colors.darkgreen,
    shadowColor: Colors.shadowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default AddCommentSlider;
