import React from "react";
import { Badge } from "../ui/SectionHeader";

export default function CollaborationModel() {
  const models = [
    {
      icon: "chat",
      title: "Direct Engineer Access",
      subtitle: "No account manager friction",
      description: "You get a dedicated Slack or Teams channel directly connected with our lead engineers and designers. Get immediate technical answers and real-time collaboration."
    },
    {
      icon: "preview",
      title: "Weekly Working Demos",
      subtitle: "Clickable software every sprint",
      description: "We don't wait months to show progress. Every Friday, we deploy a working staging build for review, walkthrough, and milestone feedback."
    },
    {
      icon: "rocket_launch",
      title: "Continuous Preview URLs",
      subtitle: "Instant visibility on every pull request",
      description: "Every feature branch generates a live preview URL on our edge infrastructure. Your team can test individual features before they are merged into production."
    },
    {
      icon: "key",
      title: "100% IP & Code Ownership",
      subtitle: "Full handover from Day 1",
      description: "You own every single commit, design file, and Docker configuration. We push to your private repositories and transfer all credentials upon launch."
    }
  ];

  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-20 border-t border-outline-variant">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Sticky Column */}
        <div className="lg:col-span-4 lg:sticky lg:top-32">
          <Badge className="mb-4">Collaboration Cadence</Badge>
          <h2 className="font-h1-mobile md:font-h2 text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6">
            Transparent partnership. Zero guesswork.
          </h2>
          <p className="font-body-lg text-secondary leading-relaxed mb-8">
            We operate as an integrated high-performance extension of your product team with clear communication, daily updates, and total transparency.
          </p>

          <div className="bg-surface-bright border border-outline-variant/60 rounded-2xl p-6 space-y-4">
            <div className="font-mono text-xs font-bold text-primary uppercase tracking-wider">
              Communication Stack
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-secondary">
              <span className="px-3 py-1.5 bg-white border border-outline-variant/30 rounded-lg">Slack / Teams</span>
              <span className="px-3 py-1.5 bg-white border border-outline-variant/30 rounded-lg">Linear / Jira</span>
              <span className="px-3 py-1.5 bg-white border border-outline-variant/30 rounded-lg">GitHub / GitLab</span>
              <span className="px-3 py-1.5 bg-white border border-outline-variant/30 rounded-lg">Loom / Google Meet</span>
            </div>
          </div>
        </div>

        {/* Right Cards Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {models.map((item, index) => (
            <div
              key={index}
              className="bg-surface-bright border border-outline-variant/60 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-outline-variant/40 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-2xl text-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </span>
                </div>

                <div className="font-mono text-[11px] text-outline uppercase tracking-wider mb-1">
                  {item.subtitle}
                </div>

                <h3 className="font-h3 text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>

                <p className="font-body-md text-sm text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-outline-variant/30 flex items-center justify-between text-xs font-mono text-outline">
                <span>Standard SLA</span>
                <span className="text-primary font-semibold">Included</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
