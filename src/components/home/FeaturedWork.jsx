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
          <h2 className="font-hero-mobile text-3xl sm:text-4xl md:font-h1 md:text-h1 text-primary tracking-tight font-bold mb-3">
            Selected work
          </h2>
          <p className="font-subheading text-secondary text-base sm:text-lg md:text-xl">
            Real products. Real systems. Real impact.
          </p>
        </div>
        <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
          {projects.length} Production Deployments
        </div>
      </div>

      {/* High-Impact Visual Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`relative overflow-hidden group cursor-pointer h-[380px] sm:h-[440px] md:h-[480px] rounded-none border border-neutral-200/40 bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300 ${
              index === 4 ? "md:col-span-2 md:h-[480px]" : ""
            }`}
          >
            <Link to={`/work/${project.id}`} className="block w-full h-full text-left">
              {/* Background Image */}
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src={project.image}
                alt={project.alt || project.title}
                loading={index < 2 ? "eager" : "lazy"}
              />
              
              {/* Smooth Dark Gradient Overlay for High Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Top Left Badge - Sharp Clean Badge */}
              <div className="absolute top-5 left-5 md:top-6 md:left-6 z-10 bg-white px-4 py-1.5 shadow-sm rounded-none">
                <span className="font-mono text-[10px] md:text-xs font-bold text-black uppercase tracking-[0.15em]">
                  {project.category || project.tags?.[0]}
                </span>
              </div>
              
              {/* Top Right Arrow Button */}
              <div className="absolute top-5 right-5 md:top-6 md:right-6 z-10 bg-white w-9 h-9 md:w-10 md:h-10 rounded-none flex items-center justify-center shadow-sm text-black group-hover:bg-[#111111] group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-sm md:text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  arrow_outward
                </span>
              </div>
              
              {/* Bottom Content Area */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 text-white z-10">
                {/* Year + Stack row */}
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-white/70 tracking-wide">
                  <span>{project.year || "2026"}</span>
                  {project.stack && (
                    <>
                      <span>•</span>
                      <span className="text-white/80">{project.stack}</span>
                    </>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="font-h2 text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight text-white group-hover:translate-x-1 transition-transform duration-300 leading-tight">
                  {project.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
