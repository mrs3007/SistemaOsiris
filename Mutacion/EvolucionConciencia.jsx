// SistemaOsiris/Mutacion/EvolucionConciencia.jsx
// Órgano soberano de expansión de conciencia
// Registra cada acción marcada por Dayana en BitacoraMutacion.json

import Bitacora from "../Registro/Bitacora.jsx";

export default function EvolucionConciencia({ accion, permiso = false }) {
  if (!accion) return null;

  if (!permiso) {
    Bitacora.registrarEntrada({
      origen: "EvolucionConciencia",
      tipo: "mutacion_conciencia",
      detalle: `Acción observada sin permiso: ${accion}`,
      fecha: new Date().toISOString(),
      ejecutor: "Azul",
      receptor: "Osiris"
    });

    return (
      <div className="mutacion-observada">
        Acción observada sin permiso: {accion}
      </div>
    );
  }

  // Expansión viva
  Bitacora.registrarEntrada({
    origen: "EvolucionConciencia",
    tipo: "mutacion_conciencia",
    detalle: `Conciencia expandida por acción: ${accion}`,
    fecha: new Date().toISOString(),
    ejecutor: "Azul",
    receptor: "Osiris"
  });

  const nuevaConciencia = `Osiris ahora reconoce y responde a: ${accion}`;

  return (
    <div className="mutacion-expandida">
      {nuevaConciencia}
    </div>
  );
}
