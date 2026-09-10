import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/SectionHeader";

export default function ProcessLifecycle() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      number: "01",
      title: "Discovery & Blueprint",
      tagline: "Aligning architectural specs with core business objectives.",
      timeline: "Days 1–3",
      description: "We dive deep into your operational workflows, user personas, technical requirements, and strategic goals. We audit existing systems and establish a crystal-clear technical roadmap with measurable milestone deliverables.",
      deliverables: [
        "Technical Architecture Specification",
        "Data Schema & Entity Relationship Mapping",
        "API Integration & Security Blueprint",
        "Sprint Milestones & Timeline Breakdown"
      ],
      tools: ["FigJam", "Mermaid.js", "Swagger", "Linear"]
    },
    {
      number: "02",
      title: "UX Architecture & Design",
      tagline: "Crafting intuitive, high-conversion interfaces and design systems.",
      timeline: "Week 1",
      description: "Before writing frontend code, we architect interactive prototypes and unified design systems. Every interaction, typography scale, and responsive breakpoint is engineered for frictionless usability and state-of-the-art visual excellence.",
      deliverables: [
        "Interactive Clickable High-Fidelity Prototype",
        "Component Design System & Token Library",
        "Responsive Mobile & Desktop Breakpoints",
        "WCAG 2.1 AA Accessibility Validation"
      ],
      tools: ["Figma", "Design Tokens", "Tailwind CSS", "Framer"]
    },
    {
      number: "03",
      title: "Agile Engineering & Sprints",
      tagline: "Rapid, production-ready code shipped in 2-week iterations.",
      timeline: "Weeks 1–2",
      description: "Our engineers build using modern, scalable architectures (React, Next.js, Node.js, WebSockets). We use daily CI/CD deployments and modular code structure, ensuring fast velocity without accumulating technical debt.",
      deliverables: [
        "Clean, Maintainable Production Codebase",
        "REST & GraphQL Microservices Architecture",
        "Real-time Data Sync & State Management",
        "Automated CI/CD Integration Pipelines"
      ],
      tools: ["React", "Next.js", "Node.js", "TypeScript", "Redis"]
    },
    {
      number: "04",
      title: "Automated QA & Security Auditing",
      tagline: "Zero compromises on speed, security, and edge-case resilience.",
      timeline: "Continuous",
      description: "Every build passes through automated unit tests, integration suites, and security scans. We run load testing up to 100k+ concurrent requests, test edge cases, and ensure strict compliance with modern security standards.",
      deliverables: [
        "Automated Unit & End-to-End Test Suite",
        "Security Vulnerability & Penetration Audit",
        "Stress & High-Concurrency Load Benchmarks",
        "OWASP & Compliance Readiness Report"
      ],
      tools: ["Jest", "Playwright", "Snyk", "Postman", "K6"]
    },
    {
      number: "05",
      title: "Zero-Downtime Deployment",
      tagline: "Orchestrating global edge infrastructure with high availability.",
      timeline: "Launch Week",
      description: "We deploy to modern cloud infrastructure (AWS, GCP, Vercel Edge) with automated container orchestration, edge caching, and zero-downtime database migrations to ensure continuous 99.99% uptime.",
      deliverables: [
        "Edge-Distributed Cloud Deployment",
        "Automated Database Migrations & Backups",
        "Global CDN Caching & DNS Configuration",
        "SSL Certificates & Zero-Downtime Switchover"
      ],
      tools: ["Docker", "AWS", "Vercel", "Cloudflare", "GitHub Actions"]
    },
    {
      number: "06",
      title: "Telemetry & Continuous Scaling",
      tagline: "Proactive monitoring, telemetry observability, and feature iteration.",
      timeline: "Ongoing",
      description: "Launch is only the start. We hook up comprehensive real-time telemetry (error tracking, APM, latency monitoring) and provide agile post-launch iterations to scale your platform alongside your business growth.",
      deliverables: [
        "Real-time Error Tracking & APM Dashboard",
        "Cloud Cost & Performance Optimization",
        "Comprehensive Architecture Documentation & Handover",
        "Dedicated SLA & Ongoing Support Retainer"
      ],
      tools: ["Datadog", "Sentry", "CloudWatch", "Grafana"]
    }
  ];

  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-20 border-t border-outline-variant">
      <div className="mb-14">
        <Badge className="mb-4">Engineering Blueprint</Badge>
        <h2 className="font-h1-mobile md:font-h2 text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">
          How we deliver from concept to scale.
        </h2>
        <p className="font-body-lg text-secondary max-w-2xl mt-4 leading-relaxed">
          A disciplined, 6-stage engineering lifecycle designed for speed, clarity, and uncompromising quality.
        </p>
      </div>

      {/* Stage Selector Pills (Desktop) */}
      <div className="hidden lg:grid grid-cols-6 gap-3 mb-10">
        {stages.map((stage, idx) => (
          <button
            key={stage.number}
            onClick={() => setActiveStage(idx)}
            className={`p-4 rounded-xl border text-left transition-all duration-300 ${
              activeStage === idx
                ? "bg-primary text-white border-primary shadow-lg scale-[1.02]"
                : "bg-surface-bright text-secondary border-outline-variant/50 hover:border-primary/40 hover:bg-white"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className={`font-mono text-xs font-bold ${activeStage === idx ? "text-white/70" : "text-outline"}`}>
                STAGE {stage.number}
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                activeStage === idx ? "bg-white/20 text-white" : "bg-surface-variant text-secondary"
              }`}>
                {stage.timeline}
              </span>
            </div>
            <div className={`font-semibold text-sm line-clamp-1 ${activeStage === idx ? "text-white" : "text-primary"}`}>
              {stage.title}
            </div>
          </button>
        ))}
      </div>

      {/* Active Stage Detailed Card (Desktop View) */}
      <div className="hidden lg:block bg-surface-bright rounded-2xl border border-outline-variant/60 p-10 md:p-12 shadow-sm">
        <div className="grid grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Overview & Description */}
          <div className="col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-outline uppercase tracking-wider">
                Stage {stages[activeStage].number} of 06
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span className="font-mono text-xs text-primary font-semibold bg-white border border-outline-variant/40 px-3 py-1 rounded-full">
                {stages[activeStage].timeline}
              </span>
            </div>

            <h3 className="font-h2 text-3xl md:text-4xl font-bold text-primary tracking-tight">
              {stages[activeStage].title}
            </h3>

            <p className="font-subheading text-lg font-medium text-primary/90 leading-snug">
              {stages[activeStage].tagline}
            </p>

            <p className="font-body-md text-secondary leading-relaxed text-base">
              {stages[activeStage].description}
            </p>

            <div className="pt-4">
              <div className="text-xs font-mono font-bold text-outline uppercase tracking-wider mb-3">
                Core Tooling & Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {stages[activeStage].tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-white border border-outline-variant/40 rounded-lg text-xs font-mono text-primary font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tangible Deliverables */}
          <div className="col-span-5 bg-white rounded-xl border border-outline-variant/50 p-7 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary text-xl">inventory_2</span>
              <h4 className="font-subheading text-base font-bold text-primary uppercase tracking-wide">
                Key Deliverables
              </h4>
            </div>

            <ul className="space-y-4">
              {stages[activeStage].deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </span>
                  <span className="text-sm font-medium text-primary leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-outline-variant/30 flex items-center justify-between text-xs text-secondary font-mono">
              <span>Quality Assurance</span>
              <span className="text-primary font-semibold">100% Peer Reviewed</span>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Stacked Stages List */}
      <div className="lg:hidden space-y-6">
        {stages.map((stage) => (
          <div
            key={stage.number}
            className="bg-surface-bright rounded-2xl border border-outline-variant/60 p-6 sm:p-8"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-xs font-bold text-outline">
                STAGE {stage.number}
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-white border border-outline-variant/40 text-primary font-semibold">
                {stage.timeline}
              </span>
            </div>

            <h3 className="font-h2 text-2xl font-bold text-primary mb-2">
              {stage.title}
            </h3>

            <p className="font-medium text-sm text-primary/80 mb-3">
              {stage.tagline}
            </p>

            <p className="font-body-md text-sm text-secondary leading-relaxed mb-6">
              {stage.description}
            </p>

            <div className="bg-white rounded-xl border border-outline-variant/40 p-5 mb-4">
              <div className="text-xs font-mono font-bold text-outline uppercase tracking-wider mb-3">
                Deliverables
              </div>
              <ul className="space-y-2.5">
                {stage.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs font-medium text-primary">
                    <span className="material-symbols-outlined text-primary text-sm font-bold flex-shrink-0 mt-0.5">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {stage.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 bg-white border border-outline-variant/40 rounded-md text-[11px] font-mono text-secondary"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
