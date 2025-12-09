import React, { useState } from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
  // Create 3 sets to ensure width > screen width on large displays for seamless -33.33% loop
  const loopClients = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="py-16 bg-white overflow-hidden min-h-[200px]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brand-dark">Clientes Atendidos</h2>
      </div>
      
      <div className="relative w-full border-y border-gray-100 bg-white py-12">
        <div className="scroll-container">
          <div className="scroll-content items-center">
            {loopClients.map((client, index) => (
              <LogoItem key={`${client.name}-${index}`} name={client.name} url={client.url} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted to manage individual image error state
const LogoItem: React.FC<{ name: string; url: string }> = ({ name, url }) => {
  const [error, setError] = useState(false);

  return (
    <div className="mr-16 flex-shrink-0 flex items-center justify-center min-w-[120px] h-24">
      {!error ? (
        <img 
          src={url} 
          alt={name} 
          loading="lazy"
          referrerPolicy="no-referrer"
          // grayscale + brightness-0 turns any color logo into a solid black silhouette
          // opacity-70 makes it slightly subtle, hover brings it to full black
          className="h-full w-auto object-contain max-h-16 max-w-[160px] grayscale brightness-0 opacity-70 hover:opacity-100 transition-all duration-300"
          onError={() => setError(true)}
        />
      ) : (
        // Fallback text if image fails to load
        <span className="text-xl font-black text-gray-300 uppercase tracking-widest whitespace-nowrap">
          {name}
        </span>
      )}
    </div>
  );
};

export default Clients;