import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // asegura rutas correctas en producción
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 5000
  },
  preview: {
    host: "0.0.0.0",
    port: process.env.PORT || 5000,
    allowedHosts: ["sistemaosiris-4m3y.onrender.com"]
  }
});
