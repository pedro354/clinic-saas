import axios from "axios";

type loginData = {
    email: string;
    password: string;
}
type loginResponse = {
    token: string;

}

/* const getApointments = async() =>{
    const response = await axios.get("/appointments");
    return response;}*/

const login = async(data: loginData):Promise<loginResponse> => {
    const response = await axios.post<loginResponse>(`http://localhost:3000/api/login`, data);
    return response.data;
}
 export default {
    login

};
