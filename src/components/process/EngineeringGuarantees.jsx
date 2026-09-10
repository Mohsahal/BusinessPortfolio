import React from "react";
import { Badge } from "../ui/SectionHeader";

export default function EngineeringGuarantees() {
  const metrics = [
    {
      value: "< 100ms",
      label: "API Response Latency",
      description: "Edge caching and optimized database queries guarantee lightning-fast data fetching."
    },
    {
      value: "95+",
      label: "Google Lighthouse Score",
      description: "Flawless Core Web Vitals, accessibility ratings, and SEO performance metrics."
    },
    {
      value: "2-Week",
      label: "Iterative Sprint Cycles",
      description: "Predictable, agile velocity with tangible working deliverables every single cycle."
    },
    {
      value: "99.99%",
      label: "High Availability SLA",
      description: "Auto-healing container clusters and global edge routing for enterprise uptime."
    }
  ];

  const standards = [
    {
      title: "Strict Type Safety & Clean Code",
      description: "TypeScript strict mode, ESLint rules, and modular component design prevent runtime bugs."
    },
    {
      title: "Zero Vendor Lock-in",
      description: "Built strictly on industry-standard open-source technologies you can run anywhere."
    },
    {
      title: "OWASP Top 10 Hardened",
      description: "End-to-end encryption, sanitized inputs, rate limiting, and automated security scans."
    },
    {
      title: "Edge-Ready Infrastructure",
      description: "Cloud-native architectures engineered to scale from 1,000 to 100,000+ concurrent users."
    }
  ];

  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-20 border-t border-outline-variant">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge className="mb-4 mx-auto">Quality Benchmarks</Badge>
        <h2 className="font-h1-mobile md:font-h2 text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
          Standards you can measure.
        </h2>
        <p className="font-body-lg text-secondary leading-relaxed">
          We don't settle for "good enough". Every project we engineer adheres to strict quantitative quality benchmarks.
        </p>
      </div>

      {/* Numerical Metrics Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {metrics.map((m, idx) => (
          <div
            key={idx}
            className="bg-surface-bright border border-outline-variant/60 rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="font-h1 text-4xl sm:text-5xl font-extrabold text-primary tracking-tight mb-2">
                {m.value}
              </div>
              <div className="font-mono text-xs font-bold text-primary uppercase tracking-wider mb-3">
                {m.label}
              </div>
            </div>
            <p className="font-body-md text-xs text-secondary leading-relaxed">
              {m.description}
            </p>
          </div>
        ))}
      </div>

      {/* Standards List Bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {standards.map((s, idx) => (
          <div
            key={idx}
            className="bg-white border border-outline-variant/60 rounded-2xl p-8 flex items-start gap-5 hover:border-primary/40 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 mt-0.5">
              0{idx + 1}
            </div>
            <div>
              <h3 className="font-subheading text-lg font-bold text-primary mb-1.5">
                {s.title}
              </h3>
              <p className="font-body-md text-sm text-secondary leading-relaxed">
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
