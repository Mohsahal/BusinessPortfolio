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
    <section id="hero" className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col items-center justify-center text-center px-6 md:px-margin-desktop max-w-container-max mx-auto pt-36 md:pt-44 pb-20">
      {/* Subtle Ambient Radial Lighting in Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-[70%] bg-gradient-to-b from-neutral-200/40 via-neutral-100/20 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

      <motion.div 
        className="w-full max-w-4xl flex flex-col items-center justify-center text-center z-10 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Centered Brand Tag */}
        <motion.div 
          variants={itemVariants} 
          className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/80 mb-8 shadow-2xs"
        >
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-600 font-semibold">
            XYZ DIGITAL SOLUTIONS
          </span>
        </motion.div>
        
        {/* Centered Main Headline */}
        <motion.h1 
          variants={itemVariants} 
          className="font-hero-mobile text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] text-primary mb-8 tracking-tight font-extrabold max-w-4xl text-balance"
        >
          We build digital experiences that move businesses forward.
        </motion.h1>
        
        {/* Centered Subtitle */}
        <motion.p 
          variants={itemVariants} 
          className="font-body-lg text-lg sm:text-xl md:text-2xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed text-balance"
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
            className="w-full sm:w-auto justify-center px-9 py-4 rounded-full shadow-md hover:shadow-lg font-semibold"
          >
            Start a Project →
          </Button>
          <Button 
            href="#work" 
            variant="outline" 
            className="w-full sm:w-auto justify-center px-9 py-4 rounded-full bg-white/80 hover:bg-white border-neutral-300 font-semibold"
          >
            Explore Our Work
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
