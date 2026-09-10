import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceVisual from "./ServiceVisuals";

export default function ServiceDetailModal({ service, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!service) return null;

  const handleStartProject = () => {
    onClose();
    setTimeout(() => {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = contactEl.getBoundingClientRect().top;
        const offsetPosition = elementRect - bodyRect - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Clean Luxury Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-2xl border border-neutral-200/80 z-10 my-auto overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            {/* Header: Visual + Number + Title */}
            <div className="flex items-center gap-4 mb-6 pr-10">
              <div className="w-14 h-14 rounded-xl bg-neutral-100/90 border border-neutral-200/70 flex items-center justify-center shrink-0">
                <ServiceVisual type={service.visualType} isHovered={true} />
              </div>
              <div>
                <span className="font-mono text-[11px] font-semibold tracking-wider text-secondary bg-neutral-100 px-2.5 py-0.5 rounded-full border border-neutral-200">
                  SERVICE {service.number}
                </span>
                <h3 className="font-h2 text-2xl sm:text-3xl font-bold tracking-tight text-primary mt-1 leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Concise Description */}
            <p className="font-body-md text-sm sm:text-base text-secondary leading-relaxed mb-6">
              {service.fullDescription || service.shortDescription}
            </p>

            {/* Capabilities - Clean Minimalist Grid */}
            <div className="mb-6">
              <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                Core Capabilities & Architecture
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {(service.capabilities || service.features).map((item) => (
                  <div 
                    key={item} 
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-neutral-50/80 border border-neutral-200/60"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-neutral-800 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Tags */}
            {service.deliverables && (
              <div className="mb-8">
                <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-2.5">
                  Deliverables
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {service.deliverables.map((item) => (
                    <span 
                      key={item} 
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] text-neutral-700 bg-neutral-100 px-2.5 py-1 rounded-md"
                    >
                      <span className="material-symbols-outlined text-xs text-emerald-600">check</span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Footer */}
            <div className="pt-4 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline-block">
                Free technical architecture consultation
              </span>
              <button
                onClick={handleStartProject}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-7 py-3 rounded-full font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-800 transition-colors shadow-md cursor-pointer"
              >
                <span>Request This Service</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
