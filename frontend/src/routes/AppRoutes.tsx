// Configuração central das rotas da aplicação.
// Define layouts, páginas e navegação.
import { createBrowserRouter } from "react-router";
import App from "../App";
import Teste from "../pages/Teste";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Teste />
            }
        ]
    }
]);

export default router;