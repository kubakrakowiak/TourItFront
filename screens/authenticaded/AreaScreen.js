import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
} from "react-native";
import Header from "../../components/partials/Header";
import LocationCard from "../../components/ui/LocationCard";
import SectionTitle from "../../components/ui/SectionTitle";
import HorizontalMenu from "../../components/partials/HorizontalMenu";
import PlainButton from "../../components/ui/PlainButton";

import { getNearestLocations } from "../../util/http"; // Import funkcji getNearestLocations

const AreaScreen = () => {
    const [locations, setLocations] = useState([]); // Stan dla lokacji

    useEffect(() => {
        // Pobieranie danych przy montowaniu komponentu
        const xCoord = 1; // Przykładowe współrzędne, do zmiany w zależności od potrzeb
        const yCoord = 1;

        getNearestLocations(xCoord, yCoord)
            .then(data => {
                setLocations(data); // Aktualizacja stanu lokacji
            })
            .catch(error => {
                console.error("Błąd podczas pobierania lokacji", error);
            });
    }, []);

    const handleCategoryPress = (categoryId) => {
        alert(`Category ${categoryId} pressed`);
    };

    return (
        <ScrollView
            style={styles.container}
            keyboardShouldPersistTaps="handled"
            scrollEnabled={true}
        >
            <View style={styles.header}>
                <Header headerText={"Kraków"} subHeaderText={"best places!"} />
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
                                All places in Kraków!
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
                        {locations.map((location) => (
                            <LocationCard
                                onPress={() => alert("test")}
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

export default AreaScreen;
