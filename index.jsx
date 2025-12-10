// index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx"; 
// 👉 Cambia a "./src/AppDiagnostico.jsx" si quieres modo diagnostico

console.log("Osiris: inicio de montaje");

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("⚠️ Error en proyeccion:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: "#ff4d4f", padding: "1rem", background: "#1a0000" }}>
          <h2>⚠️ Error en proyeccion</h2>
          <p>Revisa la consola del navegador para el detalle. El altar sigue vivo.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
  console.log("Osiris: montaje completado");
} else {
  console.error("⚠️ No se encontro el elemento #root en index.html");
}
