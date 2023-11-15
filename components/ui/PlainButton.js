import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constans/styles.js";

function PlainButton({
  children,
  onPress,
  backgroundColor,
  underline,
  fontSize,
  color,
  fontFamily,
  letterSpacing,
  textDecorationLine,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        backgroundColor && { backgroundColor: backgroundColor },
        underline && {
          textDecorationColor: "#0579E3",
        },
      ]}
      onPress={onPress}
    >
      <View>
        <Text
          style={[
            styles.buttonText,
            { fontSize: fontSize || 12 },
            { color: color || Colors.registerLogin },
            { fontFamily: fontFamily || "Poppins-Bold" },
            { letterSpacing: letterSpacing || 2.32 },
            { textDecorationLine: textDecorationLine || "underline"},
          ]}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

export default PlainButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    flexShrink: 0,
    textAlign: "center",
    fontSize: 12,
    letterSpacing: 2.32,
    textTransform: "capitalize",
  },
});
