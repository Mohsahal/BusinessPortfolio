import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!project) return null;

  const handleStartProject = () => {
    onClose();
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[2.5rem] shadow-2xl border border-neutral-200 z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center transition-colors cursor-pointer z-20 shadow-md backdrop-blur-sm"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            {/* Project Image Banner */}
            <div className="relative w-full h-[280px] sm:h-[360px] bg-neutral-900">
              <img
                src={project.image}
                alt={project.alt || project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-mono text-xs uppercase tracking-wider bg-white text-black px-3 py-1 font-bold inline-block mb-3">
                  {project.category || project.tags?.[0]}
                </span>
                <h3 className="font-h2 text-2xl sm:text-4xl font-bold tracking-tight">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 md:p-10">
              {/* Short Description / Overview */}
              <p className="font-body-lg text-lg text-secondary leading-relaxed mb-8">
                {project.overview || project.shortDescription}
              </p>

              {/* Challenge & Solution Grid */}
              {(project.challenge || project.solution) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  {project.challenge && (
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                        The Challenge
                      </h4>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                  )}
                  {project.solution && (
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                        Our Solution
                      </h4>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Technologies */}
              {project.technologies && (
                <div className="mb-8">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono font-medium text-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Results */}
              {project.results && (
                <div className="mb-8">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                    Key Outcomes
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {project.results.map((r, i) => (
                      <div key={i} className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 text-center">
                        <div className="font-mono text-xl font-bold text-primary">{r.metric}</div>
                        <div className="text-xs text-secondary mt-1">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions Footer */}
              <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                {project.liveDemoUrl ? (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-neutral-300 hover:bg-neutral-100 font-mono text-xs uppercase tracking-wider font-semibold text-neutral-800 transition-colors"
                  >
                    <span>Launch Live Interactive Demo</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                ) : <div />}

                <button
                  onClick={handleStartProject}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-3.5 rounded-full font-label-caps text-xs tracking-wider uppercase font-semibold hover:bg-neutral-800 transition-colors shadow-lg cursor-pointer"
                >
                  <span>Build Similar System</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
