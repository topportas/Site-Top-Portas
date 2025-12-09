
import React from 'react';
import { Phone } from 'lucide-react';
import { WHATSAPP_DISPLAY, WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[600px]">
          
          {/* Left Content - Centered on Mobile, Left on Desktop */}
          <div className="flex flex-col justify-center px-6 lg:px-8 py-12 lg:py-20 z-10 items-center lg:items-start text-center lg:text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-brand-dark leading-tight mb-6 whitespace-nowrap">
              TOP PORTAS DE AÇO
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
              Especialistas em <strong className="text-brand-dark">fabricação e manutenção</strong> de portas de aço para empresas.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-brand-dark font-medium mb-8 justify-center lg:justify-start">
               <span className="flex items-center">✓ Serviço Especializado</span>
               <span className="flex items-center">✓ Rapidez</span>
               <span className="flex items-center">✓ Garantia Especial</span>
               <span className="flex items-center">✓ Atendimento 24H/7D</span>
            </div>

            <div className="bg-white border-2 border-brand-dark rounded-lg p-6 max-w-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full sm:w-auto">
               <div className="text-center mb-2">
                   <span className="uppercase text-xs font-bold text-gray-500 tracking-wider">Orçamento Rápido</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                   <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-brand-dark hover:text-brand-light transition-colors">
                        <Phone className="w-6 h-6" />
                        {WHATSAPP_DISPLAY}
                   </a>
                   <span className="text-gray-500 text-sm text-center">Goiânia e região • Orçamento sem compromisso</span>
               </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-auto w-full">
            {/* Image with overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 lg:w-24 hidden lg:block"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent z-10 lg:hidden h-24"></div>
            
            <img 
              src="/images/hero-banner.jpg" 
              alt="Porta de Aço Industrial" 
              className="w-full h-full object-cover"
            />
             {/* Play Button Simulation */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="w-20 h-20 bg-brand-dark/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                </div>
            </div>
            <div className="absolute bottom-10 left-0 right-0 text-center z-10">
                <span className="text-white text-sm font-medium drop-shadow-md">Veja nossos serviços</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
