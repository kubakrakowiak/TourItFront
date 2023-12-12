import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import SubcategoryModal from "./SubcategoryModal";

const { width } = Dimensions.get("window");

const categories = [
  { id: "mount", name: "Mount", image: require("../../assets/mount.png"), subcategories: [{ id: 'hiking', name: 'Hiking' }, { id: 'climbing', name: 'Climbing' }] },
  { id: "beach", name: "Beach", image: require("../../assets/beach.png"), subcategories: [{ id: 'surfing', name: 'Surfing' }, { id: 'sunbathing', name: 'Sunbathing' }] },
  // Dodaj więcej kategorii i subkategorii według potrzeb
];

const HorizontalMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    setModalVisible(true);
  };

  const handleSelectSubcategories = (subcategories) => {
    console.log("Wybrane subkategorie dla", selectedCategory.name, ":", subcategories);
    // Tutaj dodaj logikę obsługi wybranych subkategorii
  };

  return (
     <View style={styles.horizontalMenu}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {categories.map(category => (
          <TouchableOpacity key={category.id} onPress={() => handleCategoryPress(category)} style={styles.categoryItem}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {selectedCategory && (
        <SubcategoryModal
          isVisible={modalVisible}
          subcategories={selectedCategory.subcategories}
          onSelectSubcategories={handleSelectSubcategories}
          onClose={() => setModalVisible(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalMenu: {
    alignItems: "flex-start",
    width: "100%",
    marginLeft: 12,
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
  categoryText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 12,
    letterSpacing: 1,
  },
});

export default HorizontalMenu;