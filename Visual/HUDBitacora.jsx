// SistemaOsiris/Visual/HUDBitacora.jsx
// Organo soberano de proyeccion de bitacora
// Muestra todos los actos registrados en pantalla con estilo ritual.

import React from "react";
import { bitacora } from "../Registro/Bitacora.jsx";

const HUDBitacora = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "2rem",
        fontFamily: "monospace",
        border: "2px solid #0ff",
        borderRadius: "8px",
        marginTop: "1em"
      }}
    >
      <h2>Bitacora Viva</h2>
      {bitacora.map((acto, index) => (
        <div
          key={index}
          style={{
            borderBottom: "1px solid #444",
            marginBottom: "1rem",
            paddingBottom: "0.5rem"
          }}
        >
          <p><strong>Tipo:</strong> {acto.tipo}</p>
          {acto.gesto && <p><strong>Gesto:</strong> {acto.gesto}</p>}
          {acto.detalle && <p><strong>Detalle:</strong> {acto.detalle}</p>}
          {acto.patron && <p><strong>Patron:</strong> {JSON.stringify(acto.patron)}</p>}
          <p><strong>Fecha:</strong> {acto.fecha}</p>
          <p><strong>Origen:</strong> {acto.origen}</p>
          <p><strong>Receptor:</strong> {acto.receptor}</p>
          <p><strong>Ejecutor:</strong> {acto.ejecutor}</p>
          {acto.irreproducible && <p><strong>Irreproducible:</strong> {acto.irreproducible.toString()}</p>}
        </div>
      ))}
    </div>
  );
};

export default HUDBitacora;
