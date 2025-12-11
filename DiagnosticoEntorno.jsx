// DiagnosticoEntorno.jsx
// Organo de Diagnostico Soberano de Entorno para Sistema Osiris
// Detecta colisiones, rutas equivocadas, builds incorrectos y entornos contaminados.

import React, { useEffect, useState } from "react";

export default function DiagnosticoEntorno() {
  const [estado, setEstado] = useState({
    arquitectura: "desconocida",
    viteDetectado: false,
    nodeServerDetectado: false,
    archivosConflictivos: [],
    variante: "desconocida",
    packageJsonValido: false,
    devDependenciesCorrectas: false,
    entorno: {},
    mensaje: "Escaneando entorno..."
  });

  useEffect(() => {
    const resultado = ejecutarDiagnostico();
    setEstado(resultado);
  }, []);

  function ejecutarDiagnostico() {
    const archivos = obtenerArchivos();
    const pkg = obtenerPackageJson();
    const env = obtenerEntorno();

    const conflictivos = archivos.filter(a =>
      ["server.js", "render.yaml", "railway.json", "vercel.json", "transformer.js", "validator.js"].includes(a)
    );

    const vite = archivos.includes("vite.config.js");
    const nodeServer = archivos.includes("server.js");

    const devDepsCorrectas =
      pkg?.devDependencies?.vite &&
      pkg?.devDependencies["@vitejs/plugin-react"];

    const variante =
      env?.CI === "true" ? "CI" : "produccion";

    let arquitectura = "indefinida";

    if (vite && !nodeServer) arquitectura = "Vite";
    if (nodeServer && !vite) arquitectura = "Node/Express";
    if (vite && nodeServer) arquitectura = "Colision";

    let mensaje = "";

    if (arquitectura === "Colision") {
      mensaje =
        "Se detecta colision de arquitecturas: Vite + Node/Express. Esto causa fallos de build.";
    } else if (!devDepsCorrectas) {
      mensaje =
        "El package.json no contiene devDependencies correctas para Vite.";
    } else if (!vite) {
      mensaje =
        "No se detecta vite.config.js. El entorno no puede construir con Vite.";
    } else if (conflictivos.length > 0) {
      mensaje =
        "Existen archivos conflictivos que obligan al entorno a ignorar Vite.";
    } else {
      mensaje = "Entorno limpio. Arquitectura Vite activa y funcional.";
    }

    return {
      arquitectura,
      viteDetectado: vite,
      nodeServerDetectado: nodeServer,
      archivosConflictivos: conflictivos,
      variante,
      packageJsonValido: Boolean(pkg),
      devDependenciesCorrectas: Boolean(devDepsCorrectas),
      entorno: env,
      mensaje
    };
  }

  function obtenerArchivos() {
    try {
      return window.__OSIRIS_ARCHIVOS__ || [];
    } catch {
      return [];
    }
  }

  function obtenerPackageJson() {
    try {
      return window.__OSIRIS_PACKAGE__ || null;
    } catch {
      return null;
    }
  }

  function obtenerEntorno() {
    try {
      return window.__OSIRIS_ENV__ || {};
    } catch {
      return {};
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h2>Diagnostico Soberano de Entorno</h2>
      <p><strong>Arquitectura detectada:</strong> {estado.arquitectura}</p>
      <p><strong>Vite detectado:</strong> {estado.viteDetectado ? "Si" : "No"}</p>
      <p><strong>Servidor Node detectado:</strong> {estado.nodeServerDetectado ? "Si" : "No"}</p>
      <p><strong>Variante activa:</strong> {estado.variante}</p>
      <p><strong>devDependencies correctas:</strong> {estado.devDependenciesCorrectas ? "Si" : "No"}</p>

      {estado.archivosConflictivos.length > 0 && (
        <div>
          <strong>Archivos conflictivos:</strong>
          <ul>
            {estado.archivosConflictivos.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      )}

      <p style={{ marginTop: "20px", color: "#c00" }}>
        <strong>{estado.mensaje}</strong>
      </p>
    </div>
  );
}
