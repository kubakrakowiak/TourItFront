import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";
import Header from "../../components/partials/Header";
import LocationCard from "../../components/ui/LocationCard";
import SectionTitle from "../../components/ui/SectionTitle";
import HorizontalMenu from "../../components/partials/HorizontalMenu";
import useFetchLocations from "../../hooks/useFetchLocations";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const AreaScreen = ({ route }) => {
  const navigation = useNavigation();
  const { locations, isLoading, error } = useFetchLocations(1, 1);
  const { searchText } = route.params;

  const renderLocation = ({ item }) => (
    <LocationCard
      onPress={() => navigation.navigate("Place", { locationId: item.id })}
      location={item}
    />
  );

  const sampleLocation = { //Tylko do testow, do wywalenia po sciaganiu z backa (cała zmienna)
    id: '1',
    name: 'Sample Place',
    average_rating: '4.5',
    simple_address: '123 Sample St, City',
  };

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occurred: {error.message}</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const sampleLocations = [sampleLocation]; // Tylko do testow, wywalic po sciaganiu z backa

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Header headerText={searchText} subHeaderText={"best places!"} />
        <View style={styles.title}>
        <SectionTitle fontSize={20} color={"#494949"}>
          All places in 
          <Text style={styles.locationText}> {searchText}!</Text>
        </SectionTitle>
        </View>
      </View>

      <FlatList
        //data={locations} //Poprawne do sciagania z backu, odkomentowac jak bedzie pobierac z backa
      data={sampleLocations} // Tylko do testow, wywalic po sciganiu z backa
        renderItem={renderLocation}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
  headerContent: {
    paddingTop: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  locationText:{
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    color: "black"
  },
  title:{
    marginLeft: 10,
  }
});

export default AreaScreen;
