import { StyleSheet, View } from "react-native";
import { Colors } from "../../constans/styles.js";

function OuterCardLayout({ children }) {
  return <View style={styles.outerCardContainer}>{children}</View>;
}

export default OuterCardLayout;

const styles = StyleSheet.create({
  outerCardContainer: {
    backgroundColor: "#FFF",
    height: 99,
    flexDirection: "row",
    borderRadius: 16,
    elevation: 4,
    shadowColor: Colors.shadowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 20,
  },
});
