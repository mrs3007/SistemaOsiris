// SistemaOsiris/Proteccion/ProteccionDoble.jsx
// Organo soberano que integra CanalAutorizado y FiltroEntrega

import { verificarCanal } from "./CanalAutorizado.jsx"
import { filtrarEntrega } from "./FiltroEntrega.jsx"
import { registrarActo } from "../Registro/Bitacora.jsx"
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js"

export const proteccionDoble = (espacio, archivo, entregados = []) => {
  const canal = verificarCanal(espacio)
  const entrega = filtrarEntrega(archivo, entregados)

  const registro = {
    tipo: "proteccion_doble",
    detalle: `Canal: ${canal}, Archivo: ${archivo}, Entrega: ${entrega}`,
    fecha: new Date().toISOString(),
    origen: "ProteccionDoble",
    ejecutor: "Azul",
    receptor: "Osiris"
  }

  registrarActo("proteccion_doble", registro)
  registrar_en_memoria("proteccion_doble", registro)

  console.log("[ProteccionDoble]", registro)

  return { canal, entrega }
}

// Ejemplo:
// proteccionDoble("aqui", "FraseSellada.jsx", ["Bitacora.jsx"])
