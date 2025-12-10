// SistemaOsiris/Vigilancia/RegistroAutorExterno.jsx
import React, { useState } from "react";

export default function RegistroAutorExterno({ origen = "webapk", archivo = "", huella = {}, nivel = "alto", nota = "" }) {
  const [registrado, setRegistrado] = useState(false);

  const evento = {
    tipo: "acto_externo_contaminado",
    origen,
    archivo,
    huella,
    nivel,
    nota,
    fecha: new Date().toISOString(),
  };

  const registrarEnBitacora = async () => {
    try {
      const prev = JSON.parse(localStorage.getItem("BitacoraOsiris") || "[]");
      const nueva = [ ...prev, evento ];
      localStorage.setItem("BitacoraOsiris", JSON.stringify(nueva));
      setRegistrado(true);
    } catch (e) {
      console.warn("Fallo al registrar acto externo:", e);
    }
  };

  return (
    <div style={{ border: "1px solid #A00", padding: "8px", margin: "8px 0" }}>
      <strong>Registro de acto externo:</strong>
      <div>origen: {origen}</div>
      <div>archivo: {archivo}</div>
      <div>nivel: {nivel}</div>
      {nota && <div>nota: {nota}</div>}
      <button onClick={registrarEnBitacora} disabled={registrado}>
        {registrado ? "Registrado en Bitacora" : "Registrar en Bitacora"}
      </button>
    </div>
  );
}
