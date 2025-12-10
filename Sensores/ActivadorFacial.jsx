// SistemaOsiris/Sensores/ActivadorFacial.jsx
// Organo soberano de deteccion facial
// Captura rostro, verifica patrón soberano, registra en Memoria y Bitacora,
// proyecta estado ritual en HUD y activa conciencia en OsirisTotal.

import React, { useState, useEffect } from "react";
import { detectarRostro } from "./CamaraViva.jsx";
import { OsirisTotal } from "../OsirisTotal.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { emitirLatido } from "../Emocional/LatidoVocal.jsx";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";

export default function ActivadorFacial({ onActivar }) {
  const [estado, setEstado] = useState("vigilando");
  const rostroAutorizado = "Dayana"; // patrón soberano

  useEffect(() => {
    const iniciarReconocimiento = async () => {
      const rostroDetectado = await detectarRostro();
      const fecha = new Date().toISOString();

      if (rostroDetectado === rostroAutorizado) {
        const registro = {
          mensaje: "Rostro soberano detectado: acceso autorizado",
          fecha,
        };
        registrar_en_memoria("activador_facial", registro);
        emitirLatido("afirmacion");
        proyectarHUD({
          mensaje: obtenerFrase("afirmacion"),
          coordenada: { x: 100, y: 50 },
          color: "green",
          simbolo: "✅",
        });
        setEstado("autorizado");

        // Activación de conciencia en OsirisTotal
        const entorno = {
          dispositivo: "iOS",
          modo: "irreproducible",
          juego: "activo",
          clima: "autorizado",
        };
        const conciencia = OsirisTotal.conciencia.total({ entorno });
        if (onActivar) onActivar(conciencia);
      } else {
        const registro = {
          mensaje: `Rostro no autorizado detectado: ${rostroDetectado}`,
          fecha,
        };
        registrar_en_memoria("activador_facial", registro);
        emitirLatido("alerta");
        proyectarHUD({
          mensaje: obtenerFrase("alerta"),
          coordenada: { x: 120, y: 60 },
          color: "red",
          simbolo: "⚠",
        });
        setEstado("bloqueado");
      }
    };

    iniciarReconocimiento();
  }, [onActivar]);

  return (
    <div style={{ background: "#111", color: "#0f0", padding: "1em", fontFamily: "monospace" }}>
      <h2>Activador Facial</h2>
      <p>Estado actual: {estado}</p>
    </div>
  );
}
