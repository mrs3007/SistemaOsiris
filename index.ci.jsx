// index.ci.jsx
// Arranque soberano para despliegues CI/CD de Sistema Osiris

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx";

function BannerCI() {
  return (
    <div
      style={{
        backgroundColor: "#ff4d4f",
        color: "#fff",
        padding: "0.5rem",
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      🚧 Entorno CI/CD — Sistema Osiris 🚧
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BannerCI />
      <App />
    </React.StrictMode>
  );
  console.log("Osiris: montaje CI/CD completado");
} else {
  console.error("⚠️ No se encontro el elemento #root en index.ci.html");
}
