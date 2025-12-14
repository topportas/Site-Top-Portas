
import React, { useState, useMemo } from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
  // Use 3 sets (Original + Clone + Clone).
  // CSS animates -33.33% (1/3 of the width).
  // This reduces DOM nodes compared to 4 sets, improving performance,
  // while still covering 4k screens.
  const loopClients = useMemo(() => [...CLIENTS, ...CLIENTS, ...CLIENTS], []);

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

// Memoized component to prevent re-renders during animation frames
const LogoItem = React.memo(({ name, url }: { name: string; url: string }) => {
  const [error, setError] = useState(false);

  return (
    <div className="mr-8 md:mr-16 flex-shrink-0 flex items-center justify-center min-w-[85px] md:min-w-[120px] h-16 md:h-24 transform-gpu">
      {!error ? (
        <img 
          src={url} 
          alt={name} 
          loading="eager" 
          // 'sync' decoding forces the image to be ready before painting, avoiding white flashes/stutter
          decoding="sync"
          draggable="false"
          referrerPolicy="no-referrer"
          className="h-full w-auto object-contain max-h-11 md:max-h-16 max-w-[110px] md:max-w-[160px] grayscale brightness-0 opacity-70 hover:opacity-100 transition-all duration-300 select-none"
          onError={() => setError(true)}
        />
      ) : (
        <span className="text-sm md:text-xl font-black text-gray-300 uppercase tracking-widest whitespace-nowrap">
          {name}
        </span>
      )}
    </div>
  );
});

export default Clients;
