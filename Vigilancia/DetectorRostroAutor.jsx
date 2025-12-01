// SistemaOsiris/Vigilancia/DetectorRostroAutor.jsx
import React, { useState } from "react";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.jsx";
import { proyectarHUD } from "./HUDVisualGamer.jsx";
import { emitirLatido } from "../Emocional/LatidoVocal.jsx";
import { obtenerFrase } from "../Emocional/FraseSellada.jsx";

export default function DetectorRostroAutor({ rostroDetectado, imagenAutor }) {
  const [estado, setEstado] = useState("vigilando");
  const fecha = new Date().toISOString();
  const rostroAutorizado = "Dayana"; // tu patrón soberano

  const verificarRostro = () => {
    if (rostroDetectado === rostroAutorizado) {
      registrar_en_memoria("detector_rostro_autor", {
        mensaje: "Rostro soberano detectado: acceso autorizado",
        fecha,
      });
      emitirLatido("afirmacion");
      proyectarHUD({
        mensaje: obtenerFrase("afirmacion"),
        coordenada: { x: 100, y: 50 },
        color: "green",
        simbolo: "✅",
      });
      setEstado("autorizado");
    } else {
      registrar_en_memoria("detector_rostro_autor", {
        mensaje: `Rostro externo detectado: ${rostroDetectado}`,
        fecha,
        evidencia: imagenAutor,
      });
      emitirLatido("alerta");
      proyectarHUD({
        mensaje: obtenerFrase("alerta"),
        coordenada: { x: 120, y: 60 },
        color: "red",
        simbolo: "⚠",
        imagen: imagenAutor, // muestra la imagen del autor
      });
      setEstado("bloqueado");
    }
  };

  return (
    <div style={{ background: "#111", color: "#0f0", padding: "1em", fontFamily: "monospace" }}>
      <h2>Detector Rostro Autor</h2>
      <p>Estado actual: {estado}</p>
      <button onClick={verificarRostro}>Verificar rostro</button>
    </div>
  );
}
