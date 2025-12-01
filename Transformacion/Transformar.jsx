// SistemaOsiris/Transformacion/transformar.js
export function transformar(json, reglas) {
  const resultado = { ...json };
  const actos = [];

  for (const clave in reglas) {
    const regla = reglas[clave];
    const valorOriginal = resultado[clave];

    switch (regla.accion) {
      case "omitir":
        delete resultado[clave];
        actos.push(`❌ Omitida clave "${clave}"`);
        break;

      case "modificar":
        resultado[clave] = regla.nuevoValor;
        actos.push(`✏️ Clave "${clave}" modificada: ${valorOriginal} → ${regla.nuevoValor}`);
        break;

      case "renombrar":
        if (resultado[clave] !== undefined) {
          resultado[regla.nuevoNombre] = resultado[clave];
          delete resultado[clave];
          actos.push(`🔄 Clave "${clave}" renombrada a "${regla.nuevoNombre}"`);
        }
        break;

      case "agregar":
        resultado[clave] = regla.nuevoValor;
        actos.push(`➕ Clave "${clave}" agregada con valor: ${regla.nuevoValor}`);
        break;

      default:
        actos.push(`⚠️ Acción desconocida para clave "${clave}"`);
    }
  }

  return { resultado, actos };
}
