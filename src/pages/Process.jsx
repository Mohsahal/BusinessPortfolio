import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import ProcessLifecycle from "../components/process/ProcessLifecycle";
import CollaborationModel from "../components/process/CollaborationModel";
import CorePrinciples from "../components/services/CorePrinciples";
import EngineeringGuarantees from "../components/process/EngineeringGuarantees";
import ProcessFAQ from "../components/process/ProcessFAQ";

export default function Process() {
  return (
    <main className="pt-19.5 pb-section-gap">
      <SEO 
        title="Our Process - Engineering Methodology & Workflow" 
        description="From blueprint to high-scale production. Learn how our 2-week sprint cycles, agile engineering, and transparent collaboration deliver digital excellence." 
      />
      
      {/* Two-Column Process Hero Section */}
      <section className="relative pt-24 lg:pt-28 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        
        {/* Left Side: Image with Decorative Elements */}
        <div className="relative h-[400px] lg:h-[540px] w-full rounded-3xl overflow-hidden shadow-2xl border border-outline-variant group">
          <div className="absolute inset-0 bg-primary/5 mix-blend-multiply z-10 transition-colors duration-500 group-hover:bg-transparent"></div>
          <img 
            src="/images/process-team.jpg" 
            alt="XYZ Engineering Process & Collaborative Team" 
            className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/70 m-6 lg:m-8 z-20"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/70 m-6 lg:m-8 z-20"></div>

          {/* Floating Metric Badge */}
          <div className="absolute bottom-6 left-6 z-20 bg-black/85 text-white backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-lg flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-xs tracking-wider uppercase font-semibold">
              Agile 2-Week Cadence
            </span>
          </div>
        </div>

        {/* Right Side: Hero Content */}
        <div className="w-full flex flex-col items-start text-left z-10">
          <div className="inline-flex items-center gap-4 px-5 py-2 border border-outline-variant bg-surface-bright rounded-full mb-8 lg:mb-10 shadow-sm backdrop-blur-md">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
             </span>
             <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary font-bold">
               Our Engineering Workflow
             </span>
          </div>
          
          <h1 className="font-h1 text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.02] text-primary font-bold tracking-tighter mb-6 lg:mb-8">
            The engineering <br className="hidden md:block" />
            <span className="text-outline tracking-tight font-medium">behind digital impact.</span>
          </h1>
          
          <p className="font-body-lg text-lg lg:text-xl text-secondary leading-relaxed max-w-lg mb-8">
            We pair rapid 2-week execution with enterprise architectural rigor. Every line of code is peer-reviewed, tested, and built for 10x scale.
          </p>

          {/* Value Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-md pt-6 border-t border-outline-variant">
            <div className="bg-surface-bright border border-outline-variant/50 rounded-xl p-4">
              <div className="font-mono text-xs text-outline uppercase font-semibold mb-1">Cadence</div>
              <div className="font-bold text-primary text-sm">2-Week Sprints</div>
            </div>
            <div className="bg-surface-bright border border-outline-variant/50 rounded-xl p-4">
              <div className="font-mono text-xs text-outline uppercase font-semibold mb-1">Codebase</div>
              <div className="font-bold text-primary text-sm">100% IP Ownership</div>
            </div>
            <div className="bg-surface-bright border border-outline-variant/50 rounded-xl p-4">
              <div className="font-mono text-xs text-outline uppercase font-semibold mb-1">Deploys</div>
              <div className="font-bold text-primary text-sm">Daily Staging Builds</div>
            </div>
            <div className="bg-surface-bright border border-outline-variant/50 rounded-xl p-4">
              <div className="font-mono text-xs text-outline uppercase font-semibold mb-1">Uptime SLA</div>
              <div className="font-bold text-primary text-sm">99.99% Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Interactive 6-Stage Engineering Lifecycle */}
      <ProcessLifecycle />

      {/* 2. Collaboration & Communication Model */}
      <CollaborationModel />

      {/* 3. Core Philosophy & Architectural Principles */}
      <CorePrinciples />

      {/* 4. Quantitative Engineering Guarantees & Quality Benchmarks */}
      <EngineeringGuarantees />

      {/* 5. Process FAQ */}
      <ProcessFAQ />
      
      {/* 6. Bottom CTA Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-20 mb-12">
        <div className="border-t border-outline-variant pt-20 pb-12 flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2.5 px-5 py-2 border border-outline-variant/60 bg-surface-bright rounded-full mb-8 shadow-sm">
             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
             <span className="font-sans text-xs uppercase tracking-wider text-primary font-bold">
               Start Your Sprint
             </span>
          </div>

          <h2 className="font-h1 text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] text-primary font-extrabold tracking-tight mb-6 max-w-3xl">
            Ready to turn your roadmap <br className="hidden md:block"/>
            <span className="text-secondary font-bold">into high-impact reality?</span>
          </h2>
          
          <p className="font-body-lg text-lg sm:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Book a discovery call to audit your requirements, architecture, and get a predictable 2-week delivery plan.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto">
            {/* Primary Action Button */}
            <Link
              to="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-4 px-8 py-4 bg-primary text-on-primary font-sans font-semibold text-sm sm:text-base rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.22)] hover:bg-neutral-900 active:scale-95 transition-all duration-300 border border-black"
            >
              <span>Schedule Discovery Call</span>
              <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:translate-x-0.5">
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </span>
            </Link>

            {/* Direct Call Button */}
            <a
              href="tel:+917306093151"
              className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-4 px-7 py-4 border border-outline-variant/60 bg-white text-primary font-sans font-semibold text-sm sm:text-base rounded-xl shadow-sm hover:border-black hover:bg-surface-bright hover:shadow-md active:scale-95 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-surface-variant flex items-center justify-center text-primary group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-base">call</span>
                </span>
                <span>+917306093151</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
