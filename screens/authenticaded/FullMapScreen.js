import MapView, { Marker } from "react-native-maps";
import { Alert, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useForegroundPermissions } from 'expo-location';


function Map() {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [currentRegion, setCurrentRegion] = useState(null);

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
        })();
    }, []);

    async function verifyPermissions(){
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
        </MapView>
    );
}

export default Map;

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});
