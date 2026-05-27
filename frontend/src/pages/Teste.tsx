import { useEffect } from "react";
import api from "../services/api.test";

// Página mock temporária para validar React Router.
export default function Teste(){
    useEffect(() => {
        async function startAxios(){
            const result = await api.getTeste();
            console.log(result.data);
        }
        startAxios();
    }, [])

    return (
        <div>
            <h1 className="font-bold underline text-3xl">Teste</h1>

        </div>
    )
}