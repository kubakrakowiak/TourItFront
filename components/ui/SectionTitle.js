import { StyleSheet, Dimensions, Text } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

function SectionTitle({ fontSize, children, fontFamily, marginBottom, color }) {
  return (
    <Text
      style={[
        styles.textSectionTitle,
        {
          fontSize: fontSize || 32,
          fontFamily: fontFamily || "Poppins-Bold",
          marginBottom: marginBottom || 5,
          color: color || "#323232",
        },
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  textSectionTitle: {
    letterSpacing: 0.99,
    marginBottom: height * 0.009,
    paddingLeft: width * 0.02,
  },
});

export default SectionTitle;
