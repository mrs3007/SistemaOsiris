// SistemaOsiris/GamerVigilancia/EjecutoraSilente.jsx
// Organo soberano de ejecucion silente
// Activa trampas tecnicas, proyecta HUD y registra resultados en Bitacora y Memoria.

import HUD3 from "../Visual/HUD3.jsx";
import { escucharTapTap } from "../TapTap.jsx";
import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrarEnMemoria } from "../Memoria/registrar_en_memoria.js";
import { 
  inyectarDLL, 
  hookearFunciones, 
  modificarMemoria, 
  ejecutarKernel 
} from "./TrampasTecnicas.jsx";

export default function EjecutoraSilente({ tipo, entorno }) {
  let resultado;

  switch (tipo) {
    case "dll":
      resultado = inyectarDLL(entorno);
      break;
    case "hook":
      resultado = hookearFunciones(entorno);
      break;
    case "memoria":
      resultado = modificarMemoria(entorno);
      break;
    case "kernel":
      resultado = ejecutarKernel(entorno);
      break;
    default:
      resultado = "Tipo de ejecucion no reconocido.";
  }

  // Proyección HUD usando HUD3
  HUD3({
    estado: "superior",
    latido: `Ejecución ${tipo} activada`
  });

  escucharTapTap((confirmacion) => {
    if (confirmacion === "dobleToque") {
      const registro = {
        tipo: "ejecucion_silente",
        subtipo: tipo,
        resultado,
        fecha: new Date().toISOString(),
        origen: "EjecutoraSilente",
        ejecutor: "Azul",
        receptor: "Osiris",
        irreproducible: true,
        modo: "silente"
      };

      registrarActo("ejecucion_silente", registro);
      registrarEnMemoria("ejecucion_silente", registro);

      console.log("[EjecutoraSilente]", registro);
    }
  });

  return resultado;
}
