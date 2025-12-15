import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Carrega as variáveis de ambiente (local .env ou do sistema/Vercel)
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    define: {
      // O SDK do Google espera process.env.API_KEY.
      // Aqui mapeamos sua variável da Vercel (GEMINI_API_KEY) para onde o SDK espera.
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY || '')
    }
  };
});