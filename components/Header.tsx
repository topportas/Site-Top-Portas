import React from 'react';
import { Phone, Instagram, Youtube, MapPin } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area - Top Left */}
          <div className="flex-shrink-0 flex items-center gap-3">
            {/* SVG Logo Construction based on "3 modelos" description */}
            <div className="flex items-center h-12">
               {/* Icon Part */}
               <svg width="50" height="45" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  {/* Outer Frame */}
                  <rect x="1" y="1" width="48" height="43" stroke="#0f3652" strokeWidth="4" fill="none"/>
                  {/* Inner Garage Lines */}
                  <rect x="8" y="8" width="34" height="29" fill="#0f3652"/>
                  <line x1="8" y1="14" x2="42" y2="14" stroke="white" strokeWidth="2"/>
                  <line x1="8" y1="20" x2="42" y2="20" stroke="white" strokeWidth="2"/>
                  <line x1="8" y1="26" x2="42" y2="26" stroke="white" strokeWidth="2"/>
                  <line x1="8" y1="32" x2="42" y2="32" stroke="white" strokeWidth="2"/>
               </svg>
               
               {/* Text Part */}
               <div className="flex flex-col justify-center h-full">
                  <span className="text-[#0f3652] font-black text-3xl leading-none tracking-tighter">TOP</span>
                  <span className="text-[#0f3652] font-bold text-[11px] leading-none tracking-wide mt-0.5">PORTAS DE AÇO</span>
               </div>
            </div>
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