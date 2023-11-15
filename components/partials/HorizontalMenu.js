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

const { width } = Dimensions.get("window");

const categories = [
  { id: "mount", name: "Mount", image: require("../../assets/mount.png") },
  { id: "beach", name: "Beach", image: require("../../assets/beach.png") },
  {
    id: "waterfall",
    name: "Waterfall",
    image: require("../../assets/waterfall.png"),
  },
  { id: "lake", name: "Lake", image: require("../../assets/lake.png") },
  { id: "river", name: "River", image: require("../../assets/river.png") },
  { id: "city", name: "City", image: require("../../assets/city.png") },
  { id: "city", name: "City", image: require("../../assets/city.png") },
  { id: "city", name: "City", image: require("../../assets/city.png") },
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
            <Text>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalMenu: {
    alignItems: "center",
    width: "100%",
    paddingRight: 10,
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 16,
    outlineStyle: "none",
  },
  categoryImage: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: width * 0.125,
    marginBottom: 4,
  },
});

export default HorizontalMenu;
