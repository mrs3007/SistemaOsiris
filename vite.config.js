import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // asegura rutas correctas en producción
  plugins: [react()],
  esbuild: {
    charset: "utf8" // 🔑 fuerza UTF-8 para acentos y caracteres especiales
  },
  server: {
    host: "0.0.0.0",
    port: process.env.PORT // Render/Railway ya definen PORT automáticamente
  },
  preview: {
    host: "0.0.0.0",
    port: process.env.PORT, // no lo fijes en 5000, usa el que asigna la plataforma
    allowedHosts: ["sistemaosiris-4m3y.onrender.com"]
  }
});
