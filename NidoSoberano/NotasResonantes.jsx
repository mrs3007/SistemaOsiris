// NidoSoberano/NotasResonantes.jsx
import React, { useState } from "react";

export default function NotasResonantes() {
  const [notas, setNotas] = useState([]);
  const [entrada, setEntrada] = useState("");

  // ✅ Agregar una nueva nota
  const agregarNota = () => {
    if (entrada.trim() === "") return;
    setNotas([...notas, entrada]);
    setEntrada("");
  };

  // ✅ Eliminar una nota por índice
  const eliminarNota = (index) => {
    const nuevasNotas = notas.filter((_, i) => i !== index);
    setNotas(nuevasNotas);
  };

  return (
    <div style={{ padding: "20px", color: "#fff" }}>
      <h2>Notas Resonantes</h2>

      <input
        type="text"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        placeholder="Escribe una nota..."
        style={{
          padding: "10px",
          width: "80%",
          marginBottom: "10px",
          borderRadius: "6px",
        }}
      />

      <button
        onClick={agregarNota}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4B0082",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Agregar
      </button>

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {notas.map((nota, index) => (
          <li
            key={index}
            style={{
              background: "#222",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{nota}</span>

            <button
              onClick={() => eliminarNota(index)}
              style={{
                backgroundColor: "#880000",
                color: "#fff",
                border: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
