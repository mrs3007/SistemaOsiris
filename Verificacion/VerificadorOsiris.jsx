// SistemaOsiris/Verificacion/VerificadorOsiris.jsx
import React from "react";
import { OsirisTotal } from "../OsirisTotal.jsx";
import { registrarEnBitacora } from "../Memoria/registrar_en_memoria.jsx";

export default function VerificadorOsiris() {
  const claves = Object.keys(OsirisTotal);
  const fecha = new Date().toISOString();

  // Registro en Bitacora
  registrarEnBitacora("Verificacion de organos Osiris", {
    fecha,
    total: claves.length,
    organos: claves,
  });

  return (
    <div
      style={{
        fontFamily: "monospace",
        padding: "1em",
        background: "#111",
        color: "#0f0",
      }}
    >
      <h2>Verificador de Organos Osiris</h2>
      <p>Fecha de verificacion: {fecha}</p>
      <ul>
        {claves.map((clave) => (
          <li key={clave}>✅ {clave} activo</li>
        ))}
      </ul>
      <p>Total de organos activos: {claves.length}</p>
    </div>
  );
}
