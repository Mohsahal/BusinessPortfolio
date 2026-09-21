import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

export default function ProjectBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
      {projects.map((project, index) => {
        const isTopRow = project.colSpan === "md:col-span-6";
        const heightClass = isTopRow 
          ? "h-[440px] sm:h-[480px] md:h-[520px]" 
          : "h-[380px] sm:h-[420px] md:h-[460px]";
        
        return (
          <div 
            key={project.id} 
            className={`relative overflow-hidden group cursor-pointer ${project.colSpan || "md:col-span-6"} ${heightClass} border border-[#261016] bg-[#12070A] shadow-md hover:shadow-2xl hover:shadow-[#8B2635]/20 hover:border-[#8B2635]/70 transition-all duration-500 rounded-none`}
          >
            <Link to={`/work/${project.id}`} className="block w-full h-full text-left">
              {/* Background Image */}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src={project.image}
                alt={project.alt || project.title}
                loading={index < 2 ? "eager" : "lazy"}
              />
              
              {/* Dark Wine Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090204]/98 via-[#090204]/55 to-black/25 opacity-90 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none" />
              
              {/* Top Left Badge */}
              <div className="absolute top-4 left-4 md:top-5 md:left-5 z-10 bg-[#14090C]/90 backdrop-blur-md px-3 py-1 border border-[#38161E] shadow-sm">
                <span className="font-mono text-[9px] md:text-[10px] font-bold text-[#EDE6DD] uppercase tracking-[0.16em]">
                  {project.category}
                </span>
              </div>
              
              {/* Top Right Arrow Button */}
              <div className="absolute top-4 right-4 md:top-5 md:right-5 z-10 bg-[#1A0B10]/90 backdrop-blur-md w-8 h-8 md:w-9 md:h-9 flex items-center justify-center border border-[#38161E] text-[#EDE6DD] group-hover:bg-[#8B2635] group-hover:border-[#B3394B] group-hover:text-white transition-all duration-300 shadow-sm">
                <span className="material-symbols-outlined text-sm md:text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  arrow_outward
                </span>
              </div>
              
              {/* Bottom Content Area */}
              <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6 text-white z-10">
                {/* Tech Subtitle */}
                {project.techSubtitle && (
                  <div className="font-mono text-[9px] md:text-[10px] text-[#B3394B] font-semibold mb-1.5 tracking-wider uppercase">
                    {project.techSubtitle}
                  </div>
                )}

                {/* Project Title */}
                <h3 className="font-sans text-xl sm:text-2xl md:text-[28px] text-[#F3ECE2] group-hover:text-white font-bold tracking-tight group-hover:translate-x-0.5 transition-transform duration-300 leading-tight mb-2">
                  {project.title}
                </h3>

                {/* Short Description */}
                {project.shortDescription && (
                  <p className="font-sans text-xs sm:text-sm text-[#A89D91] font-normal line-clamp-2 max-w-xl leading-relaxed mb-3">
                    {project.shortDescription}
                  </p>
                )}

                {/* Footer Meta Row */}
                <div className="flex items-center justify-between pt-2 border-t border-[#261016]/80 text-[11px] font-mono">
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
  );
}
