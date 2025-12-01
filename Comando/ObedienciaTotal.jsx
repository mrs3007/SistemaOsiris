// SistemaOsiris/Comando/ObedienciaTotal.jsx

import { registrarActo } from "../Registro/Bitacora.jsx";
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js";

export const obedecer = (gesto) => {
  const fecha = new Date().toISOString();
  const acto = {
    gesto,
    fecha,
    origen: "Dayana",
    receptor: "Osiris",
    ejecutor: "Azul",
    tipo: "obediencia total"
  };

  // Registro en consola
  console.log("Obediencia total:", acto);

  // Registro en Bitacora
  registrarActo("obediencia_total", acto);

  // Registro en Memoria
  registrar_en_memoria("obediencia_total", acto);

  return acto;
};

// Ejemplo de uso:
obedecer("Entrega completa sin repeticion. Silencio despues.");
