import React from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import Header from "../../components/partials/Header";
import InputText from "../../components/ui/InputText";
import LocationCard from "../../components/ui/LocationCard";
import SectionTitle from "../../components/ui/SectionTitle";
import HorizontalMenu from "../../components/partials/HorizontalMenu";
import PlainButton from "../../components/ui/PlainButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useFetchLocations from "../../hooks/useFetchLocations";
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");


const WelcomeScreen = () => {

    const navigation = useNavigation();
    const { locations, isLoading, error } = useFetchLocations(1, 1);

    const processedLocations = locations.map(location => ({
        //image: require("../../assets/sniezka.jpeg"),
        id: location.id,
        name: location.name,
        rating: location.average_rating,
        city: location.simple_address,
        isLiked: false,
    }));
    const handleCategoryPress = (categoryId) => {
        alert(`Category ${categoryId} pressed`);
    };
    const AreaScreen = ({ route }) => {
        const { cityName } = route.params;
        return cityName;
    };


    return (
        <ScrollView
            style={styles.container}
            keyboardShouldPersistTaps="handled"
            scrollEnabled={true}
        >
            <View style={styles.header}>
                <Header headerText={AreaScreen.cityName} subHeaderText={"best places!"} />
            </View>

            <View style={styles.pageContent}>

                <View style={styles.categoryContent}>
                    <View style={styles.textHolderContent}>
                        <SectionTitle fontSize={20} marginBottom={5}>
                            Category
                        </SectionTitle>
                    </View>
                    <View style={styles.horizontalMenu}>
                        <HorizontalMenu onCategoryPress={handleCategoryPress} />
                    </View>
                </View>

                <View style={styles.cardHolderContainer}>
                    <View style={styles.cardContainer}>
                        <View style={styles.textCardHolderContent}>
                            <SectionTitle fontSize={20} color={"#494949"}>
                                All places in {AreaScreen.cityName}!
                            </SectionTitle>
                        </View>
                    </View>

                    <View style={styles.plainButtonHolder}>
                        <PlainButton
                            fontSize={14}
                            color={"#7E7D7D"}
                            letterSpacing={0.77}
                            textDecorationLine={"normal"}
                        >
                            Sort by
                        </PlainButton>
                    </View>

                    <View style={styles.cardHolder}>
                        {processedLocations.map(location => (
                            <LocationCard
                                onPress={() => navigation.navigate('Place', { locationId: location.id })}
                                location={location}
                                key={location.id}
                            />
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
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
        flex: 5,
    },
    searchContent: {
        flex: 1.5,
        bottom: 20,
    },
    categoryContent: {
        flex: 1.8,
    },
    horizontalMenu: {
        alignItems: "center",
    },
    textHolderContent: {
        textAlign: "left",
        alignItems: "flex-start",
        paddingLeft: "5%",
    },
    searchBar: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 16,
    },
    cardHolderContainer: {
        flex: 6,
    },
    cardContainer: {
        flex: 0.5,
    },
    plainButtonHolder: {
        textAlign: "right",
        paddingRight: "5%",
        alignSelf: "flex-end",
        paddingLeft: 15,
        right: 15,
        marginBottom: 5,
    },
    cardHolder: {
        flex: 4,
    },
    textCardHolderContent: {
        textAlign: "left",
        alignItems: "flex-start",
        paddingLeft: "5%",
        top: 20,
    },
});

export default WelcomeScreen;