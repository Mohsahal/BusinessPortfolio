import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { Badge } from "../ui/SectionHeader";

export default function FeaturedWork() {
  return (
    <section id="work" className="px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto mb-20 md:mb-section-gap scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
        <div className="max-w-3xl">
          <Badge className="mb-4">Portfolio</Badge>
          <h2 className="font-hero-mobile text-3xl sm:text-4xl md:font-h1 md:text-h1 text-[#141414] tracking-tight font-bold mb-3">
            Selected work
          </h2>
          <p className="font-subheading text-[#6A6258] text-base sm:text-lg md:text-xl">
            Real products. Real systems. Real impact.
          </p>
        </div>
        <div className="font-mono text-xs text-[#F5F1EA] font-semibold uppercase tracking-wider bg-[#631B27] px-3.5 py-1.5 rounded-full border border-[#782231] shadow-xs">
          {projects.length} Production Deployments
        </div>
      </div>

      {/* High-Impact Visual Card Grid matching Architectural Bone Design */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
        {projects.map((project, index) => {
          const isTopRow = project.colSpan === "md:col-span-6";
          const imageHeight = isTopRow 
            ? "h-[240px] sm:h-[280px] md:h-[320px]" 
            : "h-[190px] sm:h-[220px] md:h-[240px]";

          return (
            <motion.div 
              key={project.id} 
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.985 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col overflow-hidden group cursor-pointer border border-[#DFD7CA] bg-[#EDE6DC] hover:bg-[#E5DDD0] shadow-sm hover:shadow-2xl hover:shadow-[#631B27]/20 hover:border-[#631B27] transition-colors duration-300 rounded-none ${
                project.colSpan || "md:col-span-6"
              }`}
            >
              <Link to={`/work/${project.id}`} className="flex flex-col h-full text-left">
                {/* 1. Top Image Stage */}
                <div className={`relative w-full ${imageHeight} overflow-hidden bg-[#DFD7CA] shrink-0`}>
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    src={project.image}
                    alt={project.alt || project.title}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                  
                  {/* Subtle Image Bottom Vignette into Dark Bone */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#EDE6DC] via-transparent to-black/15 pointer-events-none" />
                  
                  {/* Top Left Badge - Rich Burgundy Accent */}
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10 bg-[#631B27] px-3.5 py-1 border border-[#7D2232] shadow-md">
                    <span className="font-mono text-[9px] md:text-[10px] font-bold text-[#F5F1EA] uppercase tracking-[0.16em]">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Top Right Arrow Button - Dark Bone with Burgundy hover */}
                  <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 bg-[#EDE6DC] w-8 h-8 md:w-9 md:h-9 flex items-center justify-center border border-[#DFD7CA] text-[#631B27] group-hover:bg-[#631B27] group-hover:border-[#631B27] group-hover:text-[#F5F1EA] transition-all duration-300 shadow-xs">
                    <span className="material-symbols-outlined text-sm md:text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                      arrow_outward
                    </span>
                  </div>
                </div>

                {/* 2. Bottom Content Panel in Dark Bone */}
                <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-1 justify-between bg-[#EDE6DC] group-hover:bg-[#E5DDD0] border-t border-[#DFD7CA] transition-colors duration-300">
                  <div>
                    {/* Technology Subtitle */}
                    {project.techSubtitle && (
                      <div className="font-mono text-[10px] md:text-[11px] text-[#631B27] font-semibold mb-2 tracking-wider uppercase">
                        {project.techSubtitle}
                      </div>
                    )}

                    {/* Project Title */}
                    <h3 className="font-sans text-xl sm:text-2xl md:text-[26px] text-[#141414] group-hover:text-[#631B27] font-bold tracking-tight group-hover:translate-x-0.5 transition-transform duration-300 leading-tight mb-2.5">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    {project.shortDescription && (
                      <p className="font-sans text-xs sm:text-sm text-[#5E564D] font-normal line-clamp-2 leading-relaxed mb-4">
                        {project.shortDescription}
                      </p>
                    )}
                  </div>

                  {/* Footer Meta Row: Metric on Left, Action Link on Right */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#DFD7CA] text-[11px] font-mono mt-auto">
                    <span className="text-[#6A6258] font-medium">
                      {project.metricHighlight || (project.year ? `Year: ${project.year}` : "")}
                    </span>
                    <span className="text-[#631B27] group-hover:text-[#782231] font-semibold tracking-wider uppercase inline-flex items-center gap-1 transition-colors">
                      {project.actionLabel || "VIEW CASE STUDY"} →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
