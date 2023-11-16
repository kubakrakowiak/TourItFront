import { Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import { Colors } from "../../constans/styles.js";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

function BackButton({ onPress, color }) {
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
        <Ionicons
          style={styles.innerButtonStyle}
          size={24}
          name="caret-back"
          color="black"
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: width * 0.1,
    height: width * 0.1,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
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
});

export default BackButton;
