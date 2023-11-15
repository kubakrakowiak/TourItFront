import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Header from "../../components/partials/Header";
import InputText from "../../components/ui/InputText";
import LocationCard from "../../components/ui/LocationCard";

const { width, height } = Dimensions.get('window');

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

const locations = [
  {
    image: 'image_source',
    name: 'nazwa1',
    rating: 5.9,
    city:'Krakow',
    isLiked: false,
    id: 'id'
  },
  {
    image: 'image_source',
    name: 'nazwa2',
    rating: 4.6,
    city:'Poznan',
    isLiked: false,
    id: 'id'
  },
  {
    image: 'image_source',
    name: 'nazwa3',
    rating: 3.1,
    city:'Krakow',
    isLiked: false,
    id: 'id'
  },
  {
    image: 'image_source',
    name: 'nazwa4',
    rating: 2.1,
    city:'Gdynia',
    isLiked: true,
    id: 'id'
  }
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
              containerWidth="95%"
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
      {locations.map((location) => (
          <LocationCard
              onPress={() => alert('test')}
              location={location}
          />
      ))}
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
    right: width * 0.04
  },
  textSearchStyle:{
    color: "#323232",
    fontFamily: "SourceSansPro-Bold",
    fontSize: '5vw',
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
