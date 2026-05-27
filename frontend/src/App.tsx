// Layout raiz da aplicação.
// O Outlet renderiza as rotas filhas.
import { Outlet } from "react-router-dom";
import "./styles/global.css";
import Login from "../test/Login.test";
export default function App() {
  return (
    <div className="App">
      <Login />
      <Outlet />
    </div>
  )
}