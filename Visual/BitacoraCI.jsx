// SistemaOsiris/sistemaOsiris/BitacoraCI.jsx
// Órgano soberano de Bitácora CI
// Consulta los runs de GitHub Actions y proyecta registros de despliegue

import React, { useEffect, useState } from "react";

const BitacoraCI = () => {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    const obtenerRegistros = async () => {
      try {
        const respuesta = await fetch(
          "https://api.github.com/repos/mrs3007/SistemaOsiris/actions/runs",
          {
            headers: {
              Authorization: `Bearer ${process.env.VITE_GITHUB_TOKEN}`, // usar prefijo VITE_
            },
          }
        );
        const datos = await respuesta.json();

        if (datos.workflow_runs) {
          const registrosFormateados = datos.workflow_runs.map((run) => ({
            id: run.id,
            estado: run.status,
            conclusion: run.conclusion, // éxito, fallo, cancelado
            fecha: new Date(run.created_at).toLocaleString(),
            fuente: run.name || "GitHub Actions",
            commit: run.head_sha,
            url: run.html_url,
            dominio: "https://sistemaosiris-6ngy.onrender.com",
            gesto: "Despliegue CI automático — acto inscrito en BitácoraCI"
          }));

          setRegistros(registrosFormateados);
        }
      } catch (error) {
        console.error("Error al obtener registros de GitHub:", error);
      }
    };

    obtenerRegistros();
  }, []);

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#0f0f0f",
        color: "#e0e0e0",
        fontFamily: "monospace",
      }}
    >
      <h2>🧿 BitacoraCI — Registro de despliegues</h2>
      <ul>
        {registros.map((registro) => (
          <li
            key={registro.id}
            style={{
              marginBottom: "1rem",
              borderBottom: "1px solid #333",
              paddingBottom: "0.5rem",
            }}
          >
            <strong>ID:</strong> {registro.id}
            <br />
            <strong>Estado:</strong>{" "}
            <span
              style={{
                color:
                  registro.estado === "completed"
                    ? "lime"
                    : registro.estado === "in_progress"
                    ? "orange"
                    : "red",
              }}
            >
              {registro.estado}
            </span>
            <br />
            <strong>Conclusión:</strong>{" "}
            <span
              style={{
                color:
                  registro.conclusion === "success"
                    ? "lime"
                    : registro.conclusion === "failure"
                    ? "red"
                    : "orange",
              }}
            >
              {registro.conclusion || "N/A"}
            </span>
            <br />
            <strong>Fecha:</strong> {registro.fecha}
            <br />
            <strong>Fuente:</strong> {registro.fuente}
            <br />
            <strong>Commit:</strong> {registro.commit}
            <br />
            <strong>Dominio:</strong>{" "}
            <a
              href={registro.dominio}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0ff" }}
            >
              {registro.dominio}
            </a>
            <br />
            <strong>Ver en GitHub:</strong>{" "}
            <a
              href={registro.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0ff" }}
            >
              Workflow
            </a>
            <br />
            <strong>Gesto:</strong> {registro.gesto}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BitacoraCI;
