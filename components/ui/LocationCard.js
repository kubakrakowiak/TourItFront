import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { Colors } from "../../constans/styles.js";
import OuterCardLayout from "./OuterCardLayout";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

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
          <View style={styles.rowDirection}>
            <FontAwesome5
              name={"map-marker-alt"}
              color={Colors.darkgreen}
              size={15}
              bottom={3}
            />
            <Text style={styles.locationPlace}>{location.name}</Text>
          </View>
          <View style={styles.rowDirection}>
            <FontAwesome name={"star"} color={"#FEA02F"} size={17} right={2} />
            <Text style={styles.locationPlace} top={2} right={3}>
              {location.rating}
            </Text>
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
    alignItems: "center",
  },
  locationPlace: {
    fontFamily: "Poppins-Bold",
    fontSize: 11,
    letterSpacing: 0.88,
    color: "#767676",
    marginLeft: 5,
    textTransform: "capitalize",
  },
});
