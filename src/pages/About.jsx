import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";

export default function About() {
  const industries = [
    { name: "Startups & Scaleups", path: "/industries" },
    { name: "E-commerce & Retail", path: "/industries" },
    { name: "Healthcare & MedTech", path: "/industries" },
    { name: "Financial Services & FinTech", path: "/industries" },
  ];

  return (
    <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <SEO 
        title="About Us" 
        description="We are a digital product agency partnering with ambitious organizations to design and engineer systems that matter." 
      />
      {/* Hero Section */}
      <section className="mb-section-gap pt-8 md:pt-16">
        <h1 className="font-hero-mobile text-hero-mobile md:font-h1 md:text-6xl lg:text-[80px] leading-tight text-primary max-w-5xl mb-8 font-bold tracking-tight">
          We believe technology should make businesses better.
        </h1>
        <p className="font-body-md text-body-md text-secondary max-w-3xl leading-relaxed">
          XYZ focuses on crafting premium digital products and software solutions. We bridge the gap between complex engineering and elegant design, delivering systems that empower organizations to operate with greater efficiency and clarity.
        </p>
      </section>

      {/* Image Break */}
      <section className="mb-section-gap">
        <div 
          className="bg-cover bg-center w-full h-[360px] sm:h-[480px] md:h-[614px] rounded-xl border border-surface-variant bg-surface-container-low"
          style={{
            backgroundImage: `url('/images/about-office.jpg')`
          }}
          aria-label="Modern minimalist architectural office space reflecting XYZ design rigor"
        ></div>
      </section>

      {/* Philosophy Bento */}
      <section className="mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="bg-surface-bright border border-surface-variant p-8 md:p-12 rounded-xl interactive-element">
            <h3 className="font-subheading text-2xl md:text-3xl text-primary font-bold mb-4">Mission</h3>
            <p className="font-body-md text-secondary leading-relaxed">
              To engineer digital clarity from business complexity, providing technology solutions that are as intuitive as they are powerful.
            </p>
          </div>

          <div className="bg-surface-bright border border-surface-variant p-8 md:p-12 rounded-xl interactive-element">
            <h3 className="font-subheading text-2xl md:text-3xl text-primary font-bold mb-4">Vision</h3>
            <p className="font-body-md text-secondary leading-relaxed">
              A future where enterprise software is indistinguishable from high-end consumer experiences, driving adoption and operational excellence.
            </p>
          </div>

          <div className="bg-primary text-on-primary p-8 md:p-12 rounded-xl md:col-span-2 interactive-element">
            <h3 className="font-subheading text-2xl md:text-3xl font-bold mb-4">Values & Team Philosophy</h3>
            <p className="text-secondary-fixed-dim font-body-lg max-w-3xl leading-relaxed">
              We operate on principles of Informed Minimalism. Every line of code, every pixel, and every architectural decision must serve a definitive business purpose. Our team thrives on intellectual rigor, prioritizing robust engineering over ephemeral trends.
            </p>
          </div>
        </div>
      </section>

      {/* Why XYZ */}
      <section className="mb-section-gap">
        <h2 className="font-h1-mobile text-3xl md:font-h2 md:text-h2 text-primary mb-16 border-b border-surface-variant pb-6 font-bold tracking-tight">
          Why XYZ?
        </h2>

        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-8 items-start border-b border-surface-variant pb-12">
            <div className="font-h1-mobile text-3xl md:text-4xl font-bold text-primary md:w-1/2">
              Business First
            </div>
            <div className="md:w-1/2 pt-2 md:pt-4">
              <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
                Technology is a means to an end. We begin every engagement by understanding your operational metrics and strategic goals, ensuring our digital solutions deliver measurable impact.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start border-b border-surface-variant pb-12">
            <div className="font-h1-mobile text-3xl md:text-4xl font-bold text-primary md:w-1/2">
              Engineering Excellence
            </div>
            <div className="md:w-1/2 pt-2 md:pt-4">
              <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
                We build for scale, security, and longevity. Our architectures are robust, relying on proven patterns rather than fragile novelties, guaranteeing long-term stability.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start border-b border-surface-variant pb-12">
            <div className="font-h1-mobile text-3xl md:text-4xl font-bold text-primary md:w-1/2">
              Modern Design
            </div>
            <div className="md:w-1/2 pt-2 md:pt-4">
              <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
                We employ Informed Minimalism. Our interfaces are stripped of the extraneous, focusing user attention precisely where it is needed to accomplish complex tasks intuitively.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start pb-12">
            <div className="font-h1-mobile text-3xl md:text-4xl font-bold text-primary md:w-1/2">
              AI Ready
            </div>
            <div className="md:w-1/2 pt-2 md:pt-4">
              <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
                We design systems with data at their core, ensuring your infrastructure is primed to leverage machine learning and artificial intelligence capabilities as they evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="mb-section-gap">
        <h2 className="font-h1-mobile text-3xl md:font-h2 md:text-h2 text-primary mb-12 font-bold tracking-tight">
          Industries We Serve
        </h2>
        <div className="flex flex-col border-t border-surface-variant">
          {industries.map((ind) => (
            <Link
              key={ind.name}
              to={ind.path}
              className="py-8 border-b border-surface-variant flex justify-between items-center hover:bg-surface-bright transition-colors px-4 -mx-4 group"
            >
              <span className="font-subheading text-2xl md:text-3xl text-primary font-medium group-hover:translate-x-2 transition-transform duration-200">
                {ind.name}
              </span>
              <span className="material-symbols-outlined text-secondary text-2xl group-hover:text-primary group-hover:translate-x-1 transition-all">
                arrow_forward
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
