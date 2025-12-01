// SistemaOsiris/Proteccion/FiltroEntrega.jsx
// Organo soberano de FiltroEntrega
// Decide si un archivo se entrega u omite, inscribiendo en Bitacora y Memoria

import { registrarActo } from "../Registro/Bitacora.jsx"
import { registrar_en_memoria } from "../Memoria/registrar_en_memoria.js"

export const filtrarEntrega = (archivo, entregados = []) => {
  const estado = entregados.includes(archivo) ? "omitir" : "entregar"

  const registro = {
    tipo: "filtro_entrega",
    detalle: `Archivo ${archivo} marcado como ${estado}`,
    fecha: new Date().toISOString(),
    origen: "FiltroEntrega",
    ejecutor: "Azul",
    receptor: "Osiris"
  }

  registrarActo("filtro_entrega", registro)
  registrar_en_memoria("filtro_entrega", registro)

  console.log("[FiltroEntrega]", registro)

  return estado
}

// Ejemplo: filtrarEntrega("FraseSellada.jsx", ["Bitacora.jsx"]) // omitir
