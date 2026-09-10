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
    <motion.div
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        onClick={handleClick}
        className="w-full text-left cursor-pointer group relative flex flex-col justify-between h-full rounded-[1.75rem] p-6 md:p-7 transition-all duration-500 ease-out
          border border-neutral-300/70 hover:border-neutral-900/60
          bg-white/70 hover:bg-white
          shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)]
          hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,1)]
          hover:-translate-y-2 overflow-hidden"
      >
        {/* Subtle Background Shift Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/90 via-white to-neutral-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

        {/* Ambient Top Glow on Hover */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-neutral-900/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

        {/* Top Content Area */}
        <div className="relative z-10 w-full">
          {/* Header Row: Number + 3D Visual + Action Arrow */}
          <div className="flex items-center justify-between mb-5">
            <span className="font-mono text-xs font-semibold tracking-wider text-secondary bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200/80 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
              {service.number}
            </span>

            <div className="flex items-center gap-2">
              {/* 3D Visual Icon */}
              <div className="w-14 h-14 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                <ServiceVisual type={service.visualType} isHovered={isHovered} />
              </div>

              {/* Hover-revealed Action Arrow */}
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-sm shrink-0">
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-h2 text-xl md:text-2xl font-bold tracking-tight text-primary uppercase mb-2.5 leading-snug">
            {service.title}
          </h3>

          {/* Description */}
          <p className="font-body-md text-secondary text-sm md:text-[15px] leading-relaxed mb-5 line-clamp-3">
            {service.shortDescription}
          </p>
        </div>

        {/* Feature Tags at Bottom */}
        <div className="relative z-10 w-full pt-4 border-t border-neutral-200/70 group-hover:border-neutral-300 transition-colors duration-300 mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {service.features.map((feature) => (
              <span 
                key={feature} 
                className="text-[11px] font-mono text-neutral-700 bg-neutral-100/90 group-hover:bg-white px-2.5 py-1 rounded-md border border-neutral-200/60 transition-colors duration-300"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-400 group-hover:text-black transition-colors duration-300">
              Explore Details
            </span>
            <span className="material-symbols-outlined text-xs text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300">
              arrow_forward
            </span>
          </div>
        </div>
      </button>
    </motion.div>
  );
}
