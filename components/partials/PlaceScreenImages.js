import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const window = Dimensions.get("window");
const standardScreenWidth = 375;
const scaleWidth = window.width / standardScreenWidth;

const categories = [
  { id: "kopalniaSoli1", image: require("../../assets/kopalniasoli1.jpeg") },
  { id: "kopalniaSoli2", image: require("../../assets/kopalniasoli2.jpeg") },
  { id: "kopalniaSoli3", image: require("../../assets/kopalniasoli3.jpeg") },
];

const HorizontalMenu = ({ onCategoryPress }) => {
  return (
    <View style={styles.horizontalMenu}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            onPress={() => onCategoryPress(category.id)}
            style={styles.categoryItem}
          >
            <Image source={category.image} style={styles.categoryImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalMenu: {
    alignItems: "center",
    marginLeft: 12,
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 16,
    outlineStyle: "none",
  },
  categoryImage: {
    width: 307 * scaleWidth,
    height: 344 * scaleWidth,
    borderRadius: 35,
    marginBottom: 4,
  },
});

export default HorizontalMenu;
