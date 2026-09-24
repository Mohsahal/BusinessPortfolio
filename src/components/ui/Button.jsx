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
  const hasCustomRadius = className.includes("rounded-");
  const baseStyles = `inline-flex items-center justify-center font-body-md text-body-md ${hasCustomRadius ? "" : "rounded-DEFAULT"} transition-all duration-300 text-center`;
  
  const variants = {
    primary: "bg-[#631B27] text-[#F5F1EA] hover:bg-[#782231] shadow-lg shadow-[#631B27]/25 font-semibold border border-[#7E2535]",
    secondary: "bg-[#EDE6DC] text-[#141414] border border-[#DFD7CA] hover:bg-[#DFD7CA] hover:border-[#C8BCA8] font-semibold",
    outline: "bg-transparent border border-[#DFD7CA] text-[#141414] hover:bg-[#EDE6DC] hover:text-[#141414] font-semibold",
    burgundyOutline: "bg-[#EDE6DC] text-[#631B27] border-2 border-[#631B27] hover:bg-[#631B27] hover:text-[#F5F1EA] hover:border-[#631B27] shadow-xs hover:shadow-lg hover:shadow-[#631B27]/25 font-bold",
    custom: ""
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
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {Element}
    </motion.div>
  );
}
