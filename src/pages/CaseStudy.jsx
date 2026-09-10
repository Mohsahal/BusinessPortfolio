import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/seo/SEO";
import { projects } from "../data/projects";
import { Badge } from "../components/ui/SectionHeader";

export default function CaseStudy() {
  const { projectId } = useParams();
  const projectIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[projectIndex];

  if (!project) {
    return <Navigate to="/#work" replace />;
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="pt-32 pb-section-gap">
      <SEO 
        title={`${project.title} - Case Study`} 
        description={project.shortDescription}
        image={project.image}
      />
      {/* Case Study Hero */}
      <header className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16 pt-8 md:pt-16">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary font-body-md text-sm mb-8 transition-colors"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Selected Work
        </Link>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <h1 className="font-hero-mobile text-hero-mobile md:font-h1 md:text-6xl lg:text-[80px] text-primary font-bold tracking-tight mb-8">
          {project.title}
        </h1>

        <p className="font-body-lg text-xl md:text-2xl text-secondary max-w-3xl leading-relaxed mb-10">
          {project.shortDescription}
        </p>

        {/* Live Demo Button */}
        <div>
          <a
            href={project.liveDemoUrl || "https://client-bbyk.onrender.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-DEFAULT font-label-caps text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            View Live Demo
          </a>
        </div>

        {/* Project Metadata bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-y border-outline-variant py-6 mt-12 font-body-md">
          <div>
            <div className="font-label-caps text-xs text-outline mb-1 uppercase">Client</div>
            <div className="font-semibold text-primary">{project.client}</div>
          </div>
          <div>
            <div className="font-label-caps text-xs text-outline mb-1 uppercase">Discipline</div>
            <div className="font-semibold text-primary">{project.category}</div>
          </div>
          <div>
            <div className="font-label-caps text-xs text-outline mb-1 uppercase">Timeline</div>
            <div className="font-semibold text-primary">{project.duration}</div>
          </div>
          <div>
            <div className="font-label-caps text-xs text-outline mb-1 uppercase">Year</div>
            <div className="font-semibold text-primary">{project.year}</div>
          </div>
        </div>
      </header>

      {/* Main Image Showcase */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
        <div className="w-full h-[360px] sm:h-[500px] md:h-[680px] rounded-lg overflow-hidden border border-outline-variant/40 bg-surface-container-low">
          <img
            className="w-full h-full object-cover"
            src={project.image}
            alt={project.alt}
            loading="eager"
          />
        </div>
      </section>

      {/* Quantitative Impact / Results Banner */}
      {project.results && (
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
          <div className="bg-surface-bright border border-outline-variant rounded-lg p-8 md:p-14">
            <div className="font-label-caps text-xs text-secondary uppercase tracking-widest mb-8 text-center md:text-left">
              Measurable Business Impact
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {project.results.map((res, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="font-h1-mobile md:font-h1 text-3xl md:text-5xl font-bold text-primary mb-2 tracking-tight">
                    {res.metric}
                  </div>
                  <div className="font-body-md text-secondary text-sm">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Narrative: Challenge & Solution */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4">
            <h2 className="font-h2 text-2xl md:text-4xl font-bold text-primary sticky top-32">
              Engineering Narrative
            </h2>
          </div>
          <div className="md:col-span-8 space-y-16">
            <div>
              <h3 className="font-subheading text-xl md:text-2xl font-bold text-primary mb-4">
                The Challenge
              </h3>
              <p className="font-body-lg text-secondary leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h3 className="font-subheading text-xl md:text-2xl font-bold text-primary mb-4">
                The Solution & Engineering Approach
              </h3>
              <p className="font-body-lg text-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>

            {project.architecture && (
              <div>
                <h3 className="font-subheading text-xl md:text-2xl font-bold text-primary mb-6">
                  Key Architectural Highlights
                </h3>
                <ul className="space-y-4">
                  {project.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 p-4 rounded-DEFAULT bg-surface-bright border border-outline-variant/30">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                      <span className="font-body-md text-primary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap border-t border-outline-variant pt-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="font-subheading text-2xl font-bold text-primary mb-2">
              Technology Stack
            </h3>
            <p className="font-body-md text-secondary">
              Production tools and frameworks leveraged for this deployment.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 max-w-xl">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-surface-container-lowest border border-outline-variant font-label-caps text-xs px-3.5 py-2 rounded-DEFAULT text-primary font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project Footer */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant pt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="font-label-caps text-xs text-secondary uppercase mb-2">Next Case Study</div>
            <Link
              to={`/work/${nextProject.id}`}
              className="font-h2 text-2xl md:text-4xl font-bold text-primary hover:opacity-75 transition-opacity"
            >
              {nextProject.title} →
            </Link>
          </div>
          <Link
            to="/#contact"
            className="magnetic-button bg-primary text-on-primary px-8 py-4 rounded-DEFAULT font-body-md"
          >
            Start Your Project →
          </Link>
        </div>
      </section>
    </main>
  );
}
