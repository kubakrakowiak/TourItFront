import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForegroundPermissions } from 'expo-location';
import * as Location from 'expo-location';

import useFetchLocations from '../../hooks/useFetchLocations';
import { getNearestLocations } from '../../util/http';

const FullMapScreen = () => {
    const navigation = useNavigation();
    const [currentRegion, setCurrentRegion] = useState(null);
    const [locations, setLocations, error] = useState([]);

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


    const selectLocationHandler = (locationId) => {
        navigation.navigate('Place', { locationId });
    };
    if (error){
        Alert.alert('Location error', 'Error during fetching locations' [
            {text: 'OK', onPress: () => console.log('OK Pressed')}
            ]);
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={currentRegion}
            onRegionChangeComplete={(region) => {
                setCurrentRegion(region);
            }}
        >

            {locations.map((location) => (
                <Marker
                    key={location.id}
                    title={location.name}
                    coordinate={{
                        latitude: location.x_coord,
                        longitude: location.y_coord,
                    }}
                    onPress={() => selectLocationHandler(location.id)}
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
