import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { Colors } from "../../constans/styles.js";

const { width, height } = Dimensions.get("window");

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
    top: height * 0.025,
    alignItems: "flex-start",
    paddingLeft: width * 0.08,
    paddingRight: width * 0.01,
  },
  headerContainer: {
    flex: 1,
    paddingBottom: height * 0.2,
  },
  headerFirstText: {
    color: "#4D4D4D",
    textAlign: "left",
    fontFamily: "Poppins",
    fontSize: 42,
    fontStyle: "normal",
    fontWeight: "200",
    letterSpacing: 3.57,
    top: height * 0.02,
    right: 5,
  },
  subHeaderFirstText: {
    color: "#FEA02F",
    textAlign: "left",
    fontFamily: "Poppins",
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 1.7,
    marginTop: 2,
  },
  smallLogoContainer: {
    width: width * 0.15,
    height: width * 0.15,
    paddingRight: "5%",
    alignItems: "flex-end",
    top: height * 0.015,
  },

  imageLogo: {
    width: width * 0.25,
    height: width * 0.24,
    resizeMode: "contain",
  },
});

export default Header;
