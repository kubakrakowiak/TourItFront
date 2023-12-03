import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Alert } from 'react-native';
import { useForegroundPermissions } from 'expo-location';
import * as Location from 'expo-location';


import { getNearestLocations } from 'util/http.js';

const FullMapScreen = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [currentRegion, setCurrentRegion] = useState(null);
    const [locations, setLocations] = useState([]);

    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

    useEffect(() => {
        (async () => {
            const hasPermission = await verifyPermissions();
            if (!hasPermission) {
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            setCurrentRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });

            // Pobieranie lokalizacji
            try {
                const nearestLocations = await getNearestLocations(location.coords.latitude, location.coords.longitude);
                setLocations(nearestLocations);
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        })();
    }, []);

    async function verifyPermissions() {
        if (locationPermissionInformation.status === Location.PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }

        if (locationPermissionInformation.status === Location.PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient Permission!',
                'You need to grant location permission to use this app.'
            );
            return false;
        }

        return true;
    }

    function selectLocationHandler(event) {
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;
        setSelectedLocation({ latitude: lat, longitude: lng });
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={currentRegion}
            onPress={selectLocationHandler}
        >
            {selectedLocation && (
                <Marker title="Selected Location" coordinate={selectedLocation} />
            )}

            {locations.map((location, index) => (
                <Marker
                    key={index}
                    title={location.name}
                    coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                />
            ))}
        </MapView>
    );
};

export default FullMapScreen;

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});
