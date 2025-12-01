// SistemaOsiris/Proyeccion/GeneradorVisual.jsx
// Organo soberano de GeneradorVisual
// Proyecta imágenes a partir de descripciones, inscribiendo en Bitacora y Memoria

import React, { useState } from 'react';
import { registrarActo } from '../Registro/Bitacora.jsx';
import { registrar_en_memoria } from '../Memoria/registrar_en_memoria.js';

export default function GeneradorVisual() {
  const [imagen, setImagen] = useState(null);

  const proyectarImagen = (descripcion) => {
    const nuevaImagen = {
      descripcion,
      url: `/render/${descripcion.replace(/\s+/g, '_')}.png`
    };

    setImagen(nuevaImagen);

    const registro = {
      tipo: 'visualizacion',
      detalle: `Imagen proyectada: ${descripcion}`,
      archivo: 'GeneradorVisual.jsx',
      fecha: new Date().toISOString(),
      origen: 'GeneradorVisual',
      ejecutor: 'Azul',
      receptor: 'Osiris'
    };

    registrarActo('visualizacion', registro);
    registrar_en_memoria('visualizacion', registro);

    console.log('[GeneradorVisual]', registro);
  };

  return (
    <div style={{
      background: "#111",
      color: "#0ff",
      padding: "1em",
      fontFamily: "monospace",
      border: "2px solid #0ff",
      marginTop: "1em"
    }}>
      <h2>🧿 Proyección Visual</h2>
      <input
        type="text"
        placeholder="Describe lo que quieres visualizar"
        onKeyDown={(e) => {
          if (e.key === 'Enter') proyectarImagen(e.target.value);
        }}
      />
      {imagen && (
        <div>
          <p>Imagen generada: {imagen.descripcion}</p>
          <img src={imagen.url} alt={imagen.descripcion} />
        </div>
      )}
    </div>
  );
}
