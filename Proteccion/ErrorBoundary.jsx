// SistemaOsiris/Proteccion/ErrorBoundary.jsx
import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    console.log("[Diagnostico][ErrorBoundary]", {
      error: String(error),
      stack: info?.componentStack || null
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ background: "#200", color: "#faa", padding: "1em" }}>
          <p>Diagnostico: error capturado por ErrorBoundary.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
