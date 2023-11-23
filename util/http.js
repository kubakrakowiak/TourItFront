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
export async function getNearestLocations(xCoord, yCoord) {
    try {
        const response = await axios.get(backendUrl + 'api/nearest-locations/', {
            params: {
                x_coord: xCoord,
                y_coord: yCoord
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data.map(item => ({
            image: require(`../../assets/${item.imageName}.jpeg`),
            name: item.name,
            rating: item.rating,
            city: item.city,
            isLiked: false,
            id: item.id
        }));
    } catch (error) {
        console.error('Failed to fetch nearest locations', error);
        throw error;
    }
}
