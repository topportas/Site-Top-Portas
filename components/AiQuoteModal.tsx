import React, { useState } from 'react';
import { X, Sparkles, Loader2, Copy, Check } from 'lucide-react';
import { AIQuoteRequest } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface AiQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AiQuoteModal: React.FC<AiQuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'loading' | 'result'>('form');
  const [formData, setFormData] = useState<AIQuoteRequest>({
    width: '',
    height: '',
    type: 'Automática',
    urgency: 'Normal'
  });
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateLocalMessage = (data: AIQuoteRequest) => {
    return `Olá, gostaria de um orçamento para uma porta de aço.
    
Dados do pedido:
- Largura: ${data.width} metros
- Altura: ${data.height} metros
- Tipo: ${data.type}
- Urgência: ${data.urgency}

Aguardo o retorno com o valor.`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loading');
    
    // Simula um pequeno delay para UX, dando sensação de processamento
    setTimeout(() => {
      const message = generateLocalMessage(formData);
      setGeneratedMessage(message);
      setStep('result');
    }, 600);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendWhatsapp = () => {
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(generatedMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-brand-dark p-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white">
            <Sparkles className="w-5 h-5 text-brand-accent" />
            <h3 className="font-semibold text-lg">Assistente de Orçamento</h3>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-gray-600 text-sm mb-4">
                Preencha os dados abaixo para gerar uma mensagem formatada e enviar no nosso WhatsApp.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Largura (m)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none"
                    placeholder="Ex: 3.5"
                    value={formData.width}
                    onChange={e => setFormData({...formData, width: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Altura (m)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none"
                    placeholder="Ex: 2.8"
                    value={formData.height}
                    onChange={e => setFormData({...formData, height: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Tipo de Porta</label>
                <select 
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-brand-dark outline-none"
                  value={formData.type}
                  onChange={e => setFormData({...formData, type: e.target.value})}
                >
                  <option>Automática</option>
                  <option>Manual</option>
                  <option>Transvision</option>
                  <option>Lâmina Fechada</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Urgência</label>
                <select 
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-brand-dark outline-none"
                  value={formData.urgency}
                  onChange={e => setFormData({...formData, urgency: e.target.value})}
                >
                  <option>Normal - Planejando para o futuro</option>
                  <option>Alta - Preciso para esta semana</option>
                  <option>Urgente - Porta estragada/Obra parada</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-dark text-white py-3 rounded-lg font-semibold hover:bg-brand-light transition-colors flex items-center justify-center gap-2 mt-4"
              >
                <Sparkles className="w-4 h-4" />
                Gerar Mensagem
              </button>
            </form>
          )}

          {step === 'loading' && (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <Loader2 className="w-10 h-10 text-brand-dark animate-spin mb-4" />
              <p className="text-gray-600 font-medium">Gerando rascunho...</p>
            </div>
          )}

          {step === 'result' && (
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 relative">
                <p className="text-gray-800 text-sm whitespace-pre-wrap font-medium leading-relaxed">
                  {generatedMessage}
                </p>
                <button 
                  onClick={handleCopy}
                  className="absolute top-2 right-2 p-1.5 text-gray-500 hover:text-brand-dark hover:bg-white rounded-md transition-all"
                  title="Copiar"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => setStep('form')}
                  className="flex-1 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Voltar
                </button>
                <button 
                  onClick={handleSendWhatsapp}
                  className="flex-1 py-2.5 bg-[#25D366] text-white rounded-lg font-bold hover:bg-[#1da851] transition-colors shadow-lg shadow-green-200"
                >
                  Enviar no WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiQuoteModal;