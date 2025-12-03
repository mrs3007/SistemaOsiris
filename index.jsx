// index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx"; // App vive en src/

// Inicialización soberana de Osiris
console.log("Modo Osiris activo: vigilancia_total");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
