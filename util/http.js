import axios from 'axios';
const backendUrl = "http://127.0.0.1:8000/"
const GOOGLE_API_KEY = 'AIzaSyBoA0fJmB7BATExrJg305W45_0B9GNxBCI';
export async function registerUser(registerUserData){
    try {
        const response = await axios.post(backendUrl+'api/register/', registerUserData);
        return response.data;
    }catch (error){
        console.error('Registration failed', error);
        throw error;
    }
}

export async function loginUser(loginUserData){
    try{
        const response = await axios.post(backendUrl+'api/token/', loginUserData);
        return response.data;
    }catch (error){
        console.error('Login failed', error);
        throw  error;
    }
}
export async function getNearestLocations(token, xCoord, yCoord, latitudeDelta, longitudeDelta) {
    try {
        const response = await axios.get(`${backendUrl}api/nearest-locations/?x_coord=${xCoord}&y_coord=${yCoord}`, {
            params: {
                x_coord: xCoord,
                y_coord: yCoord,
                latitude_delta: latitudeDelta,
                longitude_delta: longitudeDelta
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Fetching nearest locations failed', error);
        throw error;
    }
}
export async function getLocationDetails(locationId, token) {
    try {
        const response = await axios.get(`${backendUrl}api/get-location/?id=${locationId}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Fetching location details failed', error);
        throw error;
    }
}
export async function getTrendingLocations(token) {
    try {
        const response = await axios.get(`${backendUrl}api/trending/`, {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Fetching trending locations failed', error);
        throw error;
    }
}
export async function getCityName (xCoord, yCoord){
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${xCoord},${yCoord}&key=${GOOGLE_API_KEY}`);
        if (response.data.status === 'OK') {
            const addressComponents = response.data.results[0].address_components;
            const cityComponent = addressComponents.find(component =>
                component.types.includes('locality') || component.types.includes('administrative_area_level_1')
            );
            const cityName = cityComponent ? cityComponent.long_name : null;
            return cityName;
        } else {
            throw new Error(response.data.error_message || 'Failed to get the city name');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getLocationsByCity(token, cityName) {
    try {
        const response = await axios.get(`${backendUrl}api/locations`, {
            params: { city: cityName },
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Fetching locations by city failed', error);
        throw error;
    }
}

export async function getViewedLocations(token) {
    try {
        const response = await axios.get(`${backendUrl}api/viewed-locations/`, {
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Fetching trending locations failed', error);
        throw error;
    }
}