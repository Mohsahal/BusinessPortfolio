import React from "react";

export function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 bg-surface-bright rounded-full border border-outline-variant/30 font-label-caps text-label-caps text-secondary uppercase tracking-widest ${className}`}>
      {children}
    </span>
  );
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = false,
  className = ""
}) {
  return (
    <div className={`mb-16 md:mb-24 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-4xl"} ${className}`}>
      {badge && (
        <div className={`mb-6 ${centered ? "flex justify-center" : ""}`}>
          <Badge>{badge}</Badge>
        </div>
      )}
      {title && (
        <h2 className="font-h2-mobile md:font-h2 text-h2-mobile md:text-h2 text-primary tracking-tight mb-6">
          {title}
        </h2>
      )}
      {description && (
        <p className="font-body-lg text-body-lg text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
