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
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, withSpring } from 'react-native-reanimated';
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;



const AddCommentSlider = ({ onSubmit, onClose, userName, userAvatar }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateY.value = Math.max(0, context.startY + event.translationY);
    },
    onEnd: () => {
      if (translateY.value > screenHeight / 2) onClose();
      else translateY.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const handleSubmit = () => {
    onSubmit(rating, comment);
    setRating(0);
    setComment("");
  };

  console.log(gestureHandler)

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

      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.modalView, animatedStyle]}>
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
        </Animated.View>
      </PanGestureHandler>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 15,
    width: '100%',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
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
