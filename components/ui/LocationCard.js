import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constans/styles.js";

function LocationCard({ onPress, location}) {
    return (
        <Pressable
            style={({ pressed }) => [
                pressed && styles.pressed,
            ]}
            onPress={onPress}
        >
            <View>
                <Text>{location.image}</Text>
                <Text>{location.city}</Text>
                <Text>{location.name}</Text>
                <Text>{location.rating}</Text>
            </View>
        </Pressable>
    );
}

export default LocationCard;

const styles = StyleSheet.create({
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
