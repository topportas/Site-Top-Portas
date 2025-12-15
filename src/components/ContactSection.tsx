import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { WHATSAPP_DISPLAY, COMPANY_ADDRESS } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section className="bg-gray-50 pb-20 pt-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brand-dark">Nosso Endereço</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-inner relative group">
             <iframe 
                title="Google Maps Location"
                src="https://maps.google.com/maps?q=Rua+RM14,+Qd+06,+Lt-34,+Residencial+Guarema+-+Goiânia+-+Goiás&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-0 transition-all duration-500"
             ></iframe>
          </div>

          <div className="flex flex-col items-center lg:items-start space-y-8 p-8">
            <h2 className="text-2xl font-bold text-brand-dark">Entre em Contato</h2>
            
            <div className="flex items-start gap-4 w-full">
                <div className="p-3 bg-white border border-gray-200 rounded-full text-brand-dark flex-shrink-0">
                    <Phone className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Telefone / WhatsApp</p>
                    <p className="text-xl font-bold text-brand-dark">{WHATSAPP_DISPLAY}</p>
                </div>
            </div>

            <div className="flex items-start gap-4 w-full">
                <div className="p-3 bg-white border border-gray-200 rounded-full text-brand-dark flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Endereço</p>
                    <p className="text-lg text-gray-600">{COMPANY_ADDRESS}</p>
                    <p className="text-sm text-gray-500 mt-1">Atendimento em Goiânia e região</p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;