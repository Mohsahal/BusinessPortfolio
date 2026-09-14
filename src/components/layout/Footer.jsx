import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";
import { footerLinks } from "../../data/navigation";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
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
    } else if (href && href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-on-primary w-full py-10 md:py-14 relative">
      {/* Bottom overscroll / stretch extension to guarantee no white background can ever show */}
      <div className="absolute top-full left-0 right-0 w-full h-[100vh] bg-primary pointer-events-none -z-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-gutter px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="md:col-span-4 mb-8 md:mb-0 flex flex-col justify-between">
          <div>
            <button
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-3 font-h1-mobile text-2xl sm:text-3xl font-bold text-on-primary mb-4 inline-flex tracking-tighter text-left cursor-pointer hover:opacity-80 transition-opacity"
            >
              <span>ZETEX</span>
            </button>
            <p className="font-body-md text-sm sm:text-base text-secondary-fixed-dim max-w-xs mb-6">
              Software, AI and digital solutions designed to turn ambitious ideas into powerful products.
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="font-body-md text-xs sm:text-sm text-secondary-fixed-dim">
              © {new Date().getFullYear()} Zetex Digital Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-secondary-fixed-dim font-body-md">
              <Link to="/terms" className="hover:text-on-primary transition-colors hover:underline">
                Terms of Service
              </Link>
              <span>•</span>
              <Link to="/privacy" className="hover:text-on-primary transition-colors hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
          {/* Navigation */}
          <div className="flex flex-col space-y-2.5 sm:space-y-3 font-body-md text-sm">
            <span className="font-label-caps text-xs text-secondary-fixed-dim mb-1 uppercase tracking-wider font-semibold">Navigation</span>
            {footerLinks.navigation.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-left text-secondary-fixed-dim hover:text-on-primary transition-all duration-300 hover:translate-x-1 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-2.5 sm:space-y-3 font-body-md text-sm">
            <span className="font-label-caps text-xs text-secondary-fixed-dim mb-1 uppercase tracking-wider font-semibold">Company</span>
            {footerLinks.company.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-left text-secondary-fixed-dim hover:text-on-primary transition-all duration-300 hover:translate-x-1 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Connect / Contact */}
          <div className="flex flex-col space-y-2.5 sm:space-y-3 font-body-md text-sm">
            <span className="font-label-caps text-xs text-secondary-fixed-dim mb-1 uppercase tracking-wider font-semibold">Direct</span>
            <button
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-left text-secondary-fixed-dim hover:text-on-primary transition-all duration-300 hover:translate-x-1 cursor-pointer"
            >
              Contact Us
            </button>
            <a
              href="tel:+918714196266"
              className="text-secondary-fixed-dim hover:text-on-primary transition-all duration-300 hover:translate-x-1 text-sm inline-flex items-center gap-1.5"
            >
              +91 87141 96266
            </a>
            <a
              href="mailto:hello@zetex.studio"
              className="text-secondary-fixed-dim hover:text-on-primary transition-all duration-300 hover:translate-x-1 text-sm break-all"
            >
              hello@zetex.studio
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col space-y-2.5 sm:space-y-3 font-body-md text-sm">
            <span className="font-label-caps text-xs text-secondary-fixed-dim mb-1 uppercase tracking-wider font-semibold">Social</span>
            {footerLinks.social.map((item) => {
              const isLinkedIn = item.name.toLowerCase().includes("linkedin");
              const isInstagram = item.name.toLowerCase().includes("instagram");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary-fixed-dim hover:text-on-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 text-sm"
                >
                  {isLinkedIn && <Linkedin className="w-4 h-4 shrink-0" />}
                  {isInstagram && <Instagram className="w-4 h-4 shrink-0" />}
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
