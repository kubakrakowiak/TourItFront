import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForegroundPermissions } from 'expo-location';
import * as Location from 'expo-location';

import useFetchLocations from '../../hooks/useFetchLocations';
import { getNearestLocations } from '../../util/http';

const FullMapScreen = () => {
    const navigation = useNavigation();
    const [currentRegion, setCurrentRegion] = useState(null);
    const { locations, isLoading, error } = useFetchLocations(
        currentRegion?.latitude,
        currentRegion?.longitude,
        currentRegion?.latitudeDelta,
        currentRegion?.longitudeDelta
    );

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
            console.log('error')
            return false;
        }

        return true;
    }


    const selectLocationHandler = (locationId) => {
        navigation.navigate('Place', { locationId });
    };
    if (error){
        console.log(error);
    }

    return (
        <MapView
            style={styles.map}
            region={currentRegion}
            onRegionChangeComplete={(region) => {
                setCurrentRegion(region);
            }}
        >

            {locations.map((location) => (
                <Marker
                    key={location.id.toString()}
                    title={location.name}
                    coordinate={{
                        latitude: location.x_coord,
                        longitude: location.y_coord,
                    }}
                    onPress={() => navigation.navigate('Place', { locationId: location.id})}
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
