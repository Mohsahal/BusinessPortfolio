import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-[96vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto pt-32 sm:pt-40 md:pt-48 pb-24 sm:pb-32 overflow-hidden select-none">
      
      {/* ======================================================== */}
      {/* 1. DEEP SPACE BACKGROUND & SUBTLE COSMIC PARTICLES       */}
      {/* ======================================================== */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-5xl h-[60%] bg-gradient-to-b from-[#8B2635]/25 via-[#5E1722]/10 to-transparent rounded-full blur-[140px]" />
        
        {/* Cosmic Star Dust */}
        <div className="absolute top-12 left-1/4 w-1 h-1 bg-[#F3ECE2] rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-28 right-1/3 w-1.5 h-1.5 bg-[#F3ECE2] rounded-full opacity-40" />
        <div className="absolute top-44 left-1/6 w-1 h-1 bg-[#B3394B] rounded-full opacity-70" />
        <div className="absolute top-20 right-1/5 w-1 h-1 bg-[#F3ECE2] rounded-full opacity-50 animate-ping duration-1000" />
        <div className="absolute top-64 right-1/4 w-1.5 h-1.5 bg-[#F3ECE2] rounded-full opacity-35" />
      </div>

      {/* ======================================================== */}
      {/* 2. THE MAJESTIC CENTERED EARTH / PLANET (EXACTLY LIKE LOGO) */}
      {/* ======================================================== */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[48%] -translate-y-1/2 w-[520px] sm:w-[720px] md:w-[920px] lg:w-[1080px] h-[520px] sm:h-[720px] md:h-[920px] lg:h-[1080px] pointer-events-none -z-10 flex items-center justify-center">
        
        {/* Intense Crimson Atmospheric Halo & Outer Cosmic Bloom */}
        <div className="absolute inset-[-40px] rounded-full bg-gradient-to-b from-[#FF2B44]/25 via-[#8F2334]/15 to-transparent blur-[70px] sm:blur-[100px]" />

        {/* Planet Sphere Body with Glowing Horizon Rim */}
        <div 
          className="relative w-full h-full rounded-full border-t-2 border-[#FF3B55] border-x border-[#8F2334]/40 border-b border-transparent overflow-hidden"
          style={{
            background: "radial-gradient(circle at 50% 12%, #22070E 0%, #120306 40%, #050102 75%, #000000 100%)",
            boxShadow: `
              0 -10px 40px rgba(255, 59, 85, 0.6),
              0 -30px 90px rgba(179, 38, 56, 0.4),
              0 0 160px rgba(143, 35, 52, 0.25),
              inset 0 16px 60px rgba(255, 77, 100, 0.4),
              inset 0 40px 140px rgba(143, 35, 52, 0.3)
            `
          }}
        >
          {/* Top Atmospheric Rim Light Beam */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[90%] h-36 bg-gradient-to-b from-[#FF4D64]/50 via-[#8F2334]/20 to-transparent rounded-t-full blur-[10px]" />

          {/* Futuristic Planetary Latitude Grid Coordinates */}
          <svg 
            className="absolute inset-0 w-full h-full opacity-35" 
            viewBox="0 0 800 800" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="400" cy="400" rx="390" ry="110" stroke="#FF4D64" strokeWidth="0.8" strokeDasharray="6 6" />
            <ellipse cx="400" cy="400" rx="370" ry="220" stroke="#FF4D64" strokeWidth="0.6" strokeDasharray="4 8" />
            <ellipse cx="400" cy="400" rx="340" ry="330" stroke="#8F2334" strokeWidth="0.5" />
            <path d="M400 5 L400 795" stroke="#8F2334" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. HERO CONTENT FLOATING OVER THE PLANETARY HORIZON      */}
      {/* ======================================================== */}
      <motion.div 
        className="w-full max-w-4xl flex flex-col items-center justify-center text-center z-10 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Emblem & Official Brand Tag */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col items-center justify-center mb-7"
        >
        
        </motion.div>
        
        {/* Centered Main Headline */}
        <motion.h1 
          variants={itemVariants} 
          className="font-hero-mobile text-4xl sm:text-5xl md:text-6xl lg:text-[74px] leading-[1.08] text-[#F3ECE2] mb-7 tracking-tight font-extrabold max-w-4xl text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
        >
          We build digital experiences that move businesses forward.
        </motion.h1>
        
        {/* Centered Subtitle */}
        <motion.p 
          variants={itemVariants} 
          className="font-body-lg text-lg sm:text-xl md:text-2xl text-[#C4B9AC] max-w-2xl mx-auto mb-10 leading-relaxed text-balance"
        >
          Software, AI and digital solutions designed to turn ambitious ideas into powerful products.
        </motion.p>
        
        {/* Centered Action Buttons */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Button 
            href="#contact" 
            variant="primary" 
            className="w-full sm:w-auto justify-center px-9 py-4 rounded-full shadow-[0_10px_30px_rgba(179,38,56,0.35)] hover:shadow-[0_15px_40px_rgba(255,77,100,0.45)] font-semibold border border-[#FF4D64]/40"
          >
            Start a Project →
          </Button>
          <Button 
            href="#work" 
            variant="outline" 
            className="w-full sm:w-auto justify-center px-9 py-4 rounded-full bg-[#14090C]/80 hover:bg-[#1E0D12] backdrop-blur-md border-[#38161E] hover:border-[#8F2334] text-[#EDE6DD] font-semibold"
          >
            Explore Our Work
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
