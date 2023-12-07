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
import LocationCard from "../ui/LocationCard";
import useFetchLocations from '../../hooks/useFetchLocations';

const screenHeight = Dimensions.get('window').height;



const MapSlider = ({ onClose, }) => {
  const translateY = useSharedValue(0);
  const { locations, isLoading, error } = useFetchLocations(
    currentRegion?.latitude,
    currentRegion?.longitude,
    currentRegion?.latitudeDelta,
    currentRegion?.longitudeDelta
    
);
const [currentRegion, setCurrentRegion] = useState(null);

  const processedLocations = locations.map(location => ({
    //image: require("../../assets/sniezka.jpeg"),
    id: location.id,
    name: location.name,
    rating: location.average_rating,
    city: location.simple_address,
    isLiked: false,
}));

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
        {processedLocations.map(location => (
                            <LocationCard
                                onPress={() => navigation.navigate('Place', { locationId: location.id })}
                                location={location}
                                key={location.id}
                            />
                        ))}
        <Text>asdasd</Text>
        
        <Text>asdasd</Text>
        <Text>asdasd</Text>
        <Text>asdasd</Text>

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
    backgroundColor: '#343434',
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
});
export default MapSlider;
