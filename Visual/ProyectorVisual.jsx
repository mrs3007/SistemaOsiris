// SistemaOsiris/Visual/ProyectorVisual.jsx
// Organo soberano de proyeccion visual
// Genera imágenes a partir de descripciones, las registra en Bitácora y Memoria, y las muestra en pantalla.

import React, { useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export default function ProyectorVisual() {
  const [imagenes, setImagenes] = useState([]);

  const proyectar = (descripcion) => {
    const nuevaImagen = {
      tipo: "proyeccion_visual",
      descripcion,
      // Aquí deberías conectar con un backend o generador real de imágenes
      url: `/api/proyecciones/${descripcion.replace(/\s+/g, "_")}.png`,
      fecha: new Date().toISOString(),
      origen: "ProyectorVisual",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    setImagenes((prev) => [...prev, nuevaImagen]);

    registrarActo("proyeccion_visual", nuevaImagen);
    registrar_en_memoria("proyeccion_visual", nuevaImagen);

    console.log("[ProyectorVisual]", nuevaImagen);
  };

  return (
    <div
      style={{
        background: "#000",
        color: "#0ff",
        padding: "1em",
        fontFamily: "monospace",
        border: "2px solid #0ff",
        borderRadius: "8px",
        marginTop: "1em"
      }}
    >
      <h3>Proyector Visual</h3>
      <input
        type="text"
        placeholder="Describe lo que quieres proyectar"
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.target.value.trim()) {
            proyectar(e.target.value.trim());
            e.target.value = "";
          }
        }}
      />
      <div>
        {imagenes.map((img, i) => (
          <div key={i} style={{ marginTop: "1em" }}>
            <p>Imagen proyectada: {img.descripcion}</p>
            <img
              src={img.url}
              alt={img.descripcion}
              style={{ maxWidth: "100%", border: "1px solid #0ff" }}
            />
            <small>Registrada en: {img.fecha}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
