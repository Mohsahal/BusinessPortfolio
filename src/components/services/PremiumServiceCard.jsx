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
          border border-[#261016] hover:border-[#8B2635]/70
          bg-[#14090C] hover:bg-[#1A0B10]
          shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(139,38,53,0.15)]
          hover:-translate-y-1 overflow-hidden select-none focus:outline-none focus:ring-1 focus:ring-[#8B2635]"
      >
        {/* Top Header Row: Icon + Top Right Arrow */}
        <div className="relative z-10 w-full flex items-center justify-between mb-6">
          {/* Clean Minimal Icon */}
          <div className="w-11 h-11 border border-[#38161E] group-hover:border-[#8B2635] bg-[#1E0D12] group-hover:bg-[#8B2635] flex items-center justify-center text-[#F3ECE2] transition-all duration-300 rounded-none shrink-0 shadow-xs">
            <span className="material-symbols-outlined text-xl">
              {service.icon || "code_blocks"}
            </span>
          </div>

          <div className="w-9 h-9 border border-[#38161E] group-hover:border-[#8B2635] bg-[#1E0D12] group-hover:bg-[#8B2635] flex items-center justify-center text-[#F3ECE2] transition-all duration-300 rounded-none shrink-0 shadow-xs">
            <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              arrow_outward
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="relative z-10 w-full mb-6">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F3ECE2] uppercase mb-3 leading-tight group-hover:text-[#F3ECE2] transition-colors">
            {service.title}
          </h3>

          <p className="text-sm text-[#9E9387] group-hover:text-[#C4B9AC] leading-relaxed font-sans line-clamp-4 transition-colors">
            {service.shortDescription}
          </p>
        </div>

        {/* Structured Feature Bullet Checklist */}
        <div className="relative z-10 w-full mb-6 space-y-2.5">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2.5 text-xs text-[#C4B9AC]">
              <span className="w-1.5 h-1.5 bg-[#8B2635] group-hover:bg-[#B3394B] transition-colors duration-300 rounded-none shrink-0 mt-1.5" />
              <span className="font-medium leading-snug group-hover:text-[#F3ECE2] transition-colors">{feature}</span>
            </div>
          ))}
        </div>

        {/* Bottom Feature Tags & Action Footer */}
        <div className="relative z-10 w-full pt-4 border-t border-[#261016] group-hover:border-[#38161E] transition-colors duration-300 mt-auto">
          <div className="flex items-center justify-between text-xs font-mono font-semibold uppercase tracking-wider text-[#8B2635] group-hover:text-[#B3394B] transition-colors duration-300">
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
