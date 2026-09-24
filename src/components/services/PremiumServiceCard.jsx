import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceVisual from "./ServiceVisuals";

export default function PremiumServiceCard({ service, onSelect }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onSelect) {
      onSelect(service);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (onSelect) onSelect(service);
    }
  };

  return (
    <motion.div 
      className="h-full"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className="w-full text-left cursor-pointer group relative flex flex-col justify-between h-full rounded-none p-7 sm:p-8 transition-colors duration-300 ease-out
          border border-[#551220] hover:border-[#9E253A]
          bg-[#26050C]/90 hover:bg-[#320812]
          shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_50px_rgba(99,27,39,0.35)]
          overflow-hidden select-none focus:outline-none focus:ring-1 focus:ring-[#9E253A]"
      >
        {/* Top Header Row: Icon + Top Right Arrow */}
        <div className="relative z-10 w-full flex items-center justify-between mb-6">
          {/* Clean Minimal Icon */}
          <div className="w-11 h-11 border border-[#681728] group-hover:border-[#9E253A] bg-[#430C17] group-hover:bg-[#631B27] flex items-center justify-center text-[#F5F1EA] transition-all duration-300 rounded-none shrink-0 shadow-xs">
            <span className="material-symbols-outlined text-xl">
              {service.icon || "code_blocks"}
            </span>
          </div>

          <div className="w-9 h-9 border border-[#681728] group-hover:border-[#9E253A] bg-[#430C17] group-hover:bg-[#631B27] flex items-center justify-center text-[#F5F1EA] transition-all duration-300 rounded-none shrink-0 shadow-xs">
            <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              arrow_outward
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="relative z-10 w-full mb-6">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F1EA] uppercase mb-3 leading-tight group-hover:text-white transition-colors">
            {service.title}
          </h3>

          <p className="text-sm text-[#DDD5C8] leading-relaxed font-sans line-clamp-4 transition-colors">
            {service.shortDescription}
          </p>
        </div>

        {/* Structured Feature Bullet Checklist */}
        <div className="relative z-10 w-full mb-6 space-y-2.5">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2.5 text-xs text-[#E6DFD5]">
              <span className="w-1.5 h-1.5 bg-[#E54867] transition-colors duration-300 rounded-none shrink-0 mt-1.5" />
              <span className="font-medium leading-snug group-hover:text-white transition-colors">{feature}</span>
            </div>
          ))}
        </div>

        {/* Bottom Feature Tags & Action Footer */}
        <div className="relative z-10 w-full pt-4 border-t border-[#4E0F1D] group-hover:border-[#781B2D] transition-colors duration-300 mt-auto">
          <div className="flex items-center justify-between text-xs font-mono font-semibold uppercase tracking-wider text-[#E89EAE] group-hover:text-white transition-colors duration-300">
            <span>Explore Architecture</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">
              arrow_forward
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
