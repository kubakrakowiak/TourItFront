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
      width: 320,
      height: 45,
      flexShrink: 0,
      borderRadius: 16,
      backgroundColor: Colors.darkgreen,
      shadowColor: '#817F7F',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 4
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    width: 131.859,
    height: 21.977,
    flexShrink: 0,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: undefined,
    letterSpacing: 2.32,
    textTransform: 'capitalize',
  },
});
