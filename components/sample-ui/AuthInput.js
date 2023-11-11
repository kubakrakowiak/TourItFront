import { View, Text, TextInput, StyleSheet } from "react-native";

import { Colors } from "../../constants/styles";

function AuthInput({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  backgroundColor,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[
          styles.input,
          backgroundColor && { backgroundColor: backgroundColor },
        ]}
        autoCapitalize={false}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        textAlign={"center"}
        placeholder={label}
        placeholderTextColor={"#d5d5d5"}
      />
    </View>
  );
}

export default AuthInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: "white",
    marginBottom: 4,
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    backgroundColor: Colors.primary100,
    borderRadius: 30,
    paddingVertical: 18,
    paddingHorizontal: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});
