import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServiceVisual from "./ServiceVisuals";

export default function ServiceCard({ service }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <Link
        to={`/services/${service.id}`}
        className="group relative flex flex-col justify-between h-full rounded-[2.25rem] p-8 md:p-10 transition-all duration-500 ease-out
          border border-neutral-300/70 hover:border-neutral-900/60
          bg-white/60 hover:bg-white
          shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)]
          hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,1)]
          hover:-translate-y-2.5 overflow-hidden"
      >
        {/* Subtle Background Shift Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/90 via-white to-neutral-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-secondary bg-neutral-100/90 group-hover:bg-black group-hover:text-white px-3.5 py-1.5 rounded-full border border-neutral-200/80 group-hover:border-black transition-all duration-300">
              {service.number}
            </span>

            {/* Hover-revealed Action Arrow */}
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 ease-out shadow-sm">
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </div>
          </div>

          {/* 3D Visual Centerpiece */}
          <div className="flex justify-center items-center my-6 py-2 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1.5">
            <ServiceVisual type={service.visualType} isHovered={isHovered} />
          </div>

          <h3 className="font-h2 text-2xl md:text-3xl text-primary font-bold tracking-tight mb-4 uppercase">
            {service.title}
          </h3>

          <p className="font-body-md text-secondary text-base leading-relaxed mb-8">
            {service.shortDescription}
          </p>

          {/* Feature bullets */}
          <div className="border-t border-neutral-200/70 pt-6 mb-8">
            <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-3">
              Included Features
            </div>
            <ul className="space-y-2.5">
              {(service.features || service.tags).map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-neutral-700 font-medium">
                  <span className="w-1.5 h-1.5 bg-neutral-900 group-hover:bg-black group-hover:scale-125 transition-transform duration-300 rounded-full flex-shrink-0" />
                  <span className="group-hover:text-black transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-neutral-200/60 flex justify-between items-center relative z-10">
          <span className="font-mono text-xs text-primary font-semibold uppercase tracking-wider inline-flex items-center gap-2 group-hover:opacity-75 transition-opacity">
            Explore Service Details
            <span className="material-symbols-outlined text-sm normal-case group-hover:translate-x-1 transition-transform duration-300">
              arrow_forward
            </span>
          </span>
        </div>
      </Link>
    </div>
  );
}
