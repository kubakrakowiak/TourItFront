import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Ensure you have FontAwesome icons available

const CommentStarRating = ({ maxStars = 5, currentRating, onRatingChange }) => {
  const handleStarPress = (rating) => {
    if (onRatingChange) {
      onRatingChange(rating);
    }
  };

  return (
    <View style={{ flexDirection: 'row',}}>
      {[...Array(maxStars)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <TouchableOpacity 
            key={ratingValue} 
            onPress={() => handleStarPress(ratingValue)}
          >
            <FontAwesome style={styles.commentRating}
              name={ratingValue <= currentRating ? 'star' : 'star-o'}
              size={32}
              color={ratingValue <= currentRating ? 'gold' : 'grey'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


const styles = StyleSheet.create({
  commentRating:{
    marginRight: 5,
  }
  });


export default CommentStarRating;


