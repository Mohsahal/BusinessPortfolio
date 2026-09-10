import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-32 pb-section-gap text-center">
      <div className="max-w-xl">
        <span className="font-label-caps text-xs text-outline uppercase tracking-widest block mb-4">
          Error 404
        </span>
        <h1 className="font-hero-mobile md:font-h1 text-4xl md:text-6xl font-bold text-primary mb-6">
          Page not found.
        </h1>
        <p className="font-body-lg text-secondary mb-10">
          The requested system route does not exist or has been relocated within the architecture.
        </p>
        <Link
          to="/"
          className="magnetic-button inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary rounded-DEFAULT font-body-md"
        >
          Return to Overview →
        </Link>
      </div>
    </main>
  );
}
