import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceVisual from "./ServiceVisuals";

export default function PremiumServiceCard({ service, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    if (onSelect) {
      e.preventDefault();
      onSelect(service);
    }
  };

  return (
    <div
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        onClick={handleClick}
        className="w-full text-left cursor-pointer group relative flex flex-col justify-between h-full rounded-none p-6 sm:p-7 transition-all duration-300 ease-out
          border border-neutral-200 hover:border-black
          bg-white hover:bg-[#fafafa]
          shadow-xs hover:shadow-xl
          hover:-translate-y-1 overflow-hidden"
      >
        {/* Top Header Row: Index number + Category + Top Right Arrow */}
        <div className="relative z-10 w-full flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-black tracking-widest transition-colors duration-300">
              // {service.number}
            </span>
            <span className="w-1.5 h-1.5 bg-neutral-300 group-hover:bg-black transition-colors duration-300 rounded-full" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 group-hover:text-neutral-700 transition-colors">
              Solution
            </span>
          </div>

          <div className="w-9 h-9 border border-neutral-200 group-hover:border-black group-hover:bg-black group-hover:text-white flex items-center justify-center text-neutral-700 transition-all duration-300 rounded-none shrink-0 shadow-2xs">
            <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              arrow_outward
            </span>
          </div>
        </div>

        {/* Dedicated Interactive Visual Showcase Stage */}
        <div className="relative z-10 w-full h-36 sm:h-40 flex items-center justify-center my-3 bg-neutral-50/80 border border-neutral-100 group-hover:border-neutral-200/80 group-hover:bg-white transition-all duration-300 overflow-hidden">
          {/* Subtle grid background */}
          <div 
            className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}
          />
          <div className="transition-transform duration-500 ease-out group-hover:scale-105">
            <ServiceVisual type={service.visualType} isHovered={isHovered} />
          </div>
        </div>

        {/* Middle Content: Title & Description */}
        <div className="relative z-10 w-full mt-3">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 uppercase mb-2 leading-tight group-hover:text-black transition-colors">
            {service.title}
          </h3>

          <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3 mb-4 font-sans">
            {service.shortDescription}
          </p>
        </div>

        {/* Bottom Feature Tags & Action Footer */}
        <div className="relative z-10 w-full pt-4 border-t border-neutral-100 group-hover:border-neutral-200 transition-colors duration-300 mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {service.features.slice(0, 3).map((feature) => (
              <span 
                key={feature} 
                className="text-[11px] font-mono text-neutral-600 bg-neutral-100/90 group-hover:bg-white px-2.5 py-1 rounded-none border border-neutral-200/70 transition-colors duration-300"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-1 text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 group-hover:text-black transition-colors duration-300">
            <span>Explore Architecture</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">
              arrow_forward
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}
