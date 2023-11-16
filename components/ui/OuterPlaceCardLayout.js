import { StyleSheet, View } from "react-native";
import { Colors } from "../../constans/styles.js";

function OuterCardLayout({ children }) {
  return <View style={styles.outerCardContainer}>{children}</View>;
}

export default OuterCardLayout;

const styles = StyleSheet.create({
  outerCardContainer: {
    
    height: 86,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 20,
  },
});
