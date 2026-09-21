import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "../ui/SectionHeader";
import Button from "../ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function WhyZetex() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const pillars = [
    {
      title: "Business-First Architecture",
      description: "Technology is a high-leverage business asset. We begin every engagement by analyzing your conversion funnel, data infrastructure, and revenue drivers to ensure code directly drives bottom-line growth."
    },
    {
      title: "Full-Stack Precision & Longevity",
      description: "We build for scale, security, and effortless maintainability. Using modern modular component libraries, typed backends, and cloud-native serverless systems, our work withstands aggressive user scaling."
    },
    {
      title: "Informed Minimalism",
      description: "Every pixel, spacing unit, and interaction must serve a functional outcome. We ruthlessly eliminate visual noise to create digital products that feel intuitive, lightning-fast, and premium."
    },
    {
      title: "AI-Integrated by Default",
      description: "From custom OpenAI/Anthropic automated pipelines to intelligent WhatsApp and CRM bots, we embed production-grade machine learning to multiply your team's operational velocity."
    }
  ];

  return (
    <motion.section 
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto mb-20 md:mb-section-gap pt-8 md:pt-12 scroll-mt-24"
    >
      <motion.div variants={itemVariants} className="mb-10 md:mb-16">
        <Badge className="mb-4 sm:mb-6">Philosophy</Badge>
        <h2 className="font-hero-mobile text-3xl sm:text-4xl md:font-h2 md:text-h2 text-[#F3ECE2] border-b border-[#261016] pb-4 md:pb-6 tracking-tight font-bold">
          Why Zetex?
        </h2>
      </motion.div>

      <div className="space-y-8 md:space-y-12">
        {pillars.map((pillar, idx) => (
          <motion.div
            variants={itemVariants}
            key={pillar.title}
            className={`flex flex-col md:flex-row gap-4 md:gap-8 items-start pb-8 md:pb-12 ${
              idx !== pillars.length - 1 ? "border-b border-[#261016]" : ""
            }`}
          >
            <div className="font-h1-mobile text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[#F3ECE2] md:w-1/2 tracking-tight leading-tight">
              {pillar.title}
            </div>
            <div className="md:w-1/2 pt-1 md:pt-4">
              <p className="font-body-lg text-sm sm:text-base md:text-lg text-[#9E9387] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Embedded CTA Block */}
      <motion.div 
        variants={itemVariants}
        className="mt-16 md:mt-24 bg-[#14090C] border border-[#261016] rounded-2xl p-6 sm:p-10 md:p-16 text-center shadow-xl relative overflow-hidden group"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#8B2635]/15 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10">
          <h3 className="font-h2-mobile md:font-h2 text-2xl md:text-4xl font-bold text-[#F3ECE2] mb-4 tracking-tight text-balance mx-auto">
            Ready to engineer your next milestone?
          </h3>
          <p className="font-body-lg text-body-lg text-[#9E9387] max-w-2xl mx-auto mb-8 text-pretty">
            Consult directly with our technical architects to scope your architecture, roadmap, and estimate.
          </p>
          <button 
            type="button"
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#8B2635] text-[#F3ECE2] font-body-md text-body-md px-8 py-4 rounded-xl shadow-lg shadow-[#8B2635]/25 hover:bg-[#A32D3F] border border-[#B3394B]/40 active:scale-95 transition-all duration-300 font-semibold cursor-pointer"
          >
            <span>Start the Conversation</span>
            <span className="material-symbols-outlined ml-2 text-base">arrow_forward</span>
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
}

