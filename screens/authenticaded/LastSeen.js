import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import LocationCard from '../../components/ui/LocationCard';
import Header from '../../components/partials/Header';
import BackButton from '../../components/ui/BackButton';
import useViewedLocations from '../../hooks/useViewedLocations'; // Import the custom hook
import SectionTitle from '../../components/ui/SectionTitle';

const LastSeen = ({ navigation }) => {
  const { locations, isLoading, error } = useViewedLocations(); // Make sure this hook provides the correct data structure

  const renderLocation = ({ item }) => (
    <LocationCard
      onPress={() => navigation.navigate("Place", { locationId: item.id })}
      location={item}
    />
  );

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

  return (
    <View style={styles.container}>
      <View style={styles.fullHeader}>
        <View style={styles.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.header}>
        <Header headerText="Last" subHeaderText="seen!" />
        </View>
      </View>
      <View style={styles.title}>
      <SectionTitle fontSize={20} color={"#494949"} >
          All last seen places!
        </SectionTitle>
        </View>
      <FlatList
        data={locations}
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
  fullHeader: {
    flexDirection: "row",
  },
  header: {
    flex: 2,
    bottom: 10,
  },
  textCardHolderContent: {
    textAlign: "left",
    alignItems: "flex-start",
    paddingLeft: "5%",
    top: 10,
  },
  backButton: {
    marginTop: 20,
    marginLeft: 20,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title:{
marginLeft: 10,
  },
});

export default LastSeen;
