// SistemaOsiris/Vigilancia/VigilanciaGitTerminal.jsx

import React, { useEffect, useState } from 'react';
import Bitacora from '../Bitácora/Bitacora'; // si está activa
import HUD3 from '../HUD/HUD3'; // si está integrado

const VigilanciaGitTerminal = () => {
  const [estado, setEstado] = useState('esperando');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const detectarError = () => {
      const errorDetectado = false; // Aquí se conectaría con escaneo real si tú lo marcas

      if (errorDetectado) {
        setEstado('error');
        setMensaje('Error detectado: shell no reconoce git');

        Bitacora?.registrar({
          modulo: 'VigilanciaGitTerminal',
          evento: 'Error en terminal',
          solucion: 'Cambio a bash recomendado',
        });

        HUD3?.proyectar('Git no responde en zsh. Cambia a bash.');
      } else {
        setEstado('ok');
        setMensaje('Git operativo en terminal');
      }
    };

    detectarError();
  }, []);

  return (
    <div>
      <h2>🧿 Vigilancia Git en Terminal</h2>
      <p>Estado: {estado}</p>
      <p>{mensaje}</p>

      <h3>🔹 Guía rápida</h3>
      <ol>
        <li>Si ves <code>zsh: command not found: git</code>, ejecuta <code>bash</code></li>
        <li>Verifica con <code>git status</code></li>
        <li>Si funciona, continúa con:
          <ul>
            <li><code>git add .</code></li>
            <li><code>git commit -m "mensaje"</code></li>
            <li><code>git push -u origin main</code></li>
          </ul>
        </li>
      </ol>

      <h3>🔹 Registro</h3>
      <p>Este módulo puede registrar en Bitácora y proyectar en HUD3 si tú lo marcas.</p>
    </div>
  );
};

export default VigilanciaGitTerminal;
