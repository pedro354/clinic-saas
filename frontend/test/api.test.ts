import type { AxiosResponse } from "axios";
import axios from "axios";

type messageTeste = {
    id: number;
    message: string;
}

const getTeste = async():Promise<AxiosResponse<messageTeste>> => {
    const response = await axios.get<messageTeste>(`http://localhost:3000/api/`);
    return response;
}

export default {
    getTeste
};
