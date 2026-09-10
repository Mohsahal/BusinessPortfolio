import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

export default function ProjectBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-20 gap-x-12 items-start">
      {projects.map((project, index) => {
        // Use the height defined in the data, fallback to a standard height
        const heightClass = project.imageHeight || "h-[300px] md:h-[400px] lg:h-[500px]";
        
        return (
          <div 
            key={project.id} 
            className={`group cursor-pointer flex flex-col ${project.colSpan} ${project.offset || ''}`}
          >
            <Link to={`/work/${project.id}`} className="block w-full">
              {/* Image Container */}
              <div className={`w-full ${heightClass} relative overflow-hidden bg-surface-container-lowest mb-8`}>
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  src={project.image}
                  alt={project.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                
                {/* Top Left Badge - Sharp & Brutalist */}
                <div className="absolute top-5 left-5 bg-white px-4 py-2 shadow-sm">
                  <span className="font-mono text-[10px] font-bold text-black uppercase tracking-[0.2em]">
                    {project.category || project.tags[0]}
                  </span>
                </div>
                
                {/* Floating Arrow - High Contrast Persistent */}
                <div className="absolute bottom-0 right-0 bg-primary w-12 h-12 flex items-center justify-center group-hover:bg-black group-hover:w-14 group-hover:h-14 transition-all duration-300">
                  <span className="material-symbols-outlined text-white text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                    arrow_outward
                  </span>
                </div>
              </div>
              
              {/* Content Below Image */}
              <div className="flex flex-col pr-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-h3 text-3xl lg:text-4xl font-bold text-primary tracking-tight group-hover:text-primary/70 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <span className="font-mono text-sm font-medium text-outline tracking-widest uppercase">
                    {project.year || "2024"}
                  </span>
                </div>
                
                <p className="font-body-md text-base lg:text-lg text-secondary leading-relaxed line-clamp-2 font-light mb-6">
                  {project.shortDescription}
                </p>
                
                {/* Tech Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <span 
                        key={i} 
                        className="font-mono text-[10px] lg:text-xs text-secondary border border-outline-variant px-3 py-1 uppercase tracking-wider bg-surface-bright/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
