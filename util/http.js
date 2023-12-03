import axios from 'axios';
const backendUrl = "http://10.0.0.2:8000/"

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
export async function fetchNearestLocations(token, xCoord, yCoord) {
    try {
        const response = await axios.get(`${backendUrl}api/nearest-locations/?x_coord=${xCoord}&y_coord=${yCoord}`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Fetching nearest locations failed', error);
        throw error;
    }
}
