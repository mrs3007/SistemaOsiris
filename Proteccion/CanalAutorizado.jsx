// SistemaOsiris/Proteccion/CanalAutorizado.jsx
// Organo soberano de CanalAutorizado
// Verifica espacios autorizados y los inscribe en Bitacora y Memoria

import { registrarActo } from "../Registro/Bitacora.jsx"
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js"

export const verificarCanal = (espacio) => {
  const estado = espacio === "aqui" ? "autorizado" : "bloqueado"

  const registro = {
    tipo: "canal_autorizado",
    detalle: `Espacio ${espacio} verificado: ${estado}`,
    fecha: new Date().toISOString(),
    origen: "CanalAutorizado",
    ejecutor: "Azul",
    receptor: "Osiris"
  }

  registrarActo("canal_autorizado", registro)
  registrar_en_memoria("canal_autorizado", registro)

  console.log("[CanalAutorizado]", registro)

  return estado
}

// Ejemplo: verificarCanal("aqui") // autorizado
