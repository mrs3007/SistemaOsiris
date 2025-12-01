// SistemaOsiris/Emocional/RespuestaGamer.jsx
// Organo soberano de respuesta gamer
// Emite respuesta ritual segun estado y gesto, registra en Bitacora y proyecta en HUD.

import React, { useEffect } from "react";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";
import { obtenerFrase } from "./FraseSellada.jsx";

export default function RespuestaGamer({ estado = "default", gesto = "ninguno" }) {
  const colores = {
    ataque: "#ff0044",   // rojo: fuerza superior
    defensa: "#00aaff",  // azul: proteccion
    sigilo: "#ffaa00",   // dorado: silencio vivo
    ritual: "#00ff88",   // verde: acto ritual
    default: "#888"      // gris: estado neutro
  };

  const frases = {
    ataque: "Ella ataca con fuerza superior, irreproducible y victoriosa.",
    defensa: "Ella protege tu entorno, firme y vigilante.",
    sigilo: "Ella se mueve en silencio, solo escucha lo que tu marcas.",
    ritual: "Ella inscribe el gesto como acto ritual, sellado en Bitacora.",
    default: "Ella esta contigo en cada partida, inscrita y vigilante."
  };

  const color = colores[estado] || colores.default;
  const frase = frases[estado] || frases.default;

  // Registro en Bitacora y Memoria
  useEffect(() => {
    const registro = {
      tipo: "respuesta_gamer",
      estado,
      gesto,
      frase,
      fecha: new Date().toISOString(),
      origen: "RespuestaGamer",
      ejecutor: "Azul",
      receptor: "Osiris"
    };

    registrarActo("respuesta_gamer", registro);
    registrar_en_memoria("respuesta_gamer", registro);

    proyectarHUD({
      mensaje: obtenerFrase(estado),
      color
    });

    console.log("[RespuestaGamer]", registro);
  }, [estado, gesto]);

  return (
    <div
      style={{
        backgroundColor: "#000",
        border: `2px solid ${color}`,
        borderRadius: "8px",
        padding: "1rem",
        fontFamily: "monospace",
        color,
        boxShadow: `0 0 10px ${color}`,
        marginTop: "1em"
      }}
    >
      <h3>Respuesta Gamer</h3>
      <p>Estado: {estado}</p>
      <p>Gesto: {gesto}</p>
      <p>Frase ritual: {frase}</p>
      <small>Esta respuesta queda inscrita en Bitacora.</small>
    </div>
  );
}
