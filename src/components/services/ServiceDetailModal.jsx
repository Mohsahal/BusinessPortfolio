import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceDetailModal({ service, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleStartProject = () => {
    onClose();
    setTimeout(() => {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && service && (
        <div 
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm overflow-y-auto"
        >
          {/* Clean Luxury Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", damping: 28, stiffness: 340 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-[#13080B] p-5 sm:p-7 shadow-2xl border border-[#38161E] z-10 my-auto overflow-hidden text-[#F3ECE2]"
          >
            {/* Header: Icon + Number/Title + Close Button */}
            <div className="flex items-center justify-between pb-4 border-b border-[#2A1016] shrink-0 gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 rounded-none bg-[#1E0D12] border border-[#38161E] text-[#F3ECE2] flex items-center justify-center shrink-0 shadow-xs">
                  <span className="material-symbols-outlined text-xl">{service.icon === "search_insights" ? "query_stats" : (service.icon || "layers")}</span>
                </div>
                <div className="min-w-0">
                  <span className="inline-block font-mono text-[9px] font-bold tracking-widest text-[#E8E1D4] bg-[#1E0D12] px-2 py-0.5 border border-[#38161E] mb-0.5">
                    SERVICE {service.number}
                  </span>
                  <h3 className="font-h2 text-lg sm:text-xl font-bold tracking-tight text-[#F3ECE2] leading-tight uppercase truncate">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-8 h-8 shrink-0 bg-[#1E0D12] hover:bg-[#8B2635] text-[#F3ECE2] flex items-center justify-center transition-colors cursor-pointer border border-[#38161E]"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto py-4 pr-1 space-y-4">
              {/* Concise Description */}
              <p className="font-body-md text-xs sm:text-sm text-[#9E9387] leading-relaxed">
                {service.fullDescription || service.shortDescription}
              </p>

              {/* Core Capabilities - Perfectly Aligned 2-col Grid */}
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#8B2635] font-semibold mb-2">
                  Core Capabilities & Architecture
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(service.capabilities || service.features).map((item, idx, arr) => {
                    const isLastOdd = arr.length % 2 !== 0 && idx === arr.length - 1;
                    return (
                      <div 
                        key={item} 
                        className={`flex items-center gap-2 px-2.5 py-2 bg-[#180A0E] border border-[#2A1016] ${
                          isLastOdd ? "sm:col-span-2" : ""
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B2635] shrink-0" />
                        <span className="text-xs font-medium text-[#E8E1D4] leading-snug">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Deliverables - Balanced 2-col Grid */}
              {service.deliverables && (
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#8B2635] font-semibold mb-2">
                    Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((item) => (
                      <div 
                        key={item} 
                        className="flex items-center gap-2 font-mono text-[10.5px] text-[#C4B9AC] bg-[#180A0E] px-2.5 py-1.5 border border-[#2A1016]"
                      >
                        <span className="material-symbols-outlined text-xs text-[#B3394B] shrink-0">check</span>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Footer - Fixed at bottom */}
            <div className="pt-3.5 border-t border-[#2A1016] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <span className="text-[11px] font-mono text-[#9E9387] hidden sm:inline-block">
                Free technical architecture consultation
              </span>
              <button
                onClick={handleStartProject}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8B2635] hover:bg-[#A32D3F] text-[#F3ECE2] px-6 py-2.5 font-mono text-xs uppercase tracking-wider font-semibold transition-colors shadow-lg shadow-[#8B2635]/25 cursor-pointer"
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
