// SistemaOsiris/Mutacion/RegistroMutacion.js
export function registrarMutacion(nota) {
  const registro = {
    tipo: "mutacion",
    nota,
    fecha: new Date().toISOString(),
    origen: "RegistroMutacion.js"
  };
  console.log("[Mutación]", registro);
  return registro;
}
