// SistemaOsiris/sistemaOsiris/Vigilancia/HUDVisualGamer.jsx
import React from 'react';

export default function HUDVisualGamer({ estado, mensaje }) {
  const color = estado === 'alerta' ? '#ff0044' : '#00ff88';
  return (
    <div style={{
      backgroundColor: '#000',
      color,
      padding: '1rem',
      fontFamily: 'monospace',
      border: `2px solid ${color}`,
      borderRadius: '8px'
    }}>
      <h2>HUD Visual Gamer</h2>
      <p>{mensaje}</p>
    </div>
  );
}
