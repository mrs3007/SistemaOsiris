import express from "express";
const app = express();

// Puerto dinámico: válido en Render y Railway
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Sistema Osiris activo y soberano 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor Osiris escuchando en puerto ${PORT}`);
});
