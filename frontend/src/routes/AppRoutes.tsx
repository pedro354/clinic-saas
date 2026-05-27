// Configuração central das rotas da aplicação.
// Define layouts, páginas e navegação.
import { createBrowserRouter } from "react-router";
import App from "../App";
import Teste from "../../test/Teste";

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