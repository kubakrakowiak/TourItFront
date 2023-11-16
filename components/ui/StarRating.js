import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";


const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
  
    const stars = [];
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesome key={`full-${i}`} name="star" size={22} color="#FEA02F" style={styles.ratingStar} />
      );
    }
  
    if (halfStar) {
      stars.push(
        <FontAwesome key={`half-${fullStars}`} name="star-half-full" size={22} color="#FEA02F" style={styles.ratingStar} />
      );
    }
  
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesome key={`empty-${fullStars + i}`} name="star-o" size={22} color="#FEA02F" style={styles.ratingStar} />
      );
    }
  
    return <View style={styles.container}>{stars}</View>;
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingStar: {
      marginRight: 2,
    },
  });

export default StarRating;
