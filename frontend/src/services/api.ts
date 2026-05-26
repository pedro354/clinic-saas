import axios from "axios";
import type { AxiosResponse } from "axios";

type messageTeste = {
    id: number;
    message: string;
}

const getTeste = async():Promise<AxiosResponse<messageTeste>> => {
    const response = await axios.get<messageTeste>(`http://localhost:3000/api/`);
    return response;
}
/* const getApointments = async() =>{
    const response = await axios.get("/appointments");
    return response;
}
 */export default {
    getTeste
};