import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";

export default function Privacy() {
  return (
    <main className="pt-32 pb-16 md:pb-24 px-4 sm:px-6 md:px-margin-desktop max-w-4xl mx-auto">
      <SEO 
        title="Privacy Policy" 
        description="Privacy policy and data protection standards for Zetex Digital Solutions." 
      />

      <div className="mb-12 pt-8 md:pt-12 border-b border-outline-variant pb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary font-body-md text-sm mb-6 transition-colors"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Home
        </Link>
        <span className="font-mono text-xs uppercase tracking-widest text-secondary block mb-2">Data Protection</span>
        <h1 className="font-h1 text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-secondary font-body-md text-sm">
          Last updated: January 2026 • Zetex Digital Solutions
        </p>
      </div>

      <div className="space-y-10 font-body-md text-secondary leading-relaxed text-base sm:text-lg">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">1. Introduction</h2>
          <p>
            At Zetex Digital Solutions ("Zetex", "we", "our", or "us"), we prioritize the privacy and security of individuals who visit our website, communicate with our studio, or engage us for software engineering and AI services. This policy describes how we collect, handle, and safeguard your data.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">2. Information We Collect</h2>
          <p className="mb-3">We collect information that you voluntarily provide to us when contacting our team:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-primary">Contact Details:</strong> Your name, business email address, phone number, and company name when filling our contact form or messaging us directly.</li>
            <li><strong className="text-primary">Project Requirements:</strong> Scope documents, technical specifications, and architectural goals shared during project scoping and consultation.</li>
            <li><strong className="text-primary">Usage & Technical Data:</strong> Standard aggregate analytics such as browser type, referring URLs, and interaction timestamps to help us optimize site performance.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">3. How We Use Your Information</h2>
          <p className="mb-3">We utilize the collected information strictly for legitimate operational purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responding to technical inquiries and providing proposals, estimates, and architecture consultations.</li>
            <li>Executing software development agreements, client communications, and deliverable handoffs.</li>
            <li>Maintaining operational security and ensuring compliance with mutual non-disclosure and contract terms.</li>
          </ul>
          <p className="mt-3">
            We do not sell, rent, or trade your personal or business data to third-party advertisers or data brokers under any circumstances.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">4. Data Security & Storage</h2>
          <p>
            We implement industry-standard encryption, strict access control policies, and secure cloud infrastructure to protect client codebases, credentials, and sensitive technical data from unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">5. Third-Party Integrations & Cloud Services</h2>
          <p>
            In building modern software architectures, we may interface with verified third-party cloud platforms (e.g. AWS, Render, Supabase, Google Cloud, OpenAI, Anthropic) under strict API security protocols and client-approved architectural designs.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">6. Your Rights & Data Retention</h2>
          <p>
            You have the right to request access to, correction of, or deletion of your personal contact data retained in our direct communication records. To submit a data inquiry or request deletion, reach out to us at{" "}
            <a href="mailto:hello@zetex.studio" className="text-primary font-medium underline">
              hello@zetex.studio
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">7. Contact Information</h2>
          <p>
            If you have questions regarding this Privacy Policy or our engineering data practices, contact us at:
          </p>
          <div className="mt-3 p-4 bg-surface-container-low border border-outline-variant rounded-lg text-sm text-primary">
            <div className="font-bold">Zetex Digital Solutions</div>
            <div>Email: hello@zetex.studio</div>
            <div>Phone: +91 87141 96266</div>
            <div>Studio: Kochi, Kerala, India</div>
          </div>
        </section>
      </div>
    </main>
  );
}
