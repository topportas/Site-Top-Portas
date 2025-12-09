import React, { useEffect, useState } from 'react';
import { WHATSAPP_LINK } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  const [bottomOffset, setBottomOffset] = useState(24); // 24px = bottom-6 default

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('site-footer');
      if (!footer) return;
      
      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // If footer is entering the viewport
      if (footerRect.top < windowHeight) {
        // Calculate how far up we need to push the button
        // We want the button to sit e.g. 24px above the footer
        const overlap = windowHeight - footerRect.top;
        setBottomOffset(24 + overlap);
      } else {
        setBottomOffset(24);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      style={{ bottom: `${bottomOffset}px` }}
      className="fixed right-6 z-40 group transition-all duration-100 ease-out hover:-translate-y-1"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded shadow-md text-xs font-bold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Orçamento Rápido!
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
      </div>

      {/* Icon Container */}
      <div className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] flex items-center justify-center hover:bg-[#20bd5a] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300">
         {/* WhatsApp SVG Icon */}
         <svg 
            className="w-8 h-8 md:w-9 md:h-9 text-white fill-current" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512"
         >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
         </svg>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;