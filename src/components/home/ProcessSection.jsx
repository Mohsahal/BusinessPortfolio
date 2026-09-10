import React from "react";
import { processTimeline } from "../../data/services";
import { Badge } from "../ui/SectionHeader";

export default function ProcessSection() {
  return (
    <section id="process" className="px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto border-t border-neutral-200/80 pt-16 md:pt-24 mb-20 md:mb-section-gap scroll-mt-24">
      <div className="mb-10 md:mb-16">
        <Badge className="mb-4">Methodology</Badge>
        <h2 className="font-hero-mobile text-3xl sm:text-4xl md:font-h1 md:text-h1 text-primary font-bold tracking-tight mb-3">
          From idea to impact.
        </h2>
        <p className="font-body-lg text-base sm:text-lg md:text-xl text-secondary max-w-2xl leading-relaxed">
          A disciplined, battle-tested engineering framework designed to minimize risk and maximize delivery velocity.
        </p>
      </div>

      {/* Horizontal Timeline (Desktop) / Vertical (Mobile) */}
      <div className="relative">
        {/* Track Line */}
        <div className="absolute top-0 md:top-8 left-4 md:left-0 w-0.5 md:w-full h-full md:h-0.5 bg-neutral-200"></div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 pl-12 md:pl-0">
          {processTimeline.map((step, index) => {
            const isFirst = index === 0;
            return (
              <div key={step.step} className="relative pt-0 md:pt-16 group">
                {/* Node Dot */}
                <div className={`absolute top-0 left-[-48px] md:left-0 w-8 h-8 bg-white border-2 ${
                  isFirst ? "border-primary shadow-sm" : "border-neutral-300"
                } rounded-full flex items-center justify-center z-10 md:top-4 md:-translate-y-1/2 group-hover:border-black group-hover:scale-110 transition-all duration-300`}>
                  {isFirst && <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>}
                </div>

                <div className="font-mono text-xs text-neutral-400 font-semibold mb-1">
                  STAGE {step.step}
                </div>
                <h4 className="font-sans text-lg md:text-xl font-bold text-primary mb-2 group-hover:text-black transition-colors">
                  {step.title}
                </h4>
                <p className="font-body-md text-sm text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
