import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Button({
  children,
  to,
  href,
  variant = "primary", // "primary" | "secondary" | "outline"
  className = "",
  onClick,
  type = "button",
  arrow = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-body-md text-body-md rounded-DEFAULT transition-colors duration-300 text-center";
  
  const variants = {
    primary: "bg-primary text-on-primary px-8 py-4 hover:bg-surface-tint",
    secondary: "bg-surface-bright text-primary border border-outline-variant px-8 py-4 hover:bg-surface-container-low",
    outline: "border border-outline text-primary px-8 py-4 hover:bg-surface-container-low"
  };

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="material-symbols-outlined ml-2 text-[18px] transition-transform duration-300 group-hover:translate-x-1">
          arrow_forward
        </span>
      )}
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;
  const wrapperClass = className.includes("w-full") ? "w-full block" : "inline-block";

  const handleAnchorClick = (e) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    if (onClick) onClick(e);
  };

  let Element;
  if (to) {
    Element = <Link to={to} className={combinedClasses} {...props}>{content}</Link>;
  } else if (href) {
    Element = <a href={href} onClick={handleAnchorClick} className={combinedClasses} {...props}>{content}</a>;
  } else {
    Element = <button type={type} onClick={onClick} className={combinedClasses} {...props}>{content}</button>;
  }

  return (
    <motion.div
      className={wrapperClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {Element}
    </motion.div>
  );
}
