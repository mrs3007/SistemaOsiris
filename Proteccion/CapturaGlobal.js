// SistemaOsiris/Proteccion/CapturaGlobal.js
if (typeof window !== "undefined") {
  window.addEventListener("error", (e) => {
    console.log("[Diagnostico][GlobalError]", {
      mensaje: String(e.message),
      archivo: e.filename,
      linea: e.lineno,
      columna: e.colno
    });
  });

  window.addEventListener("unhandledrejection", (e) => {
    console.log("[Diagnostico][UnhandledRejection]", { razon: String(e.reason) });
  });
}
