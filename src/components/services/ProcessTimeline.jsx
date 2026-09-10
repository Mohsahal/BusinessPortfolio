import React from "react";
import { processTimeline } from "../../data/services";
import { Badge } from "../ui/SectionHeader";

export default function ProcessTimeline() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant pt-24 mb-section-gap">
      <div className="mb-16">
        <Badge className="mb-6">Methodology</Badge>
        <h2 className="font-h2-mobile md:font-h2 text-h2-mobile md:text-h2 text-primary font-bold">
          From idea to impact.
        </h2>
      </div>

      {/* Horizontal Timeline (Desktop) / Vertical (Mobile) */}
      <div className="relative">
        {/* Track Line */}
        <div className="absolute top-0 md:top-8 left-4 md:left-0 w-0.5 md:w-full h-full md:h-0.5 bg-outline-variant"></div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 pl-12 md:pl-0">
          {processTimeline.map((step, index) => {
            const isFirst = index === 0;
            return (
              <div key={step.step} className="relative pt-0 md:pt-16">
                {/* Node Dot */}
                <div className={`absolute top-0 left-[-48px] md:left-0 w-8 h-8 bg-background border-2 ${
                  isFirst ? "border-primary" : "border-outline-variant"
                } rounded-full flex items-center justify-center z-10 md:top-4 md:-translate-y-1/2`}>
                  {isFirst && <span className="w-2 h-2 bg-primary rounded-full"></span>}
                </div>

                <div className="font-label-caps text-xs text-secondary mb-1">
                  STAGE {step.step}
                </div>
                <h4 className="font-subheading text-lg md:text-xl font-semibold text-primary mb-2">
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
