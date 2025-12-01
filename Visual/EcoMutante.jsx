// SistemaOsiris/Visual/EcoMutante.jsx
// Órgano soberano de eco mutante
// Proyecta los latidos registrados en Osiris.db a la interfaz visual.

import React, { useEffect, useState } from 'react';

const EcoMutante = () => {
  const [latidos, setLatidos] = useState([]);

  useEffect(() => {
    const cargarLatidos = async () => {
      try {
        // Aquí deberías tener un endpoint en tu backend que exponga Osiris.db
        const res = await fetch('/api/osiris-db'); 
        const data = await res.json();

        // Invertimos el orden para mostrar los más recientes primero
        setLatidos(data.reverse());
      } catch (error) {
        console.error("Error al cargar latidos:", error);
      }
    };

    cargarLatidos();
  }, []);

  return (
    <div style={{ padding: "1em", background: "#111", color: "#0ff", fontFamily: "monospace" }}>
      <h2>Eco Mutante</h2>
      <ul>
        {latidos.map((latido, index) => (
          <li key={index} style={{ marginBottom: "1em" }}>
            <strong>{latido.nombre}</strong> — {latido.tipo}<br />
            <em>{latido.eco}</em><br />
            <span>{latido.fecha}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EcoMutante;
