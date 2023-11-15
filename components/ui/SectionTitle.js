import { StyleSheet, View, Dimensions, Text } from "react-native";
import { Colors } from "../../constans/styles.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

const { width, height } = Dimensions.get("window");

function SectionTitle({
  fontSize,
  children,
  fontFamily,
  fontWeight,
  marginBottom,
}) {
  return (
    <Text
      style={[
        styles.textSectionTitle,
        {
          fontSize: fontSize || 32,
          fontFamily: fontFamily || "Poppins",
          fontWeight: fontWeight || "200",
          marginBottom: marginBottom || 5,
        },
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  textSectionTitle: {
    color: "#323232",
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: 0.99,
    marginBottom: height * 0.009,
    paddingLeft: width * 0.02,
  },
});

export default SectionTitle;
