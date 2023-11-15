import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "../../constans/styles.js";

function Header({ headerText, subHeaderText }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerFirstText}>{headerText}</Text>
        <Text style={styles.subHeaderFirstText}>{subHeaderText}</Text>
      </View>
      <View style={styles.smallLogoContainer}>
        <View>
          <Image
            style={styles.imageLogo}
            source={require("../../assets/smallLogo.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "flex-start",
    paddingLeft: "15%",
  },
  headerContainer: {
    flex: 1,
  },
  headerFirstText: {
    color: "#4D4D4D",
    textAlign: "left",
    fontFamily: "Poppins",
    fontSize: "9vw",
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 3.57,
    top: 10,
    right: 5,
  },
  subHeaderFirstText: {
    color: "#FEA02F",
    textAlign: "left",
    fontFamily: "Poppins",
    fontSize: "5vw",
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 1.7,
  },
  smallLogoContainer: {
    width: 50,
    height: 50,
    paddingRight: "5%",
    alignItems: "flex-end",
    top: 15,
  },
  imageLogo: {
    width: 100,
    height: 65,
    margin: 10,
  },
});

export default Header;
