import React, { useState } from "react";
import { motion } from "framer-motion";
import { services } from "../../data/services";
import { Badge } from "../ui/SectionHeader";
import PremiumServiceCard from "../services/PremiumServiceCard";
import ServiceDetailModal from "../services/ServiceDetailModal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  const scrollToContact = (e) => {
    e.preventDefault();
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
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      id="services"
      className="w-full bg-gradient-to-b from-[#3D0A13] via-[#330810] to-[#26050C] text-[#F5F1EA] py-20 md:py-28 relative scroll-mt-24 border-y border-[#5C1626]/50 mb-20 md:mb-section-gap overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[80%] bg-[#631B27]/25 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 md:gap-8">
          <motion.div variants={itemVariants} className="max-w-3xl">
            <span className="inline-flex items-center px-3.5 py-1 bg-[#4E101C] rounded-full border border-[#781E2E] font-mono text-[10px] text-[#F5F1EA] uppercase tracking-widest font-semibold shadow-xs mb-4 sm:mb-5">
              Services & Capabilities
            </span>
            <h2 className="font-hero-mobile text-3xl sm:text-4xl md:font-h2 md:text-h2 text-[#F5F1EA] tracking-tight leading-[1.15] mb-3 md:mb-4 text-balance font-bold">
              Technology built around your business.
            </h2>
            <p className="font-body-lg text-base sm:text-lg md:text-xl text-[#DFD7CA] max-w-2xl leading-relaxed">
              From intelligent automation to custom software, we create technology that solves real business problems.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full sm:w-auto shrink-0">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto justify-center group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-none bg-[#EDE6DC] hover:bg-[#DFD7CA] text-[#330810] font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span>Request a Custom Build</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </button>
          </motion.div>
        </div>

        {/* Premium Large Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="h-full">
              <PremiumServiceCard 
                service={service} 
                onSelect={(s) => setSelectedService(s)} 
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* In-Page Service Detail Modal (Zero Page Redirection) */}
      <ServiceDetailModal 
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </motion.section>
  );
}
