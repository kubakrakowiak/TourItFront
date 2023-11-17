import {View, StyleSheet, Alert, Image, Text} from "react-native";
import {getCurrentPositionAsync, getLastKnownPositionAsync, useForegroundPermissions, PermissionStatus} from 'expo-location'
import Button from "../ui/Button";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {useState} from "react";
import {getMapPreview} from "../../util/location";
import {useNavigation} from "@react-navigation/native";

function LocationPicker() {
    const [pickedLocation, setPickedLocation] = useState(true)

    const navigation = useNavigation();
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
    async function verifyPermissions(){
        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert(
                'Insufficient Permission!',
                'You need to grant location permission to use this app.'
            );
            return false;
        }

        return true;
    }
    async function getLocationHandler() {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return;
        }

        const location = await getLastKnownPositionAsync();
        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        });
    }

    function pickOnMapHandler() {
        navigation.navigate('FullMap');
    }

    let locationPreview = <Text>No location picked yet.</Text>

    if(pickedLocation){
       locationPreview =
           <Image
               style={styles.image}
               source={{
                   uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
               }}
           />
    }

    getLocationHandler();

    return (
        <View>
            <View style={styles.mapPreview}>{locationPreview}</View>
            <View style={styles.action}>
                <Button icon="location" onPress={getLocationHandler}>
                    Locate User
                </Button>
                <Button icon="map" onPress={pickOnMapHandler}>
                    Pick on Map
                </Button>
            </View>
        </View>
    );
}
export default LocationPicker;

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: '100%',
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F1F1F1",
        borderRadius: 4,
        overflow: 'hidden'
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    }
});