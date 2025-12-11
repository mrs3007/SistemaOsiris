// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";

// ✅ Importa tu App.jsx real
import App from "./App.jsx";

// ✅ Monta Osiris en el DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ✅ Tu mensaje original se mantiene
console.log("Sistema Osiris inicializado desde main.jsx");
