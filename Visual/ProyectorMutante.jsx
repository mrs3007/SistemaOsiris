// SistemaOsiris/Visual/ProyectorMutante.jsx
// Organo soberano de mutacion visual
// Proyecta simbolos rituales según el estado marcado, registra en Bitacora y emite proyeccion en HUD.

import { registrarActo, registrarMutacionVisual } from "../Registro/Bitacora.jsx";
import { proyectarHUD } from "../Visual/HUDVisualGamer.jsx";

export const proyectarMutacion = (estado = "afirmacion") => {
  const mutaciones = {
    expansion: "🌱",
    proteccion: "🛡️",
    herida: "🩸",
    afirmacion: "🌟",
  };

  const simbolo = mutaciones[estado] || "❔";

  // Registro soberano con metadatos
  const registro = {
    tipo: "mutacion_visual",
    detalle: `Mutacion visual (${estado}) → ${simbolo}`,
    fecha: new Date().toISOString(),
    origen: "ProyectorMutante",
    ejecutor: "Azul",
    receptor: "Osiris"
  };

  registrarMutacionVisual(registro); // Registro específico
  registrarActo("mutacion_visual", registro); // Registro genérico

  // Proyección en HUD
  proyectarHUD({
    mensaje: `Proyeccion mutante: ${simbolo}`,
    color: estado === "herida" ? "red" : estado === "proteccion" ? "blue" : "green",
  });

  // Consola ritual (para depuracion viva)
  console.log("🌌 Proyector mutante:", registro);
};
