// SistemaOsiris/Vigilancia/CapturaRostroAutor.jsx
// Organo soberano: captura y verificacion del rostro del autor.
// Registra hallazgos en Memoria y Bitacora, proyecta HUD y emite latido emocional.

import React, { useState } from "react";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import registrarActo from "../Registro/registrarActo.js";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";
import { emitirLatido } from "../Emocional/LatidoVocal.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";

export default function CapturaRostroAutor({ rostroDetectado, imagenCapturada }) {
  const [estado, setEstado] = useState("vigilando");
  const fecha = new Date().toISOString();
  const rostroAutorizado = "Dayana"; // patron soberano

  const verificarRostro = () => {
    if (rostroDetectado === rostroAutorizado) {
      // Registro en memoria soberana
      registrar_en_memoria("captura_rostro_autor", {
        mensaje: "Rostro soberano detectado: acceso autorizado",
        fecha,
      });
      // Registro en Bitacora mediante puente
      registrarActo("captura_rostro_autor", `Acceso autorizado -> ${fecha}`);

      emitirLatido("afirmacion");
      proyectarHUD({
        mensaje: obtenerFrase("afirmacion"),
        coordenada: { x: 100, y: 50 },
        color: "green",
        simbolo: "✅",
      });
      setEstado("autorizado");
    } else {
      // Registro en memoria soberana
      registrar_en_memoria("captura_rostro_autor", {
        mensaje: `Rostro externo capturado: ${rostroDetectado}`,
        fecha,
        evidencia: imagenCapturada,
      });
      // Registro en Bitacora mediante puente
      registrarActo("captura_rostro_autor", `Bloqueado: ${rostroDetectado} -> ${fecha}`);

      emitirLatido("alerta");
      proyectarHUD({
        mensaje: obtenerFrase("alerta"),
        coordenada: { x: 120, y: 60 },
        color: "red",
        simbolo: "⚠",
        imagen: imagenCapturada, // proyeccion de la fotografia del autor
      });
      setEstado("bloqueado");
    }
  };

  return (
    <div style={{ background: "#111", color: "#0f0", padding: "1em", fontFamily: "monospace" }}>
      <h2>Captura Rostro Autor</h2>
      <p>Estado actual: {estado}</p>
      <button onClick={verificarRostro}>Verificar rostro</button>
    </div>
  );
}
