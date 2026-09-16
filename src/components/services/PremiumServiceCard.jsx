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
    <div className="h-full">
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className="w-full text-left cursor-pointer group relative flex flex-col justify-between h-full rounded-none p-7 sm:p-8 transition-all duration-300 ease-out
          border border-neutral-200 hover:border-black
          bg-white hover:bg-[#fafafa]
          shadow-xs hover:shadow-xl
          hover:-translate-y-1 overflow-hidden select-none focus:outline-none focus:ring-1 focus:ring-black"
      >
        {/* Top Header Row: Icon + Index + Top Right Arrow */}
        <div className="relative z-10 w-full flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {/* Clean Minimal Icon */}
            <div className="w-11 h-11 border border-neutral-200 group-hover:border-black bg-neutral-50 group-hover:bg-black group-hover:text-white flex items-center justify-center text-neutral-900 transition-all duration-300 rounded-none shrink-0 shadow-2xs">
              <span className="material-symbols-outlined text-xl">
                {service.icon || "code_blocks"}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-black tracking-widest transition-colors duration-300">
                // {service.number}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                Capability
              </span>
            </div>
          </div>

          <div className="w-9 h-9 border border-neutral-200 group-hover:border-black group-hover:bg-black group-hover:text-white flex items-center justify-center text-neutral-700 transition-all duration-300 rounded-none shrink-0 shadow-2xs">
            <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              arrow_outward
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="relative z-10 w-full mb-6">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 uppercase mb-3 leading-tight group-hover:text-black transition-colors">
            {service.title}
          </h3>

          <p className="text-sm text-neutral-600 leading-relaxed font-sans line-clamp-4">
            {service.shortDescription}
          </p>
        </div>

        {/* Structured Feature Bullet Checklist */}
        <div className="relative z-10 w-full mb-6 space-y-2.5">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2.5 text-xs text-neutral-700">
              <span className="w-1.5 h-1.5 bg-neutral-300 group-hover:bg-black transition-colors duration-300 rounded-none shrink-0 mt-1.5" />
              <span className="font-medium leading-snug">{feature}</span>
            </div>
          ))}
        </div>

        {/* Bottom Feature Tags & Action Footer */}
        <div className="relative z-10 w-full pt-4 border-t border-neutral-100 group-hover:border-neutral-200 transition-colors duration-300 mt-auto">
          <div className="flex items-center justify-between text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 group-hover:text-black transition-colors duration-300">
            <span>Explore Architecture</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">
              arrow_forward
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
