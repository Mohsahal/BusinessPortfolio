import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/seo/SEO";
import { services } from "../data/services";
import ServiceCard from "../components/services/ServiceCard";
import ProcessTimeline from "../components/services/ProcessTimeline";
import { Badge } from "../components/ui/SectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Services() {
  return (
    <main className="pt-24 lg:pt-32 pb-section-gap">
      <SEO 
        title="Digital Services" 
        description="Comprehensive digital solutions including full-stack development, mobile apps, AI automation, and spatial computing designed for enterprise." 
      />
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
        
        {/* Left Side: Text Content */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-12 xl:pr-16 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-1.5 bg-surface-bright rounded-full border border-outline-variant mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
            <span className="font-label-caps text-xs md:text-sm text-secondary uppercase tracking-widest font-semibold">
              Our Capabilities
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-h1-mobile md:font-h1 text-[44px] sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.1] text-primary mb-8 font-bold tracking-tighter">
            From idea to execution, we create technology that <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-400">works for your business.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="font-body-lg text-lg sm:text-xl text-secondary max-w-xl leading-relaxed mb-10">
            We deliver scalable, secure, and intuitive digital solutions designed to accelerate growth and operational efficiency for forward-thinking enterprises.
          </motion.p>
        </motion.div>

        {/* Right Side: Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] mt-12 lg:mt-0 relative"
        >
          <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-outline-variant relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10 pointer-events-none"></div>
            <img
              src="/images/services-hero.jpg"
              alt="Abstract digital mesh representing technology services"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </section>

      {/* Services Grid (2 Columns) */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
        <div className="mb-16">
          <Badge className="mb-4">Specialties</Badge>
          <h2 className="font-h2-mobile md:font-h2 text-h2-mobile md:text-h2 text-primary font-bold tracking-tight">
            Comprehensive Digital Expertise
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* CTA Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-section-gap">
        <div className="bg-surface-bright border border-outline-variant rounded-2xl p-12 md:p-24 text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neutral-100 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neutral-200 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
          
          <h2 className="font-h2-mobile md:font-h2 text-h2-mobile md:text-h2 text-primary mb-6 font-bold tracking-tight relative z-10">
            Ready to initiate your next project?
          </h2>
          <p className="font-body-lg text-lg sm:text-xl text-secondary max-w-2xl mx-auto mb-10 relative z-10">
            Engage with our technical architects to discuss your specific requirements.
          </p>
          <Link
            to="/contact"
            className="magnetic-button relative z-10 inline-flex items-center justify-center px-10 py-5 bg-primary text-on-primary font-body-lg rounded-full hover:bg-neutral-800 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            Start the Conversation
            <span className="material-symbols-outlined ml-3 text-xl">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
