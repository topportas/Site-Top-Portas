
import React from 'react';
import { Phone, Instagram, Youtube, MapPin } from 'lucide-react';
import { WHATSAPP_LINK, LOGO_URL } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-[0_4px_20px_-5px_rgba(15,54,82,0.3)] sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area - Aligned Left */}
          <div className="flex-shrink-0 flex items-center justify-start">
             <img 
               src={LOGO_URL} 
               alt="Top Portas de Aço" 
               className="h-16 w-auto object-contain object-left"
             />
          </div>

          {/* Icons - Visible on Mobile (smaller) and Desktop */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-gray-50 border-2 border-gray-200 text-brand-dark hover:bg-brand-dark hover:text-white hover:border-brand-dark hover:scale-110 transition-all duration-300 ease-out shadow-sm transform-gpu"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-gray-50 border-2 border-gray-200 text-brand-dark hover:bg-brand-dark hover:text-white hover:border-brand-dark hover:scale-110 transition-all duration-300 ease-out shadow-sm transform-gpu"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-gray-50 border-2 border-gray-200 text-brand-dark hover:bg-brand-dark hover:text-white hover:border-brand-dark hover:scale-110 transition-all duration-300 ease-out shadow-sm transform-gpu"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-gray-50 border-2 border-gray-200 text-brand-dark hover:bg-brand-dark hover:text-white hover:border-brand-dark hover:scale-110 transition-all duration-300 ease-out shadow-sm transform-gpu"
            >
              <MapPin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
