import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";
import { Colors } from "../../constans/styles";

const SubcategoryModal = ({
  isVisible,
  subcategories,
  onSelectSubcategories,
  onClose,
}) => {
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const handleSelectSubcategory = (subcategoryId) => {
    if (selectedSubcategories.includes(subcategoryId)) {
      setSelectedSubcategories(
        selectedSubcategories.filter((id) => id !== subcategoryId)
      );
    } else {
      setSelectedSubcategories([...selectedSubcategories, subcategoryId]);
    }
  };

  const handleSubmit = () => {
    onSelectSubcategories(selectedSubcategories);
    onClose();
  };

  return (
    <Modal visible={isVisible} onRequestClose={onClose} transparent={false}>
      <View style={styles.modalView}>
        {subcategories.map((subcategory) => (
          <TouchableOpacity
            key={subcategory.id}
            onPress={() => handleSelectSubcategory(subcategory.id)}
            style={styles.subcategoryItem}
          >
            <CheckBox
              value={selectedSubcategories.includes(subcategory.id)}
              onValueChange={() => handleSelectSubcategory(subcategory.id)}
            />
            <Text style={styles.subcategoryText}>{subcategory.name}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Zatwierdź</Text>
        </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subcategoryItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  subcategoryText: {
    marginLeft: 8,
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    letterSpacing: 1.11, 
  },
  buttonContainer:{
    alignItems: "center"
  },
  button: {
    backgroundColor: Colors.darkgreen,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    alignItems: "center",
    width: 100,
  },
  buttonText: {
    color: "white",
  },
});

export default SubcategoryModal;
