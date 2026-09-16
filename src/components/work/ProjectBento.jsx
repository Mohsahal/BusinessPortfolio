import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

export default function ProjectBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
      {projects.map((project, index) => {
        const heightClass = project.imageHeight || "h-[360px] sm:h-[420px] md:h-[480px]";
        
        return (
          <div 
            key={project.id} 
            className={`relative overflow-hidden group cursor-pointer ${project.colSpan} ${heightClass} border border-neutral-200/50 bg-neutral-950 shadow-sm hover:shadow-xl transition-all duration-300`}
          >
            <Link to={`/work/${project.id}`} className="block w-full h-full text-left">
              {/* Background Image */}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src={project.image}
                alt={project.alt || project.title}
                loading={index < 2 ? "eager" : "lazy"}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Top Left Badge */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 bg-white px-3 py-1 shadow-sm">
                <span className="font-mono text-[9px] md:text-[10px] font-bold text-black uppercase tracking-[0.18em]">
                  {project.category || project.tags?.[0]}
                </span>
              </div>
              
              {/* Top Right Arrow Button */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10 bg-white w-8 h-8 md:w-9 md:h-9 flex items-center justify-center shadow-sm text-black group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-sm md:text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  arrow_outward
                </span>
              </div>
              
              {/* Bottom Content Area */}
              <div className="absolute bottom-5 left-5 right-5 md:bottom-7 md:left-7 md:right-7 text-white z-10">
                {/* Year */}
                <div className="font-mono text-[10px] md:text-xs text-white/60 mb-1.5 tracking-wider">
                  {project.year || "2026"}
                </div>

                {/* Project Title */}
                <h3 className="font-display text-2xl sm:text-3xl md:text-[36px] text-white font-normal tracking-tight group-hover:translate-x-1 transition-transform duration-300 leading-tight mb-2">
                  {project.title}
                </h3>

                {/* Short Description */}
                {project.shortDescription && (
                  <p className="font-sans text-xs sm:text-sm text-white/80 font-light line-clamp-2 max-w-xl leading-relaxed">
                    {project.shortDescription}
                  </p>
                )}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
