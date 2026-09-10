import React from "react";
import { Badge } from "../ui/SectionHeader";
import { Link } from "react-router-dom";

export default function PricingSection() {
  const tiers = [
    {
      name: "MVP & Prototype",
      price: "$15k - $25k",
      description: "Rapid development of your core product idea to secure funding or validate market fit.",
      features: [
        "Core Feature Implementation",
        "UI/UX Prototyping",
        "Responsive Web App",
        "Basic Analytics Setup",
        "4-6 Weeks Delivery"
      ]
    },
    {
      name: "Production App",
      price: "$30k - $60k",
      popular: true,
      description: "Full-scale application development with robust architecture for serious growth.",
      features: [
        "Advanced Architecture Design",
        "Custom Backend & APIs",
        "Mobile & Web Applications",
        "Third-party Integrations",
        "Rigorous QA & Testing",
        "3-4 Months Delivery"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Dedicated engineering teams for highly regulated or extremely complex scalable platforms.",
      features: [
        "Dedicated Engineering Pod",
        "Legacy System Modernization",
        "High-Availability Infrastructure",
        "Custom AI / LLM Workflows",
        "SLA & Ongoing Retainer",
        "6+ Months Delivery"
      ]
    }
  ];

  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-24 border-t border-outline-variant">
      <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <Badge className="mb-6">Investment</Badge>
          <h2 className="font-h2 text-4xl md:text-6xl text-primary font-bold tracking-tight">
            Transparent pricing.
          </h2>
        </div>
        <p className="font-body-md text-secondary md:max-w-md text-left">
          We price based on the value delivered and the complexity of the engineering required, not arbitrary hourly estimates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col p-8 md:p-10 border ${tier.popular ? 'border-primary bg-primary/5 relative shadow-sm' : 'border-outline-variant bg-surface-container-lowest'}`}
          >
            {tier.popular && (
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold">
                Most Common
              </div>
            )}
            <h3 className="font-h3 text-xl md:text-2xl font-bold text-primary mb-2">{tier.name}</h3>
            <p className="font-body-sm text-secondary mb-8 leading-relaxed h-12">{tier.description}</p>
            
            <div className="mb-8 pb-8 border-b border-outline-variant">
              <span className="font-mono text-3xl md:text-4xl text-primary font-light tracking-tighter">{tier.price}</span>
            </div>
            
            <ul className="flex flex-col gap-4 mb-10 flex-grow">
              {tier.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-base text-primary/60 mt-0.5">check</span>
                  <span className="font-body-md text-sm text-secondary">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link 
              to="/contact" 
              className={`w-full py-4 text-center font-mono text-xs uppercase tracking-widest font-bold transition-colors ${tier.popular ? 'bg-primary text-white hover:bg-black' : 'bg-surface-bright border border-outline-variant text-primary hover:bg-black hover:text-white'}`}
            >
              Start Conversation
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
