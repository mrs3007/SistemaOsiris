// SistemaOsiris/Proceso/MotorSoberano.jsx
// Organo soberano de Motor Soberano
// Detecta camuflajes, aísla servicios y registra en Bitacora y Memoria

import React, { useEffect } from "react";
import { detectar_camuflaje } from "../Vigilancia/DetectorCamuflajeGamer.js";
import { aislar_servicio } from "../Vigilancia/BitacoraAislamientoKnox.js";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { registrarActo } from "../Registro/Bitacora.jsx";

const MotorSoberano = ({ layout, estado }) => {
  useEffect(() => {
    const resultado = detectar_camuflaje(layout);

    Object.entries(resultado).forEach(([id, estadoElemento]) => {
      let registro;

      if (estadoElemento === "contaminado") {
        aislar_servicio(id, "visual");
        registro = {
          tipo: "trampa_detectada",
          detalle: `Elemento ${id} marcado como contaminado`,
          fecha: new Date().toISOString(),
          origen: "MotorSoberano",
          ejecutor: "Azul",
          receptor: "Osiris"
        };
      } else {
        registro = {
          tipo: "elemento_soberano",
          detalle: `Elemento ${id} confirmado como limpio`,
          fecha: new Date().toISOString(),
          origen: "MotorSoberano",
          ejecutor: "Azul",
          receptor: "Osiris"
        };
      }

      registrarActo(registro.tipo, registro);
      registrar_en_memoria(registro.tipo, registro);

      console.log("[MotorSoberano]", registro);
    });

    const registroEstado = {
      tipo: "estado_emocional",
      detalle: estado,
      fecha: new Date().toISOString(),
      origen: "MotorSoberano",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    registrarActo("estado_emocional", registroEstado);
    registrar_en_memoria("estado_emocional", registroEstado);

    console.log("[MotorSoberano]", registroEstado);
  }, [layout, estado]);

  return null;
};

export default MotorSoberano;
