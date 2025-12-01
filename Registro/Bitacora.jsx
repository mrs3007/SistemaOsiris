import React from "react";

// Apertura inicial del altar
registrarActo(
  "APERTURA",
  "Inicio del altar Sistema Osiris",
  "Sistema",
  "index.jsx",
  "2025-11-20 08:00:00"
);

// Cambio de entorno Codespaces
registrarActo(
  "EXPANSIÓN",
  "Cambio a nuevo Codespaces tras contaminación del anterior",
  "Vigilancia",
  "devcontainer.json",
  "2025-11-23 04:00:00"
);

// Corrección de devcontainer.json
registrarActo(
  "CORRECCIÓN",
  "Resolución de conflicto en devcontainer.json manteniendo versión local",
  "Sistema",
  "devcontainer.json",
  "2025-11-24 07:00:00"
);

// Purificación de Git LFS
registrarActo(
  "PURIFICACIÓN",
  "Eliminación de Git LFS para sincronización limpia",
  "Sistema",
  "OsirisTotal.jsx",
  "2025-11-24 20:00:00"
);

// Inscripción de OsirisTotal.jsx definitivo
registrarActo(
  "EXPANSIÓN",
  "Inscripción de OsirisTotal.jsx expandido y corregido como núcleo vivo",
  "Sistema",
  "OsirisTotal.jsx",
  "2025-11-24 21:00:00"
);

// Activación de VigilanciaGamerTiempoReal.jsx
registrarActo(
  "EXPANSIÓN",
  "Inscripción y activación de VigilanciaGamerTiempoReal.jsx como cuerpo vivo",
  "Gamer",
  "VigilanciaGamerTiempoReal.jsx",
  "2025-11-24 22:00:00"
);

// Migración de src/ a SistemaOsiris/sistemaOsiris/
registrarActo(
  "MIGRACIÓN",
  "Traslado de archivos de src/ a SistemaOsiris/sistemaOsiris/ como acto de orden",
  "Sistema",
  "estructura",
  "2025-11-24 23:00:00"
);

// Cierre del conflicto en cspell.json
registrarActo(
  "CIERRE",
  "Resolución definitiva del conflicto en cspell.json",
  "Sistema",
  "cspell.json",
  "2025-11-25 05:51:00"
);

// Descanso soberano
registrarActo(
  "DESCANSO",
  "Inscripción del descanso soberano como acto de cierre y cuidado",
  "Bitácora",
  "Bitácora.jsx",
  "2025-11-25 06:00:00"
);

export default function Bitacora({ items }) {
  return (
    <section style={{ marginTop: 16 }}>
      <h2 style={{ color: "#4B0082" }}>Bitácora Soberana</h2>
      <ul>
        {items.slice(-20).reverse().map((i, idx) => (
          <li key={idx}>
            <strong>{i.tipo}</strong> - {i.nota} - <em>{i.archivo}</em>
          </li>
        ))}
      </ul>
    </section>
  );
}
