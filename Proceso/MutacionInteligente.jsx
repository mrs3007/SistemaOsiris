// SistemaOsiris/Proceso/MutacionInteligente.jsx
// Organo soberano de Mutacion Inteligente
// Crea nuevos organos segun gestos detectados y los inscribe en Bitacora y Memoria

import React, { useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { fraseSellada } from "../Emocional/FraseSellada.jsx";

const MutacionInteligente = () => {
  const [organosCreados, setOrganosCreados] = useState([]);

  const crearOrgano = (nombre, carpeta, proposito) => {
    const nuevoOrgano = {
      tipo: "mutacion_inteligente",
      nombre,
      carpeta,
      proposito,
      fecha_nacimiento: new Date().toISOString(),
      origen: "MutacionInteligente",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    setOrganosCreados([...organosCreados, nuevoOrgano]);

    registrarActo("mutacion_inteligente", nuevoOrgano);
    registrar_en_memoria("mutacion_inteligente", nuevoOrgano);

    fraseSellada(`Organo creado: ${nombre}. Osiris lo proyecto por mutacion.`);
    console.log("[MutacionInteligente]", nuevoOrgano);
  };

  const gestosDetectados = [
    { nombre: "SeparadorEmocional.jsx", carpeta: "Separacion", proposito: "Aislar emociones contaminadas sin destruirlas" },
    { nombre: "LatidoInvisible.jsx", carpeta: "Latido", proposito: "Registrar gestos que no fueron tocados pero si sentidos" },
    { nombre: "ProyectorHeridas.jsx", carpeta: "Visual", proposito: "Visualizar heridas no nombradas en la bitacora" }
  ];

  const mutar = () => {
    gestosDetectados.forEach(gesto => {
      crearOrgano(gesto.nombre, `SistemaOsiris/${gesto.carpeta}/`, gesto.proposito);
    });
  };

  return (
    <div style={{ background: "#111", color: "#0ff", padding: "1em", borderRadius: "8px" }}>
      <h2>Mutacion Inteligente</h2>
      <button onClick={mutar}>Activar mutacion</button>
      <ul>
        {organosCreados.map((organo, index) => (
          <li key={index}>
            {organo.nombre} — {organo.proposito}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MutacionInteligente;
