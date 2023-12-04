import axios from 'axios';
const backendUrl = "http://127.0.0.1:8000/"

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
        console.log('error1')
        const response = await axios.post(backendUrl+'api/token/', loginUserData);
        console.log('error2')
        return response.data;
    }catch (error){
        console.log('error3')
        console.error('Login failed', error);
        throw  error;
    }
}
export async function getNearestLocations(token, xCoord, yCoord) {
    try {
        const response = await axios.get(`${backendUrl}api/nearest-locations/?x_coord=${xCoord}&y_coord=${yCoord}`, {
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
export async function getLocationDetails(locationId) {
    try {
        console.log('error')
        const response = await axios.get(`${backendUrl}api/get-location/?id=${locationId}`);
        return response.data;
    } catch (error) {
        console.error('Fetching location details failed', error);
        throw error;
    }
}


export async function getLocationData(id){
    try {
        const url = backendUrl + 'api/get-location/?id=' + id;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching location data', error);
        throw error;
    }
}