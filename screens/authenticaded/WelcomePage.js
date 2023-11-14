import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import Header from "../../components/partials/Header";
import InputText from "../../components/ui/InputText";

const categories = [
  { id: "mount", name: "Mount", image: require("../../assets/mount.png") },
  { id: "beach", name: "Beach", image: require("../../assets/beach.png") },
  {
    id: "waterfall",
    name: "Waterfall",
    image: require("../../assets/waterfall.png"),
  },
  { id: "lake", name: "Lake", image: require("../../assets/lake.png") },
  { id: "river", name: "River", image: require("../../assets/river.png") },
  { id: "city", name: "City", image: require("../../assets/city.png") },
];
const WelcomePage = () => {
  const onCategoryPress = (categoryId) => {
    console.log(`Category ${categoryId} pressed`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Header headerText={"Welcome"} subHeaderText={"back!"} />
        </View>
      </View>

      <View style={styles.pageContent}>
        
        <Text style={styles.captionText}>Where do you want to go?</Text>
        <InputText
          textInputConfig={{
            placeholder: "Search",
            keyboardType: "default",
            textTransform: "capitalize",
          }}
          icon={"search"}
        />

        <Text style={styles.captionText}>Category</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0 }}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => onCategoryPress(category.id)}
              style={{ alignItems: "center", marginRight: 16 }}
            >
              <Image
                source={category.image}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  marginBottom: 4,
                }}
              />
              <Text>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
  header: {
    flex: 1,
  },
  pageContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    width: "80%",
    backgroundColor: "white",
    marginBottom: 10,
    paddingLeft: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#dddddd",
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  registerText: {
    marginRight: 5,
    color: "#aaaaaa",
  },
  registerButton: {
    color: "#1292B4",
    fontWeight: "bold",
  },
  image: {
    width: 237,
    height: 177,
    margin: 20,
  },
  welcomeText: undefined,
  captionText: undefined,
});

export default WelcomePage;
