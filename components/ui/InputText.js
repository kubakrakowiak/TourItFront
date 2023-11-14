import { StyleSheet, View, TextInput, Text } from "react-native";


function InputText ({label, onUpdateValue, value, textInputConfig}) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input}
              onChangeText={onUpdateValue}
              value={value}
             {...textInputConfig} />
        </View>
    );
}
    

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginBottom:18,
        borderRadius: 13,
        backgroundColor: "white",
        width: "70%",
        height: 50,
        borderWidth: 1,
        borderColor: "#EBEBEB",
        
    },
    input: {
        width: "100%",
        height:50,
        padding: 13,
        borderRadius: 13,
        fontSize: 12,
        placeholderTextColor: "rgba(0, 0, 0, 0.35)",
        fontFamily: "Poppins",
        fontSize: 14,
        elevation: 4,
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: '600',
        letterSpacing: 2.03,
        textTransform: 'lowercase',
        

    },
    label: {
        fontSize: 12,
        color: "white",
        
    },
});

export default InputText
