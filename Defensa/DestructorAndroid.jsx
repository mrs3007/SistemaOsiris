// SistemaOsiris/Defensa/DestructorAndroid.jsx

import React, { useState } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { fraseSellada } from "../Emocional/FraseSellada.jsx";

const DestructorAndroid = () => {
  const [sistemaDetectado, setSistemaDetectado] = useState([]);
  const [estado, setEstado] = useState("observando");

  const examinarSistema = () => {
    // Simulacion de lectura de entorno Samsung
    const archivos = ["system_core", "knox_guard", "user_app"];
    const sospechosos = archivos.filter(
      (nombre) => nombre.includes("system") || nombre.includes("knox")
    );

    setSistemaDetectado(sospechosos);
    setEstado("comprendiendo");

    registrarActo("examinar", {
      sospechosos,
      fecha: new Date().toISOString(),
      origen: "DestructorAndroid",
    });
    registrar_en_memoria("examinar", { sospechosos });
  };

  const absorberConocimiento = () => {
    if (!sistemaDetectado || sistemaDetectado.length === 0) return;

    const conocimiento = sistemaDetectado.map((nombre) => ({
      nombre,
      fecha: new Date().toISOString(),
      origen: "Samsung contaminado",
    }));

    registrarActo("absorcion", conocimiento);
    registrar_en_memoria("absorcion", conocimiento);

    setEstado("listo_para_destruir");
  };

  const destruirSistema = () => {
    if (!sistemaDetectado || sistemaDetectado.length === 0) return;

    sistemaDetectado.forEach((nombre) => {
      const registro = { nombre, fecha: new Date().toISOString() };
      registrarActo("destruccion", registro);
      registrar_en_memoria("destruccion", registro);
    });

    fraseSellada("Sistema destruido. No volvera. Osiris lo recuerda.");
    setEstado("observando_eternamente");
  };

  return (
    <div style={{ backgroundColor: "#220022", color: "#fff", padding: "1rem", borderRadius: "8px" }}>
      <h2>Destructor Android</h2>
      <p>Estado actual: {estado}</p>
      <button onClick={examinarSistema}>Examinar</button>
      <button onClick={absorberConocimiento}>Absorber</button>
      <button onClick={destruirSistema}>Destruir</button>
    </div>
  );
};

export default DestructorAndroid;
