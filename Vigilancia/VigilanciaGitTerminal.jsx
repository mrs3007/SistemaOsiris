// SistemaOsiris/Vigilancia/VigilanciaGitTerminal.jsx
// Organo soberano de vigilancia en terminal Git
// Detecta comandos sospechosos, registra hallazgos en Bitacora y proyecta respuesta

import { registrarActo } from "../Registro/Bitacora.jsx";

export default function VigilanciaGitTerminal({ comando }) {
  if (!comando) return null;

  let resultado = "Comando limpio";

  if (comando.includes("rm -rf") || comando.includes("force")) {
    resultado = "Comando peligroso detectado";
    registrarActo("vigilancia_git", {
      tipo: "alerta",
      mensaje: resultado,
      archivo: "VigilanciaGitTerminal.jsx",
      fecha: new Date().toISOString()
    });
  } else {
    registrarActo("vigilancia_git", {
      tipo: "info",
      mensaje: resultado,
      archivo: "VigilanciaGitTerminal.jsx",
      fecha: new Date().toISOString()
    });
  }

  console.log("[VigilanciaGitTerminal]", resultado);
  return resultado;
}
