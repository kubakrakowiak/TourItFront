import { StyleSheet, View, Dimensions, Text } from "react-native";
import { Colors } from "../../constans/styles.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

const { width, height } = Dimensions.get("window");

function SectionTitle({
  fontSize,
  children,
  fontFamily,
}) {
  
  return (
    <Text style={[styles.textSectionTitle, { fontSize: fontSize || "2vw", fontFamily: fontFamily || "Poppins" }]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  textSectionTitle: {
    color: "#323232",
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: 0.99,
    marginBottom: height * 0.009,
    paddingLeft: width * 0.02
  },
});

export default SectionTitle;
