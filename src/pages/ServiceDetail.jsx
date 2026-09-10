import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/seo/SEO";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { Badge } from "../components/ui/SectionHeader";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId || (s.aliases && s.aliases.includes(serviceId)));

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find related projects if any
  const relatedProjects = projects.filter((p) => 
    p.tags.some((tag) => service.tags.some((sTag) => sTag.toLowerCase().includes(tag.toLowerCase()))) ||
    p.category.toLowerCase().includes(service.title.toLowerCase().split(" ")[0])
  ).slice(0, 2);

  return (
    <main className="pt-32 pb-section-gap">
      <SEO 
        title={service.title} 
        description={service.shortDescription || service.fullDescription}
      />
      {/* Service Header */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
        <div className="max-w-4xl pt-8 md:pt-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary font-body-md text-sm mb-8 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to All Services
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="font-body-md text-secondary font-semibold text-lg">{service.number}</span>
            <span className="w-8 h-[1px] bg-outline-variant"></span>
            <Badge>{service.title}</Badge>
          </div>

          <h1 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 text-primary mb-8 font-bold tracking-tight">
            {service.title}
          </h1>

          <p className="font-body-lg text-xl md:text-2xl text-secondary max-w-3xl leading-relaxed mb-12">
            {service.fullDescription}
          </p>

          <div className="flex flex-wrap gap-3">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="bg-surface-bright px-4 py-2 rounded-full font-label-caps text-xs text-primary border border-outline-variant"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities & Deliverables Breakdown */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Engineering Capabilities */}
          <div className="border border-outline-variant rounded-DEFAULT p-8 md:p-12 bg-surface-container-lowest">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-3xl text-primary font-light">
                tune
              </span>
              <h3 className="font-subheading text-2xl text-primary font-semibold">
                Core Capabilities
              </h3>
            </div>
            <ul className="space-y-4 font-body-md text-secondary">
              {service.capabilities.map((cap, idx) => (
                <li key={idx} className="flex items-start gap-4 pb-4 border-b border-surface-variant last:border-none">
                  <span className="font-label-caps text-xs text-primary font-bold pt-1">
                    0{idx + 1}
                  </span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tangible Deliverables */}
          <div className="border border-outline-variant rounded-DEFAULT p-8 md:p-12 bg-surface-bright">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-3xl text-primary font-light">
                inventory_2
              </span>
              <h3 className="font-subheading text-2xl text-primary font-semibold">
                Tangible Deliverables
              </h3>
            </div>
            <ul className="space-y-4 font-body-md text-secondary">
              {service.deliverables.map((del, idx) => (
                <li key={idx} className="flex items-start gap-4 pb-4 border-b border-outline-variant/30 last:border-none">
                  <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span className="text-primary font-medium">{del}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Relevant Case Studies */}
      {relatedProjects.length > 0 && (
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap border-t border-outline-variant pt-20">
          <div className="mb-12">
            <Badge className="mb-4">Proven Results</Badge>
            <h2 className="font-h1-mobile md:font-h2 text-2xl md:text-4xl text-primary font-bold">
              Related Case Studies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {relatedProjects.map((project) => (
              <Link
                key={project.id}
                to={`/work/${project.id}`}
                className="card-container group border border-outline-variant rounded-DEFAULT p-6 md:p-8 bg-surface-container-lowest hover:border-primary transition-all duration-300"
              >
                <div className="image-hover-zoom bg-surface-container-low mb-6 h-[260px] w-full rounded-DEFAULT overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={project.image}
                    alt={project.alt}
                  />
                </div>
                <h4 className="font-subheading text-xl font-bold text-primary mb-2">
                  {project.title}
                </h4>
                <p className="font-body-md text-secondary text-sm mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
                <span className="font-label-caps text-xs text-primary font-semibold flex items-center gap-1">
                  Read Case Study <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Direct Service CTA */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="bg-primary text-on-primary rounded-lg px-6 py-10 md:p-16 text-center">
          <h2 className="font-h2 text-2xl md:text-4xl font-bold mb-4">
            Need {service.title} for your enterprise?
          </h2>
          <p className="font-body-lg text-secondary-fixed-dim max-w-xl mx-auto mb-8">
            Consult with our engineering team to scope your requirements and receive a detailed architecture proposal.
          </p>
          <Link
            to="/contact"
            className="magnetic-button inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-body-md font-semibold rounded-DEFAULT hover:bg-surface-bright transition-colors"
          >
            Start a Conversation →
          </Link>
        </div>
      </section>
    </main>
  );
}
