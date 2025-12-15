import React from 'react';
import { Phone, Instagram, Youtube, MapPin } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="site-footer" className="bg-brand-dark text-white py-8 border-t border-brand-light/30 relative z-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-6">
        
        <div className="flex items-center space-x-6">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all group">
                <Phone className="w-5 h-5 text-white stroke-[1.5]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all group">
                <Instagram className="w-5 h-5 text-white stroke-[1.5]" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all group">
                <Youtube className="w-5 h-5 text-white stroke-[1.5]" />
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all group">
                <MapPin className="w-5 h-5 text-white stroke-[1.5]" />
            </a>
        </div>

        <div className="text-xs text-gray-400 font-light">
            © 2025 Top Portas de Aço. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;