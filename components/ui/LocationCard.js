import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "../../constans/styles.js";
import OuterCardLayout from "./OuterCardLayout";
import { Ionicons } from "@expo/vector-icons";

function LocationCard({ onPress, location }) {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed]}
      onPress={onPress}
    >
      <OuterCardLayout>
        <View style={styles.imageContainer}>
          <Image source={location.image} style={styles.locationImage} />
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.locationTitle}>{location.city}</Text>
          <Text>{location.name}</Text>
          <View style={styles.rowDirection}>
            <Ionicons name={"star"} color={"#ffd800"} />
            <Text>{location.rating}</Text>
          </View>
        </View>
      </OuterCardLayout>
    </Pressable>
  );
}

export default LocationCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
  },
  pressed: {
    opacity: 0.7,
  },
  imageContainer: {
    flex: 1,
  },
  dataContainer: {
    flex: 3,
  },
  locationImage: {
    width: 71,
    height: 71,
    borderRadius: 16,
    marginLeft: 8,
  },
  locationTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    letterSpacing: 0.88,
    color: "#3C3B3B",
  },
  rowDirection: {
    flexDirection: "row",
  },
});
