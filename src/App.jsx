// src/App.jsx
// Componente principal: Sistema Osiris

import React, { useEffect, useState } from "react";

export default function App() {
  const [saludo, setSaludo] = useState("");

  useEffect(() => {
    const actualizarSaludo = () => {
      const h = new Date().getHours();
      setSaludo(
        h < 12
          ? "Buenos dias"
          : h < 19
          ? "Buenas tardes"
          : "Buenas noches"
      );
    };
    actualizarSaludo();
    
    const intervalo = setInterval(actualizarSaludo, 60000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div style={{ fontFamily: "serif", color: "#4B0082", padding: 24, maxWidth: 1080, margin: "0 auto", textAlign: "center" }}>
      <h1>{saludo}</h1>
      <p>Sistema Osiris activo</p>
    </div>
  );
}
