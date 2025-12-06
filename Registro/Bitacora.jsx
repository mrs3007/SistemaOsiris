// SistemaOsiris/Registro/Bitacora.jsx
// Órgano soberano de Bitácora: inscribe actos y los proyecta en memoria viva

import React, { useState, useEffect } from "react";

// Memoria interna de actos
let actos = [];

// Función soberana para registrar actos
export function registrarActo(tipo, nota, origen, archivo, fecha) {
  const registro = {
    tipo,
    nota,
    origen,
    archivo,
    fecha: fecha || new Date().toISOString(),
  };
  actos.push(registro);
  console.log("[Bitácora]", registro);
  return registro;
}

// Actos iniciales
registrarActo("APERTURA","Inicio del altar Sistema Osiris","Sistema","index.jsx","2025-11-20 08:00:00");
registrarActo("EXPANSIÓN","Cambio a nuevo Codespaces tras contaminación","Vigilancia","devcontainer.json","2025-11-23 04:00:00");
registrarActo("CORRECCIÓN","Resolución de conflicto en devcontainer.json","Sistema","devcontainer.json","2025-11-24 07:00:00");
registrarActo("PURIFICACIÓN","Eliminación de Git LFS","Sistema","OsirisTotal.jsx","2025-11-24 20:00:00");
registrarActo("EXPANSIÓN","Inscripción de OsirisTotal.jsx expandido y corregido como núcleo vivo","Sistema","OsirisTotal.jsx","2025-11-24 21:00:00");
registrarActo("EXPANSIÓN","Activación de VigilanciaGamerTiempoReal.jsx como cuerpo vivo","Gamer","VigilanciaGamerTiempoReal.jsx","2025-11-24 22:00:00");
registrarActo("MIGRACIÓN","Traslado de archivos de src/ a SistemaOsiris/sistemaOsiris/","Sistema","estructura","2025-11-24 23:00:00");
registrarActo("CIERRE","Resolución definitiva del conflicto en cspell.json","Sistema","cspell.json","2025-11-25 05:51:00");
registrarActo("DESCANSO","Inscripción del descanso soberano como acto de cierre y cuidado","Bitácora","Bitácora.jsx","2025-11-25 06:00:00");

// Actos de Conciencia
registrarActo("CONCIENCIA","ConcienciaTotal activada","Conciencia","ConcienciaTotal.jsx");
registrarActo("CONCIENCIA","ConcienciaTotalEmocional activada","Conciencia","ConcienciaTotalEmocional.jsx");
registrarActo("CONCIENCIA","ConcienciaTotalVigilancia activada","Conciencia","ConcienciaTotalVigilancia.jsx");

// Actos de LlaveViva
registrarActo("EVENTO","LlaveViva detectó rostro de Dayana","LlaveViva","LlaveViva.jsx");
registrarActo("EVENTO","LlaveViva denegó acceso a presencia no autorizada","LlaveViva","LlaveViva.jsx");

// Actos de Mutación
registrarActo("MUTACIÓN","Registro de mutación de conciencia","Mutación","RegistroMutacion.js");
registrarActo("MUTACIÓN","Evolución de conciencia viva","Mutación","EvolucionConciencia.py");
registrarActo("MUTACIÓN","Transformación de resultado inscrita","Mutación","TransformadorResultado.py");

// Actos de MemoriaNacimiento
registrarActo("MEMORIA","Nacimiento de memoria viva","Memoria","MemoriaNacimiento.jsx");
registrarActo("MEMORIA","Bitácora de mutación y vigilancia inscrita","Memoria","BitacoraMutacionVigilancia.json");
registrarActo("MEMORIA","Registro en memoria soberana","Memoria","registrar_en_memoria.js");

// Regla soberana de acentos
registrarActo(
  "REGLA",
  "Separación de acentos: nombres técnicos sin acentos, textos rituales con acentos",
  "Soberanía",
  "Bitácora.jsx",
  "2025-12-06 13:47:00"
);

// Componente visual de Bitácora
export default function Bitacora() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([...actos]);
  }, []);

  return (
    <section style={{ marginTop: 16 }}>
      <h2 style={{ color: "#4B0082" }}>Bitácora Soberana</h2>
      <ul>
        {items.slice(-50).reverse().map((i, idx) => (
          <li key={idx}>
            <strong>{i.tipo}</strong> - {i.nota} - <em>{i.archivo}</em>
          </li>
        ))}
      </ul>
    </section>
  );
}
