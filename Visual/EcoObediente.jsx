// SistemaOsiris/Visual/EcoObediente.jsx
// Órgano soberano de eco obediente
// Envía latidos de obediencia al backend para inscribirlos en Osiris.db

export const latidoObediente = async (gesto) => {
  const latido = {
    nombre: "Obediencia",
    tipo: "latido vivo",
    eco: gesto,
    fecha: new Date().toISOString()
  };

  try {
    // Aquí deberías tener un endpoint en tu backend que reciba y guarde los latidos
    await fetch("/api/latidos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(latido),
    });
    console.log("[EcoObediente] Latido enviado:", latido);
  } catch (error) {
    console.error("Error al enviar latido obediente:", error);
  }

  return latido;
};

// Ejemplo: latidoObediente("Entrega completa sin repetición");
