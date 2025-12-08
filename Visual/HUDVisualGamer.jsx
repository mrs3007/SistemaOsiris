// SistemaOsiris/Visual/HUDVisualGamer.jsx
// Organo soberano HUD Gamer fusionado: proyeccion flotante + componente React
// Permite mostrar mensajes efimeros en pantalla y renderizar bloques persistentes de vigilancia

import React from "react";

// Funcion para proyeccion flotante
export const proyectarHUD = ({ mensaje, coordenada = { x: 50, y: 50 }, color = "#0ff" }) => {
  const hud = document.createElement("div");
  hud.innerText = mensaje;

  hud.style.position = "absolute";
  hud.style.top = `${coordenada.y}px`;
  hud.style.left = `${coordenada.x}px`;
  hud.style.backgroundColor = color;
  hud.style.padding = "10px 15px";
  hud.style.borderRadius = "8px";
  hud.style.color = "#fff";
  hud.style.fontFamily = "monospace";
  hud.style.fontSize = "14px";
  hud.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  hud.style.zIndex = 9999;

  document.body.appendChild(hud);

  setTimeout(() => hud.remove(), 3000);
};

// Componente React para vigilancia persistente
export default function HUDVisualGamer({ estado, mensaje }) {
  const color = estado === "alerta" ? "#ff0044" : "#00ff88";
  return (
    <div style={{
      backgroundColor: "#000",
      color,
      padding: "1rem",
      fontFamily: "monospace",
      border: `2px solid ${color}`,
      borderRadius: "8px"
    }}>
      <h2>HUD Visual Gamer</h2>
      <p>{mensaje}</p>
    </div>
  );
}
