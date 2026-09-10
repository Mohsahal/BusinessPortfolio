import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import { industries } from "../data/industries";
import { Badge } from "../components/ui/SectionHeader";

export default function Industries() {
  return (
    <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <SEO 
        title="Industries & Domains" 
        description="We combine domain-specific regulatory understanding with modern cloud and AI architectures to deliver outcomes across high-stakes industries." 
      />
      {/* Hero Section */}
      <section className="mb-section-gap pt-8 md:pt-16 max-w-4xl mx-auto flex flex-col items-center text-center">
        <Badge className="mb-6">Domain Expertise</Badge>
        <h1 className="font-hero-mobile text-hero-mobile md:font-h1 md:text-h1 text-primary font-bold tracking-tight mb-8">
          Engineered for industry-specific complexity.
        </h1>
        <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
          We combine domain-specific regulatory understanding with modern cloud and AI architectures to deliver tangible business outcomes across high-stakes industries.
        </p>
      </section>

      {/* Industries Grid */}
      <section className="space-y-12 mb-section-gap">
        {industries.map((ind, idx) => (
          <div
            key={ind.id}
            className="border border-outline-variant rounded-DEFAULT p-8 md:p-12 bg-surface-container-lowest hover:border-primary transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-gutter items-start"
          >
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-3xl text-primary font-light">
                  {ind.icon}
                </span>
                <span className="font-label-caps text-xs text-secondary font-bold">
                  0{idx + 1}
                </span>
              </div>
              <h2 className="font-subheading text-2xl md:text-3xl font-bold text-primary mb-4">
                {ind.name}
              </h2>
              <p className="font-body-md text-secondary leading-relaxed">
                {ind.description}
              </p>
            </div>

            <div className="md:col-span-8 bg-surface-bright p-6 md:p-8 rounded-DEFAULT border border-outline-variant/30">
              <h3 className="font-label-caps text-xs text-primary font-semibold uppercase tracking-wider mb-6">
                Key Deliverables & Industry Architecture
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ind.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-body-md text-secondary">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary text-on-primary rounded-lg p-10 md:p-20 text-center">
        <h2 className="font-h2 text-2xl md:text-4xl font-bold mb-6">
          Operating in a highly regulated or specialized sector?
        </h2>
        <p className="font-body-lg text-secondary-fixed-dim max-w-2xl mx-auto mb-10">
          Our engineering team builds custom compliance models and specialized workflows tailored to your sector's regulatory standards.
        </p>
        <Link
          to="/contact"
          className="magnetic-button inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-body-md font-semibold rounded-DEFAULT hover:bg-surface-bright transition-colors"
        >
          Consult With Industry Specialists →
        </Link>
      </section>
    </main>
  );
}
