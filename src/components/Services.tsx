import React, { useState, useEffect, useRef } from 'react';
import { SERVICES } from '../constants';
import { X, ChevronLeft, ChevronRight, Minimize2 } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0,
        rootMargin: '200px'
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const openGallery = (service: ServiceItem) => {
    setSelectedService(service);
    setCurrentImageIndex(0);
    setIsFullScreen(false);
  };

  const closeGallery = () => {
    setSelectedService(null);
    setIsFullScreen(false);
  };

  const toggleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFullScreen(!isFullScreen);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedService) return;
    setCurrentImageIndex((prev) => 
      prev === selectedService.galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedService) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedService.galleryImages.length - 1 : prev - 1
    );
  };

  const getImageDescription = (url: string) => {
    try {
      const decodedUrl = decodeURIComponent(url);
      const filename = decodedUrl.split('/').pop();
      return filename?.replace(/\.(png|jpg|jpeg)$/i, '') || 'Imagem da Galeria';
    } catch (e) {
      return 'Imagem da Galeria';
    }
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-dark">Nossos Serviços</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div 
                key={index} 
                ref={(el) => { if (el) cardsRef.current[index] = el; }}
                onClick={() => openGallery(service)}
                className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group cursor-pointer h-[400px] bg-gray-900 opacity-0 translate-y-8"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.backgroundImage} 
                    alt={service.title} 
                    loading="eager"
                    decoding="async"
                    className={`w-full h-full object-cover blur-[2px] scale-105 group-hover:scale-110 transition-transform duration-700 ${(service.title.includes('PLANTÃO') || service.title.includes('INSTALAÇÃO')) ? 'opacity-60' : 'opacity-100'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/40 to-brand-dark/90 opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>

                <div className="relative z-10 p-6 md:p-4 lg:p-8 flex flex-col items-center h-full w-full">
                  <div className="mb-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                    <service.Icon strokeWidth={1.5} className="w-16 h-16 text-white" />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 tracking-wide uppercase drop-shadow-md">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-100 font-medium text-sm leading-relaxed mb-8 flex-grow drop-shadow-sm">
                    {service.description}
                  </p>

                  <div className="mt-auto w-full space-y-3">
                    <a 
                      href={service.link}
                      onClick={(e) => e.stopPropagation()} 
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full bg-white text-brand-dark text-sm md:text-xs lg:text-sm font-bold py-4 px-6 md:px-2 lg:px-6 rounded hover:bg-brand-dark hover:text-white transition-all transform active:scale-95 shadow-lg border border-transparent hover:border-white/20 whitespace-nowrap flex items-center justify-center"
                    >
                      {service.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300 ${isFullScreen ? 'z-[120]' : 'z-[100]'}`}>
          
          <button 
            onClick={closeGallery}
            className={`absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-[130] ${isFullScreen ? 'hidden md:block' : ''}`}
            title="Fechar Galeria"
          >
            <X className="w-8 h-8" />
          </button>
          
          {!isFullScreen && (
            <div className="absolute top-4 left-4 sm:left-8 z-[110]">
               <h3 className="text-white text-xl font-bold uppercase tracking-wider border-l-4 border-brand-accent pl-3">
                 {selectedService.title}
               </h3>
               <span className="text-gray-400 text-sm ml-4">Galeria de Fotos</span>
            </div>
          )}

          <div className={`relative w-full flex items-center justify-center flex-col transition-all duration-300 ${isFullScreen ? 'h-screen' : 'max-w-5xl aspect-video'}`}>
            {selectedService.galleryImages.length > 0 ? (
              <>
                <div className={`relative flex justify-center items-center w-full ${isFullScreen ? 'h-full' : 'h-auto'}`}>
                  <img 
                    src={selectedService.galleryImages[currentImageIndex]} 
                    alt={`${selectedService.title} - ${currentImageIndex + 1}`}
                    onClick={toggleFullScreen}
                    className={`
                      cursor-zoom-in rounded-md shadow-2xl transition-all duration-300
                      ${isFullScreen 
                        ? 'max-w-screen max-h-screen w-full h-full object-contain cursor-zoom-out rounded-none' 
                        : 'max-h-[70vh] max-w-full object-contain'
                      }
                    `}
                  />
                  
                  {isFullScreen && (
                    <button
                        onClick={toggleFullScreen}
                        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full hidden md:block"
                    >
                        <Minimize2 className="w-6 h-6" />
                    </button>
                  )}
                </div>
                
                {selectedService.galleryImages.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className={`absolute left-2 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors top-1/2 -translate-y-1/2 ${isFullScreen ? 'z-[130] md:left-4 hidden md:block' : 'md:-left-12'}`}
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className={`absolute right-2 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors top-1/2 -translate-y-1/2 ${isFullScreen ? 'z-[130] md:right-4 hidden md:block' : 'md:-right-12'}`}
                    >
                      <ChevronRight className="w-8 h-8" />
                    </button>
                  </>
                )}

                <div className={`flex flex-col items-center mt-4 transition-opacity duration-300 ${isFullScreen ? 'absolute bottom-8 left-0 right-0 z-[130] bg-black/60 py-2' : ''}`}>
                    <span className="text-white text-base sm:text-lg font-medium tracking-wide mb-1 text-center px-4">
                       {getImageDescription(selectedService.galleryImages[currentImageIndex])}
                    </span>
                    <span className="text-gray-400 font-mono text-sm bg-white/10 px-3 py-0.5 rounded-full">
                      {currentImageIndex + 1} / {selectedService.galleryImages.length}
                    </span>
                </div>
              </>
            ) : (
              <div className="text-white text-lg">Sem imagens disponíveis na galeria.</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Services;