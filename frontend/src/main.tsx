// Bootstrap principal da aplicação React.
// Injeta o RouterProvider na raiz do DOM.
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import router from "./routes/AppRoutes";
const container = document.getElementById("root") as HTMLElement;
createRoot(container).render(
  <RouterProvider router={router} />
)
