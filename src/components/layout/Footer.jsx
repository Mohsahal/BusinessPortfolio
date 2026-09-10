import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { footerLinks } from "../../data/navigation";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (e, href) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/" + href);
        return;
      }
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-primary text-on-primary w-full py-14 md:py-section-gap">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-gutter px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="md:col-span-4 mb-12 md:mb-0 flex flex-col justify-between">
          <div>
            <button
              onClick={(e) => scrollToSection(e, "#hero")}
              className="font-h1-mobile text-h1-mobile font-bold text-on-primary mb-6 inline-block tracking-tighter text-left cursor-pointer hover:opacity-80 transition-opacity"
            >
              XYZ
            </button>
            <p className="font-body-md text-body-md text-secondary-fixed-dim max-w-xs mb-8">
              Software, AI and digital solutions designed to turn ambitious ideas into powerful products.
            </p>
          </div>
          <p className="font-body-md text-body-md text-secondary-fixed-dim">
            © {new Date().getFullYear()} XYZ Digital Solutions. All rights reserved.
          </p>
        </div>

        {/* Links Grid */}
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Navigation */}
          <div className="flex flex-col space-y-4 font-body-md text-body-md">
            <span className="font-label-caps text-label-caps text-secondary-fixed-dim mb-2 uppercase tracking-wider">Navigation</span>
            {footerLinks.navigation.map((item) => (
              <button
                key={item.name}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-left text-secondary-fixed-dim hover:text-on-primary transition-all duration-300 hover:translate-x-1 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-4 font-body-md text-body-md">
            <span className="font-label-caps text-label-caps text-secondary-fixed-dim mb-2 uppercase tracking-wider">Company</span>
            {footerLinks.company.map((item) => (
              <button
                key={item.name}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-left text-secondary-fixed-dim hover:text-on-primary transition-all duration-300 hover:translate-x-1 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Connect / Contact */}
          <div className="flex flex-col space-y-4 font-body-md text-body-md">
            <span className="font-label-caps text-label-caps text-secondary-fixed-dim mb-2 uppercase tracking-wider">Direct</span>
            <button
              onClick={(e) => scrollToSection(e, "#contact")}
              className="text-left text-secondary-fixed-dim hover:text-on-primary transition-all duration-300 hover:translate-x-1 cursor-pointer"
            >
              Contact Us
            </button>
            <a
              href="tel:+917306093151"
              className="text-secondary-fixed-dim hover:text-on-primary transition-all duration-300 hover:translate-x-1 text-sm inline-flex items-center gap-1.5"
            >
              +91 73060 93151
            </a>
            <a
              href="mailto:hello@xyz.studio"
              className="text-secondary-fixed-dim hover:text-on-primary transition-all duration-300 hover:translate-x-1 text-sm break-all"
            >
              hello@xyz.studio
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col space-y-4 font-body-md text-body-md">
            <span className="font-label-caps text-label-caps text-secondary-fixed-dim mb-2 uppercase tracking-wider">Social</span>
            {footerLinks.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-secondary-fixed-dim hover:text-on-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1"
              >
                {item.name}
                <span className="material-symbols-outlined text-xs">north_east</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
