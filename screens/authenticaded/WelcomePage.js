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
        <View style={styles.searchContent}>
          <View style={styles.textSearchContent}>

            <Text style={styles.textSearchStyle}>Where do you want to go?</Text>
          </View>

          <View style={styles.searchBar}>
            <InputText
              textInputConfig={{
                placeholder: "Search",
                keyboardType: "default",
              }}
              icon={"search"}
              textTransform="capitalize"
            />
          </View>
        </View>

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
    flex: 1,
  },
  searchContent: {
    flex: 1,
  },
  textSearchContent: {
    width: "80%",
    textAlign: "left",
    alignItems: "center",
    paddingLeft: "5%",
    right:10
  },
  textSearchStyle:{
    color: "#323232",
    fontFamily: "SourceSansPro-Bold",
    fontSize: '4vw',
    fontStyle: "normal",
    fontWeight: "900",
    letterSpacing: 0.99,
  },
  searchBar: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  
  welcomeText: undefined,
  captionText: undefined,
});

export default WelcomePage;
