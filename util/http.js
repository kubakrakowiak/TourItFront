import axios from 'axios';
const backendUrl = "http://127.0.0.1:8000/"

export function registerUser(registerUserData){
    axios.post(backendUrl+'api/register/', registerUserData);
};
export async function loginUser(loginUserData){
    try{
        const response = await axios.post(backendUrl+'api/token/', loginUserData);
        return response.data;
    }catch (error){
        console.error('Login failed', error);
        throw  error;
    }
}