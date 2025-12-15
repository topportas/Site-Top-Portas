import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    // Define a chave da API diretamente no processo de build para uso no frontend
    'process.env.API_KEY': JSON.stringify("AIzaSyAI-Q62MFrKRDx9wYB6CPUHX3p0azS5uMk")
  }
});