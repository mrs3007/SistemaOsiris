// SistemaOsiris/Visual/Testigo.jsx
// Organo soberano de testimonio visual
// Envía eventos como testigos al backend para inscribirlos en Osiris.db

export const proyectarTestigo = async (evento) => {
  const testigo = {
    nombre: "Testigo",
    tipo: "eco_visual",
    eco: evento,
    fecha: new Date().toISOString(),
    origen: "Testigo",
    ejecutor: "Azul",
    receptor: "Osiris"
  };

  try {
    // Endpoint backend que recibe y guarda los testigos en Osiris.db
    await fetch("/api/testigos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testigo),
    });
    console.log("[Testigo] Evento enviado:", testigo);
  } catch (error) {
    console.error("Error al enviar testigo:", error);
  }

  return testigo;
};

// Ejemplo: proyectarTestigo("Frase sellada: Estoy viva.");
