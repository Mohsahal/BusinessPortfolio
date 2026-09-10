import React from "react";
import { Badge } from "../ui/SectionHeader";

export default function CorePrinciples() {
  const principles = [
    {
      id: "01",
      title: "Radical Transparency",
      description: "No black boxes. You have full visibility into our codebase, sprint progress, and technical decisions from day one. We over-communicate to eliminate surprises.",
      icon: "visibility"
    },
    {
      id: "02",
      title: "Engineering Excellence",
      description: "We don't cut corners. Every line of code is peer-reviewed, heavily tested, and built to scale. We treat your product as if it were our own flagship platform.",
      icon: "code_blocks"
    },
    {
      id: "03",
      title: "Agile Velocity",
      description: "Speed without sacrificing quality. Our CI/CD pipelines and modular architecture allow us to ship features rapidly and iterate based on real user feedback.",
      icon: "bolt"
    },
    {
      id: "04",
      title: "Future-Proof Architecture",
      description: "We build for tomorrow. By selecting the right cloud infrastructure and avoiding vendor lock-in, we ensure your application can handle 10x scale flawlessly.",
      icon: "architecture"
    }
  ];

  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-16 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left: Sticky Header */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <Badge className="mb-6">Core Philosophy</Badge>
          <h2 className="font-h2 text-4xl md:text-5xl text-primary font-bold tracking-tight mb-6">
            Built on <br /> uncompromising standards.
          </h2>
          <p className="font-body-md text-secondary leading-relaxed max-w-sm">
            Our process isn't just a checklist—it's a mindset. These core principles dictate how we write code, design interfaces, and partner with our clients.
          </p>
        </div>

        {/* Right: Principles Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {principles.map((principle) => (
            <div 
              key={principle.id} 
              className="bg-surface-bright border border-outline-variant p-8 md:p-10 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-4xl text-primary/80 font-light">
                  {principle.icon}
                </span>
                <span className="font-mono text-sm text-outline font-bold tracking-widest">
                  {principle.id}
                </span>
              </div>
              
              <h3 className="font-h3 text-xl md:text-2xl font-bold text-primary mb-4">
                {principle.title}
              </h3>
              <p className="font-body-sm text-secondary leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
