
import React from 'react';
import { Phone, Play, Check } from 'lucide-react';
import { WHATSAPP_DISPLAY, WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  // Using the specific Automatic Door image from the repo to serve as the thumbnail
  const THUMBNAIL_URL = "https://raw.githubusercontent.com/topportas/Site-Top-Portas/main/Porta%20de%20A%C3%A7o%20Autom%C3%A1tica.png";

  return (
    <div className="relative w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 min-h-[500px] lg:min-h-[600px] items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center px-6 lg:px-8 py-12 z-10 items-center lg:items-start text-center lg:text-left order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-brand-dark leading-tight mb-6 lg:whitespace-nowrap">
              TOP PORTAS DE AÇO
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
              Especialistas em <strong className="text-brand-dark">fabricação e manutenção</strong> de portas de aço automáticas para empresas e comércios.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-brand-dark font-medium mb-8 justify-center lg:justify-start">
               <span className="flex items-center gap-2"><Check className="w-5 h-5 text-brand-dark" /> Serviço Especializado</span>
               <span className="flex items-center gap-2"><Check className="w-5 h-5 text-brand-dark" /> Rapidez</span>
               <span className="flex items-center gap-2"><Check className="w-5 h-5 text-brand-dark" /> Garantia</span>
               <span className="flex items-center gap-2"><Check className="w-5 h-5 text-brand-dark" /> 24H/7D</span>
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

          {/* Right Video Thumbnail Area */}
          <div className="relative px-6 lg:px-8 lg:pr-8 py-8 order-2 flex items-center justify-center">
            {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-gray-100 to-transparent rounded-full opacity-50 blur-3xl -z-10"></div>

            {/* Video Card Container - Increased size for desktop */}
            <div className="relative w-full max-w-lg lg:max-w-2xl xl:max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] group cursor-pointer border-4 border-white bg-gray-900">
                
                {/* Thumbnail Image */}
                <img 
                  src={THUMBNAIL_URL} 
                  alt="Porta de Aço Automática em Funcionamento" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  loading="eager"
                />

                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>

                {/* Center Play Button - Static White */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <Play className="w-16 h-16 sm:w-20 sm:h-20 text-white fill-white opacity-90 drop-shadow-lg" strokeWidth={1} />
                    </div>
                </div>

                {/* Bottom Info Area */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                    <h3 className="text-lg sm:text-xl font-bold leading-tight mb-1 drop-shadow-md">
                        Porta Automática Modelo Transvision
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-1">
                        Instalação rápida e motor de alta potência
                    </p>
                </div>

                {/* Video Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded border border-white/20">
                    0:45
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
