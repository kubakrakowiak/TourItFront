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
        const response = await axios.post(backendUrl+'api/token/', loginUserData);
        return response.data;
    }catch (error){
        console.error('Login failed', error);
        throw  error;
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