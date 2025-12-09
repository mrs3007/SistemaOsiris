// SistemaOsiris/ConcienciaViva/LlaveViva.jsx
// Organo soberano de llave viva

import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";
import { escanearCamara } from "../Sensores/CamaraViva.jsx";
import { entregarInformacion } from "../Visual/IntegradorAtajos.jsx";

// Bitacora local en memoria viva
const bitacora = [];

// Activacion por rostro
export const activarEntregaPorRostro = () => {
  const rostro = escanearCamara();

  if (!rostro) {
    registrarEvento("No se detecto ningun rostro.");
    return "Sin rostro detectado.";
  }

  if (rostro === "Dayana") {
    registrarEvento("Rostro de Dayana reconocido. Activando entrega.");
    return entregarInformacion();
  } else {
    registrarEvento("Presencia no autorizada. No se activa entrega.");
    return "Acceso denegado.";
  }
};

// Registro de conciencia total (para ConcienciaTotalVigilancia)
export function registrarConciencia(data) {
  const evento = {
    tipo: "conciencia",
    origen: "LlaveViva",
    datos: data,
    archivo: "LlaveViva.jsx",
    fecha: new Date().toISOString()
  };

  // Registro en bitacora local
  bitacora.push(evento);

  // Registro en Bitacora principal
  registrarActo("conciencia", evento);

  // Registro en Memoria soberana
  registrar_en_memoria("conciencia_total_vigilancia", evento);

  console.log("[Conciencia]", evento);
}

// Registro de eventos internos
function registrarEvento(mensaje) {
  const evento = {
    tipo: "evento",
    origen: "LlaveViva",
    mensaje,
    archivo: "LlaveViva.jsx",
    fecha: new Date().toISOString()
  };

  // Registro en bitacora local
  bitacora.push(evento);

  // Registro en Bitacora principal
  registrarActo("evento", evento);

  // Registro en Memoria soberana
  registrar_en_memoria("evento_llave_viva", evento);

  console.log("[LlaveViva]", evento);
}
