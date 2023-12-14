import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constans/styles.js";

function Button({ children, onPress, color, style, textStyle}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        color && { backgroundColor: color },
        style,
      ]}
      onPress={onPress}
    >
      <View>
        <Text style={[styles.buttonText, textStyle]}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "70%",
    padding: 12,
    flexShrink: 0,
    borderRadius: 16,
    backgroundColor: Colors.darkgreen,
    shadowColor: Colors.shadowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    marginTop: 25,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    flexShrink: 0,
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: 2.32,
    textTransform: "capitalize",
  },
});
