// SistemaOsiris/Visual/HUDVisualGamer.jsx
// Órgano soberano de proyección HUD Gamer
// Muestra mensajes rituales flotantes en pantalla con coordenadas y estilo marcado

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
