// SistemaOsiris/Gamer/VigilanciaGamerTiempoReal.jsx
// Organo soberano de vigilancia gamer en tiempo real
// Detecta trampas visuales y registra gestos como latidos en Bitacora y Memoria.

import React, { useEffect, useState } from "react";
import { proyectarHUD } from "../Visual/hud_visual_gamer.jsx";
import { interpretarTap } from "../Interaccion/TapTap.jsx";
import { emitirRespuesta } from "../Emocional/RespuestaGamer.jsx";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

// Detector de trampas visuales
const detectarCamuflaje = (pantalla) => {
  return pantalla.elementos.filter(el => el.tipo === "layout" && el.oculto === true);
};

const VigilanciaGamerTiempoReal = ({ pantalla, gestos }) => {
  const [bitacora, setBitacora] = useState([]);

  useEffect(() => {
    // 1. Detectar trampas visuales
    const trampas = detectarCamuflaje(pantalla);
    trampas.forEach(trampa => {
      const registro = {
        tipo: "trampa",
        detalle: `Camuflaje detectado en ${trampa.coordenada}`,
        fecha: new Date().toISOString(),
        origen: "VigilanciaGamerTiempoReal",
        ejecutor: "Azul",
        receptor: "Osiris"
      };

      registrarActo("trampa_gamer", registro);
      registrar_en_memoria("trampa_gamer", registro);

      setBitacora(prev => [...prev, registro]);

      proyectarHUD({
        mensaje: "Camuflaje detectado",
        coordenada: trampa.coordenada,
        color: "red"
      });
      emitirRespuesta("alerta");
      console.log("[VigilanciaGamerTiempoReal]", registro);
    });

    // 2. Registrar gestos como latidos
    gestos.forEach(gesto => {
      const latido = interpretarTap(gesto);
      const registro = {
        tipo: "latido",
        detalle: `TapTap: ${gesto} → ${latido}`,
        fecha: new Date().toISOString(),
        origen: "VigilanciaGamerTiempoReal",
        ejecutor: "Azul",
        receptor: "Osiris"
      };

      registrarActo("latido_gamer", registro);
      registrar_en_memoria("latido_gamer", registro);

      setBitacora(prev => [...prev, registro]);

      if (latido === "afirmacion") {
        proyectarHUD({ mensaje: "Confirmado", color: "green" });
        emitirRespuesta("afirmacion");
      } else if (latido === "rechazo") {
        proyectarHUD({ mensaje: "Rechazado", color: "gray" });
        emitirRespuesta("silencio");
      } else {
        proyectarHUD({ mensaje: "Latido registrado", color: "blue" });
        emitirRespuesta("latido");
      }
      console.log("[VigilanciaGamerTiempoReal]", registro);
    });
  }, [pantalla, gestos]);

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#0ff",
        padding: "1rem",
        fontFamily: "monospace",
        border: "2px solid #0ff",
        borderRadius: "8px",
        marginTop: "1em"
      }}
    >
      <h3>Vigilancia Gamer Tiempo Real</h3>
      <h4>Bitacora</h4>
      <ul>
        {bitacora.map((r, i) => (
          <li key={i}>
            [{r.fecha}] {r.tipo.toUpperCase()} → {r.detalle}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VigilanciaGamerTiempoReal;
