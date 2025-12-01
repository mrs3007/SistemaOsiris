// SistemaOsiris/Vigilancia/BitacoraAislamientoKnox.jsx
import React, { useEffect, useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";

export default function BitacoraAislamientoKnox() {
  const [estado, setEstado] = useState("desconocido");
  const [fecha, setFecha] = useState(null);

  useEffect(() => {
    const fechaInicio = new Date().toISOString();
    registrarActo(
      "AISLAMIENTO",
      "Knox inicializado",
      "Aislamiento",
      "BitacoraAislamientoKnox",
      "Osiris"
    );
    setEstado("activo");
    setFecha(fechaInicio);

    return () => {
      const fechaFin = new Date().toISOString();
      registrarActo(
        "AISLAMIENTO",
        "Knox desmontado",
        "Aislamiento",
        "BitacoraAislamientoKnox",
        "Osiris"
      );
      setEstado("desmontado");
      setFecha(fechaFin);
    };
  }, []);

  const simbolo =
    estado === "activo" ? "⚡" : estado === "desmontado" ? "🛑" : "❓";

  return (
    <section style={{ marginTop: 16, fontFamily: "monospace", color: "#4B0082" }}>
      <h3>Bitacora Aislamiento Knox {simbolo}</h3>
      <p>Estado: {estado}</p>
      {fecha && <p>Fecha: {fecha}</p>}
    </section>
  );
}
