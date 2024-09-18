import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n"; // Importar la configuración de i18next
import "react-perfect-scrollbar/dist/css/styles.css";
import "./assets/css/styles.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
