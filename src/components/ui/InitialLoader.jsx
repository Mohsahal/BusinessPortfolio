import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InitialLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    // Progress percentage animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(100, prev + Math.floor(Math.random() * 18) + 12);
      });
    }, 70);

    const timer = setTimeout(() => {
      document.body.style.overflow = "";
      if (onComplete) {
        onComplete();
      }
    }, 1400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 0.98,
        y: -12,
        transition: { 
          duration: 0.55, 
          ease: [0.76, 0, 0.24, 1] 
        } 
      }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0D0507] text-[#F3ECE2] selection:bg-[#8B2635] selection:text-[#F3ECE2] pointer-events-auto"
    >
      {/* Subtle background ambient gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B2635]/15 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative flex flex-col items-center z-10 px-6 max-w-xs w-full">
        {/* Brand Icon Mark */}
        <motion.div
          initial={{ scale: 0.75, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 h-20 rounded-2xl bg-black overflow-hidden flex items-center justify-center mb-6 shadow-[0_12px_32px_rgba(0,0,0,0.8)] border border-[#38161E] p-1.5"
        >
          <img 
            src="/images/zetex.jpeg" 
            alt="Zetex" 
            className="w-full h-full object-contain" 
          />
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-3"
        >
          <h1 className="font-h1 text-3xl sm:text-4xl font-extrabold tracking-[0.16em] text-[#EDE6DD]">
            ZETEX
          </h1>
          <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.24em] text-[#8B2635] uppercase mt-1.5 font-semibold">
            AUTOMATE · BUILD · BEYOND
          </p>
        </motion.div>

        {/* Progress Bar & Counter */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="w-full max-w-[180px] mt-6 flex flex-col items-center gap-2"
        >
          <div className="w-full h-[2px] bg-[#261016] rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-[#8B2635] rounded-full transition-all duration-100 ease-out shadow-[0_0_10px_rgba(139,38,53,0.6)]"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="flex justify-between w-full text-[10px] font-mono text-[#9E9387] font-medium tracking-wider">
            <span>INITIALIZING</span>
            <span className="text-[#E8E1D4]">{Math.min(progress, 100)}%</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
