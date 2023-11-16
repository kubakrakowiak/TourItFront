import axios from 'axios';
const backendUrl = "http://127.0.0.1:8000/"

export function registerUser(registerUserData){
    axios.post(backendUrl+'api/register/', registerUserData);
};
export function loginUser(loginUserData){
    axios.post(backendUrl+'api/token/', loginUserData).then(data=>{console.log(data.message)}).catch(data=>{console.log(data.message)});

}