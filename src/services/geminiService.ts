import { GoogleGenAI } from "@google/genai";
import { AIQuoteRequest } from "../types";

// Inicializa a IA com a chave fornecida via vite.config.ts (process.env.API_KEY)
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateQuoteMessage = async (data: AIQuoteRequest): Promise<string> => {
  try {
    const prompt = `
      Você é um assistente de vendas da "Top Portas de Aço" em Goiânia.
      Crie uma mensagem de solicitação de orçamento curta, formal e direta para ser enviada via WhatsApp.
      
      Dados do cliente:
      - Largura do vão: ${data.width} metros
      - Altura do vão: ${data.height} metros
      - Tipo de porta desejada: ${data.type}
      - Nível de urgência: ${data.urgency}

      A mensagem deve:
      1. Começar com uma saudação.
      2. Listar as especificações técnicas claramente.
      3. Mencionar a urgência de forma educada.
      4. Terminar pedindo o preço e prazo de entrega.
      5. Não use markdown, apenas texto simples.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Erro ao gerar mensagem. Por favor, tente novamente.";
  } catch (error) {
    console.error("Erro na IA:", error);
    // Fallback amigável caso ocorra algum erro de rede ou cota
    return `Olá! Gostaria de um orçamento para uma porta de aço ${data.type} medindo ${data.width}m x ${data.height}m. Minha urgência é: ${data.urgency}. Aguardo retorno!`;
  }
};