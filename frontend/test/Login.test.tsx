import { useState } from "react";
import api from "../src/services/api";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (ev:React.SubmitEvent<HTMLFormElement>) => {
        ev.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados de login para o backend.
        const response = await api.login({ email, password });
        console.log(response.token);
        console.error("Login submit:", { email, password });
    }

    return(
        <div className="container h-auto!  text-3xl text-center column">
            is login page
            <form onSubmit={handleLogin} className="h-auto flex flex-col gap-1">
                <input className="border-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="border-2" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="bg-blue-900 cursor-pointer" type="submit" >Entrar</button>
            </form>
        </div>
    )
}