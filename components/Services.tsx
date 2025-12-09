import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full group">
              
              {/* Icon Container */}
              <div className="mb-6 p-4 bg-transparent group-hover:bg-gray-50 rounded-full transition-colors">
                <service.Icon strokeWidth={1.5} className="w-16 h-16 text-brand-dark" />
              </div>

              <h3 className="text-xl font-bold text-brand-dark mb-4 tracking-wide uppercase">
                {service.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              <a 
                href={service.link}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-brand-dark text-white text-sm font-bold py-4 px-6 rounded hover:bg-brand-light transition-all transform active:scale-95 shadow-md"
              >
                {service.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;