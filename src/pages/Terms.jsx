import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";

export default function Terms() {
  return (
    <main className="pt-32 pb-16 md:pb-24 px-4 sm:px-6 md:px-margin-desktop max-w-4xl mx-auto">
      <SEO 
        title="Terms of Service" 
        description="Terms of Service and client agreement principles for Zetex Digital Solutions." 
      />

      <div className="mb-12 pt-8 md:pt-12 border-b border-outline-variant pb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary font-body-md text-sm mb-6 transition-colors"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Home
        </Link>
        <span className="font-mono text-xs uppercase tracking-widest text-secondary block mb-2">Legal & Governance</span>
        <h1 className="font-h1 text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-secondary font-body-md text-sm">
          Last updated: January 2026 • Zetex Digital Solutions
        </p>
      </div>

      <div className="space-y-10 font-body-md text-secondary leading-relaxed text-base sm:text-lg">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">1. Agreement to Terms</h2>
          <p>
            By accessing or engaging Zetex Digital Solutions ("Zetex", "we", "us", or "our") for design, engineering, artificial intelligence, or consultancy services, you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a company or legal entity, you represent that you have authority to bind such entity.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">2. Scope of Services</h2>
          <p>
            Zetex provides customized software development, autonomous AI workflows, web applications, mobile platforms, and technical architecture consulting. Detailed deliverables, project milestones, acceptance criteria, and timelines are formally defined in individual Statements of Work (SOW) or written proposals agreed upon between Zetex and the client.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">3. Intellectual Property Ownership</h2>
          <p className="mb-3">
            Upon receipt of full payment for agreed milestones, the client receives exclusive ownership rights to the bespoke code, custom designs, and assets created specifically for the project.
          </p>
          <p>
            Zetex retains ownership of pre-existing core libraries, foundational toolkits, proprietary algorithms, and developer utilities developed independently prior to or outside of the engagement. Zetex grants the client a perpetual, royalty-free license to use any embedded components necessary for system operation.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">4. Confidentiality & Non-Disclosure</h2>
          <p>
            Both parties agree to treat all non-public technical, financial, and strategic information exchanged during project evaluation and execution as strictly confidential. We are committed to signing mutual Non-Disclosure Agreements (NDAs) before architectural discovery or repository sharing.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">5. AI Solutions & Automated Workflows</h2>
          <p>
            When building and deploying AI agents and workflow automations, Zetex engineers solutions with appropriate guardrails, persistent memory, and API integrations. Clients are responsible for ensuring that inputs provided to automated systems comply with applicable data privacy regulations and domain-specific rules.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">6. Payment Terms & Invoicing</h2>
          <p>
            Payment milestones are structured in project agreements. Invoices are due within the payment window specified on each invoice. In the event of milestone suspension or project alterations requested by the client, adjustments to timelines and scope will be documented via change orders.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Zetex shall not be liable for any indirect, incidental, consequential, or punitive damages, including loss of profits, data, or business interruption arising from the use or inability to use deployed software systems.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">8. Governing Law & Contact</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of India. For any inquiries or legal notices regarding these terms, please contact us directly at{" "}
            <a href="mailto:hello@zetex.studio" className="text-primary font-medium underline">
              hello@zetex.studio
            </a>{" "}
            or call{" "}
            <a href="tel:+918714196266" className="text-primary font-medium underline">
              +91 87141 96266
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
