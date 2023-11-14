import { StyleSheet, View, TextInput, Text } from "react-native";
import { Colors } from "../../constans/styles.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

function InputText({ onUpdateValue, value, textInputConfig, icon, iconColor, iconSize, iconRightAlign }) {
  const Icon = () => <Ionicons
      style={styles.icon}
      name={icon}
      size={iconSize ? iconSize : 26}
      color={iconColor ? iconColor : '#9E9E9E'}
  />
  return (
    <View style={styles.inputContainer}>
      {(icon && !iconRightAlign) && (
        <Icon/>
      )}
      <TextInput
        style={styles.input}
        onChangeText={onUpdateValue}
        value={value}
        {...textInputConfig}
      />
      {(icon && iconRightAlign) && (
          <Icon/>
      )}
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
  },
  input: {
    width: "100%",
    height: 50,
    padding: 13,
    borderRadius: 13,
    placeholderTextColor: Colors.placeholderText,
    fontFamily: "Poppins",
    fontSize: 14,
    elevation: 4,
    textAlign: "left",
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: 2.03,
    textTransform: "lowercase",
    outlineStyle: "none",
  },
  icon: {
    marginBottom: 9,
    marginLeft: 9,
    marginTop: 9,
  },
});

export default InputText;
