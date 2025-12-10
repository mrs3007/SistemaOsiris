// index.ci.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppCI from "./src/AppCI.jsx";

function BannerCI() {
  return (
    <div style={{ backgroundColor: "#ff4d4f", color: "#fff", padding: "0.5rem", textAlign: "center", fontWeight: "bold" }}>
      🚧 Entorno CI/CD — Sistema Osiris 🚧
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(root
