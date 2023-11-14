import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constans/styles.js";

function Button({ children, onPress, color }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        color && { backgroundColor: color },
      ]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "70%",
    height: 45,
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
    lineHeight: undefined,
    letterSpacing: 2.32,
    textTransform: "capitalize",
  },
});
