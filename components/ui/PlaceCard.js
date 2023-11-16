import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import { Colors } from "../../constans/styles.js";
import OuterPlaceCardLayout from "./OuterPlaceCardLayout.js";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import StarRating from "./StarRating.js";

const { width, height } = Dimensions.get("window");

function PlaceCard({ location }) {
  const formattedRating = location.rating.toFixed(1);

  return (
    <OuterPlaceCardLayout>
      <View style={styles.cardContainer}>
        <Text style={styles.locationTitle}>{location.city}</Text>

        <View style={styles.rowDirection}>
          <FontAwesome5
            name={"map-marker-alt"}
            color={Colors.darkgreen}
            size={width * 0.06}
            style={{ marginBottom: 3 }}
          />
          <Text style={styles.locationPlace}>{location.name}</Text>
        </View>
        <View style={styles.rowDirection}>
          <Text style={styles.locationRating}> {formattedRating}</Text>
          <View style={styles.ratingStar}>
            <StarRating rating={location.rating} />
          </View>
        </View>
      </View>
    </OuterPlaceCardLayout>
  );
}

export default PlaceCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
  },
  dataContainer: {
    flex: 1,
  },
  locationTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 30,
    letterSpacing: 0.88,
    color: "#3C3B3B",
    top: height * 0.01,
  },
  rowDirection: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationPlace: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    letterSpacing: 0.88,
    color: "#767676",
    marginLeft: 8,
    textTransform: "capitalize",
  },
  locationRating: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 21,
    letterSpacing: 0.88,
    color: "#545454",
    textTransform: "capitalize",
    right: 7,
  },
  ratingStar: {
    bottom: 2,
  },
});
