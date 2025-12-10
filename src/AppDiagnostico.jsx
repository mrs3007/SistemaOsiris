import React from "react";
import ErrorBoundary from "../SistemaOsiris/Proteccion/ErrorBoundary.jsx";
import DiagnosticoSoberano from "../SistemaOsiris/Diagnostico/DiagnosticoSoberano.jsx";

export default function AppDiagnostico() {
  return (
    <ErrorBoundary>
      <DiagnosticoSoberano />
    </ErrorBoundary>
  );
}
