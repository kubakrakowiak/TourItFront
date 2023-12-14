import { StyleSheet, View, TextInput } from "react-native";
import { Colors } from "../../constans/styles.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";

function SearchInput({
  onUpdateValue,
  textInputConfig,
  icon,
  iconColor,
  iconSize,
  iconRightAlign,
  textTransform,
  containerWidth,
}) {
  const [inputValue, setInputValue] = useState("");

  const Icon = () => (
    <Ionicons
      style={styles.icon}
      name={icon}
      size={iconSize ? iconSize : 26}
      color={iconColor ? iconColor : "#9E9E9E"}
    />
  );

  const handleSubmitEditing = () => {
    if (onUpdateValue) {
      onUpdateValue(inputValue);
    }
  };

  return (
    <View style={[styles.inputContainer, { width: containerWidth || "70%" }]}>
      <View style={styles.innerContainer}>
        {icon && !iconRightAlign && <Icon />}
      </View>
      <TextInput
        style={[styles.input, { textTransform: textTransform }]}
        onChangeText={setInputValue}
        onSubmitEditing={handleSubmitEditing}
        value={inputValue}
        returnKeyType="search"
        placeholder="Search"
        {...textInputConfig}
      />
      <View style={styles.innerContainer}>
        {icon && iconRightAlign && <Icon />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginHorizontal: 4,
    marginBottom: 18,
    borderRadius: 13,
    backgroundColor: "white",
    width: "70%",
    height: 50,
    borderWidth: 1,
    borderColor: "#EBEBEB",
    elevation: 4,
  },
  input: {
    flex: 1,
    width: "100%",
    height: 50,
    padding: 13,
    borderRadius: 13,
    color: Colors.placeholderText,
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    textAlign: "left",
    letterSpacing: 2.03,
    textTransform: "lowercase",
    borderWidth: 0,
    paddingLeft: 1,
  },
  icon: {
    marginLeft: 9,
    marginBottom: 9,
    marginTop: 9,
  },
  innerContainer: {
    flexDirection: "row",
    marginRight: 9,
  },
});

export default SearchInput;
