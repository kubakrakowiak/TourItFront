import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constans/Styles.js";

function PlainButton ({ children, onPress, color, underline }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        color && { backgroundColor: color },
        underline && {textDecoration: 'underline', textDecorationColor: '#0579E3'},
      ]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PlainButton;

const styles = StyleSheet.create({
  button: {
      width: '100%',
      flexShrink: 0,
      alignItems: "center",
      justifyContent: "center",
      
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    flexShrink: 0,
    color: Colors.registerLogin,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: undefined,
    letterSpacing: 2.32,
    textTransform: 'capitalize',
  },
});
