import { GoogleGenAI } from "@google/genai";
import { AIQuoteRequest } from "../types";

const getAiClient = () => {
  // Strictly use the environment variable as requested to ensure user's token usage
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error("API_KEY is missing. Please ensure you have selected a valid API Key.");
    // We throw an error here to ensure we don't try to initialize with an empty string if strict mode is desired
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey: apiKey });
};

export const generateQuoteMessage = async (data: AIQuoteRequest): Promise<string> => {
  try {
    const ai = getAiClient();
    
    const prompt = `
      Atue como um assistente virtual da empresa "Top Portas de Aço".
      O cliente deseja um orçamento para uma porta de aço.
      
      Dados do cliente:
      - Largura: ${data.width} metros
      - Altura: ${data.height} metros
      - Tipo: ${data.type}
      - Urgência: ${data.urgency}

      Gere APENAS uma mensagem de texto formatada para WhatsApp que o cliente possa copiar e enviar para o vendedor.
      A mensagem deve ser educada, direta e incluir os dados acima.
      Comece com "Olá, gostaria de um orçamento para..."
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text || "Olá, gostaria de um orçamento para uma porta de aço.";
  } catch (error) {
    console.error("Error generating quote message:", error);
    // Fallback only if API fails
    return `Olá, gostaria de um orçamento para uma porta de aço de ${data.width}x${data.height}, tipo ${data.type}.`;
  }
};