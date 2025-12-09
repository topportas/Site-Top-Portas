
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (service: ServiceItem) => {
    setSelectedService(service);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedService(null);
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

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div 
                key={index} 
                onClick={() => openGallery(service)}
                className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center h-full group cursor-pointer h-[500px]"
              >
                {/* Background Image with Blur */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.backgroundImage} 
                    alt={service.title} 
                    className="w-full h-full object-cover blur-[2px] scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Navy Blue Overlay with Opacity */}
                  <div className="absolute inset-0 bg-brand-dark/80 mix-blend-multiply transition-opacity duration-300 group-hover:bg-brand-dark/90"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col items-center h-full w-full">
                  {/* Icon Container */}
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
                    <div className="flex justify-center items-center gap-2 text-white/80 text-xs font-semibold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <ImageIcon className="w-4 h-4" />
                       Ver Galeria de Fotos
                    </div>

                    <a 
                      href={service.link}
                      onClick={(e) => e.stopPropagation()} // Prevent opening gallery when clicking CTA
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full bg-white text-brand-dark text-sm font-bold py-4 px-6 rounded hover:bg-brand-accent hover:text-brand-dark transition-all transform active:scale-95 shadow-lg"
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

      {/* Lightbox Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button 
            onClick={closeGallery}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-[110]"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center">
            {selectedService.galleryImages.length > 0 ? (
              <>
                <img 
                  src={selectedService.galleryImages[currentImageIndex]} 
                  alt={`${selectedService.title} - ${currentImageIndex + 1}`}
                  className="max-h-[85vh] max-w-full object-contain rounded-md shadow-2xl"
                />
                
                {/* Navigation Buttons */}
                {selectedService.galleryImages.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-2 md:-left-12 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-2 md:-right-12 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </button>
                  </>
                )}

                {/* Counter */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white font-medium tracking-widest text-sm bg-black/30 px-4 py-1 rounded-full">
                  {currentImageIndex + 1} / {selectedService.galleryImages.length} • {selectedService.title}
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
