import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { Badge } from "../ui/SectionHeader";

export default function FeaturedWork() {
  return (
    <section id="work" className="px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto mb-20 md:mb-section-gap scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
        <div className="max-w-3xl">
          <Badge className="mb-4">Portfolio</Badge>
          <h2 className="font-hero-mobile text-3xl sm:text-4xl md:font-h1 md:text-h1 text-[#F3ECE2] tracking-tight font-bold mb-3">
            Selected work
          </h2>
          <p className="font-subheading text-[#9E9387] text-base sm:text-lg md:text-xl">
            Real products. Real systems. Real impact.
          </p>
        </div>
        <div className="font-mono text-xs text-[#B3394B] font-semibold uppercase tracking-wider bg-[#1A0B10] px-3 py-1.5 rounded-full border border-[#38161E]">
          {projects.length} Production Deployments
        </div>
      </div>

      {/* High-Impact Visual Card Grid matching Stitch Design */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
        {projects.map((project, index) => {
          const isTopRow = project.colSpan === "md:col-span-6";
          const imageHeight = isTopRow 
            ? "h-[240px] sm:h-[280px] md:h-[320px]" 
            : "h-[190px] sm:h-[220px] md:h-[240px]";

          return (
            <div 
              key={project.id} 
              className={`flex flex-col overflow-hidden group cursor-pointer border border-[#261016] bg-[#12070A] shadow-lg hover:shadow-2xl hover:shadow-[#8B2635]/20 hover:border-[#8B2635]/70 transition-all duration-500 rounded-none ${
                project.colSpan || "md:col-span-6"
              }`}
            >
              <Link to={`/work/${project.id}`} className="flex flex-col h-full text-left">
                {/* 1. Top Image Stage */}
                <div className={`relative w-full ${imageHeight} overflow-hidden bg-[#180A0E] shrink-0`}>
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    src={project.image}
                    alt={project.alt || project.title}
                    loading={index < 2 ? "eager" : "lazy"}
                    onError={(e) => {
                      const src = e.currentTarget.src;
                      if (src.includes('/images/projects/')) {
                        e.currentTarget.src = src.replace('/images/projects/', '/images/');
                      } else if (src.includes('/images/')) {
                        e.currentTarget.src = src.replace('/images/', '/images/projects/');
                      }
                    }}
                  />
                  
                  {/* Subtle Image Bottom Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12070A] via-transparent to-black/20 pointer-events-none" />
                  
                  {/* Top Left Badge - Obsidian Wine & Bone */}
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10 bg-[#14090C]/90 backdrop-blur-md px-3 py-1 border border-[#38161E] shadow-sm">
                    <span className="font-mono text-[9px] md:text-[10px] font-bold text-[#EDE6DD] uppercase tracking-[0.16em]">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Top Right Arrow Button */}
                  <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 bg-[#1A0B10]/90 backdrop-blur-md w-8 h-8 md:w-9 md:h-9 flex items-center justify-center border border-[#38161E] text-[#EDE6DD] group-hover:bg-[#8B2635] group-hover:border-[#B3394B] group-hover:text-white transition-all duration-300 shadow-sm">
                    <span className="material-symbols-outlined text-sm md:text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                      arrow_outward
                    </span>
                  </div>
                </div>

                {/* 2. Bottom Content Panel (Solid dark wine background for 100% crystal-clear text visibility) */}
                <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-1 justify-between bg-[#12070A] border-t border-[#261016]/80">
                  <div>
                    {/* Technology Subtitle */}
                    {project.techSubtitle && (
                      <div className="font-mono text-[10px] md:text-[11px] text-[#B3394B] font-semibold mb-2 tracking-wider uppercase">
                        {project.techSubtitle}
                      </div>
                    )}

                    {/* Project Title */}
                    <h3 className="font-sans text-xl sm:text-2xl md:text-[26px] text-[#F3ECE2] group-hover:text-white font-bold tracking-tight group-hover:translate-x-0.5 transition-transform duration-300 leading-tight mb-2.5">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    {project.shortDescription && (
                      <p className="font-sans text-xs sm:text-sm text-[#A89D91] font-normal line-clamp-2 leading-relaxed mb-4">
                        {project.shortDescription}
                      </p>
                    )}
                  </div>

                  {/* Footer Meta Row: Metric on Left, Action Link on Right */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#261016] text-[11px] font-mono mt-auto">
                    <span className="text-[#C4B9AC] font-medium">
                      {project.metricHighlight || (project.year ? `Year: ${project.year}` : "")}
                    </span>
                    <span className="text-[#B3394B] group-hover:text-[#FF4D64] font-semibold tracking-wider uppercase inline-flex items-center gap-1 transition-colors">
                      {project.actionLabel || "VIEW CASE STUDY"} →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
