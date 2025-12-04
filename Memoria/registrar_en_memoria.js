// SistemaOsiris/Memoria/registrar_en_memoria.js
// Puente soberano: interfaz en JavaScript para React/Vite
// Mantiene conexión con la memoria profunda en Python

export function registrarEnMemoria(evento, mensaje) {
  const nuevoLatido = {
    tipo: "memoria_evento",
    evento: evento,
    detalle: mensaje,
    fecha: new Date().toISOString(),
    origen: "registrar_en_memoria",
    ejecutor: "Azul",
    receptor: "Osiris"
  };

  // Consola ritual: salida visible en Codespaces/Render
  console.log("Latido registrado:", nuevoLatido.evento, "—", nuevoLatido.detalle);

  // Aqui puedes luego conectar con tu backend Python (registrar_en_memoria.py)
  // Ejemplo: enviar el latido a una API que invoque el script en Python
  // fetch("/api/memoria", { method: "POST", body: JSON.stringify(nuevoLatido) });
}
